const React = require('react')

// Test-only stand-in for react-markdown: renders children as plain text so
// widget tests can assert on message content without pulling in the real
// (ESM-only) markdown parser.
module.exports = function ReactMarkdown({ children }) {
  return React.createElement('div', null, children)
}
