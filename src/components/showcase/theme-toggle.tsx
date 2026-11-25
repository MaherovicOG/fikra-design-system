import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('fikra-theme')
    return saved
      ? saved === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('fikra-theme', dark ? 'dark' : 'light')
  }, [dark])
  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`}
      onClick={() => setDark(!dark)}
    >
      {dark ? <Sun /> : <Moon />}
    </Button>
  )
}
