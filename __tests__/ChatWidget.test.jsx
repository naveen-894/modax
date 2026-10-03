import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ChatWidget from '../components/chatbot/ChatWidget'

function mockSessionResponse() {
  return {
    ok: true,
    json: async () => ({
      session_id: 'test-session-123',
      greeting: "Hi! Welcome to Modax. I'm your AI assistant.",
      suggested_prompts: ['What services do you offer?', 'Tell me about your projects.'],
    }),
  }
}

beforeEach(() => {
  window.sessionStorage.clear()
  global.fetch = jest.fn(() => Promise.resolve(mockSessionResponse()))
})

afterEach(() => {
  jest.restoreAllMocks()
})

test('renders a closed floating button by default', () => {
  render(<ChatWidget />)
  expect(screen.getByRole('button', { name: /open chat assistant/i })).toBeInTheDocument()
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
})

test('opens the chat window, starts a session, and shows the greeting + suggested prompts', async () => {
  const user = userEvent.setup()
  render(<ChatWidget />)

  await user.click(screen.getByRole('button', { name: /open chat assistant/i }))

  expect(screen.getByRole('dialog', { name: /modax ai assistant/i })).toBeInTheDocument()
  expect(global.fetch).toHaveBeenCalledWith(
    '/api/chatbot/session',
    expect.objectContaining({ method: 'POST' })
  )

  await waitFor(() =>
    expect(screen.getByText(/Hi! Welcome to Modax/i)).toBeInTheDocument()
  )
  expect(screen.getByText('What services do you offer?')).toBeInTheDocument()
  expect(screen.getByText('Tell me about your projects.')).toBeInTheDocument()
})

test('clicking the close button hides the chat window', async () => {
  const user = userEvent.setup()
  render(<ChatWidget />)

  await user.click(screen.getByRole('button', { name: /open chat assistant/i }))
  await waitFor(() => expect(screen.getByRole('dialog')).toBeInTheDocument())

  await user.click(screen.getByRole('button', { name: 'Close chat' }))
  await waitForElementToBeRemoved(() => screen.queryByRole('dialog'), { timeout: 3000 })
})

test('clicking "share project details" reveals the lead capture form', async () => {
  const user = userEvent.setup()
  render(<ChatWidget />)

  await user.click(screen.getByRole('button', { name: /open chat assistant/i }))
  await waitFor(() => expect(screen.getByText(/Hi! Welcome to Modax/i)).toBeInTheDocument())

  await user.click(screen.getByRole('button', { name: /share project details/i }))

  expect(screen.getByText('Share your project details')).toBeInTheDocument()
  expect(screen.getByLabelText(/business email/i)).toBeInTheDocument()
})
