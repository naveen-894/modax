'use client'

export default function SuggestedPrompts({ prompts, onSelect, disabled }) {
  if (!prompts?.length) return null

  return (
    <div className="flex flex-wrap gap-2 px-4 pb-3">
      {prompts.map((prompt) => (
        <button
          key={prompt}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(prompt)}
          className="text-xs font-medium text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-100 rounded-full px-3 py-1.5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {prompt}
        </button>
      ))}
    </div>
  )
}
