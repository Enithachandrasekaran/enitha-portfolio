import { useEffect, useState } from 'react'

/**
 * Typewriter loop through phrases. Cursor optional via CSS on wrapper.
 */
export function useTypingEffect(
  phrases,
  { typingMs = 75, deletingMs = 45, pauseMs = 2200 } = {},
) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!phrases.length) return undefined

    const phrase = phrases[i % phrases.length]
    let timeout

    if (!deleting && text === phrase) {
      timeout = setTimeout(() => setDeleting(true), pauseMs)
    } else if (deleting && text === '') {
      timeout = setTimeout(() => {
        setDeleting(false)
        setI((n) => (n + 1) % phrases.length)
      }, 0)
    } else if (deleting) {
      timeout = setTimeout(
        () => setText(phrase.slice(0, text.length - 1)),
        deletingMs,
      )
    } else {
      timeout = setTimeout(
        () => setText(phrase.slice(0, text.length + 1)),
        typingMs,
      )
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, i, phrases, typingMs, deletingMs, pauseMs])

  return text
}
