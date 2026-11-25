import { useEffect } from 'react'
import type { Decorator, Preview } from '@storybook/react-vite'
import { TooltipProvider } from '../src/components/ui/tooltip'
import '../src/index.css'

const withTheme: Decorator = function WithTheme(Story, context) {
  const dark = context.globals.theme === 'dark'
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])
  return (
    <TooltipProvider>
      <div
        className="min-h-24 w-full bg-background p-6 text-foreground"
        data-theme={dark ? 'dark' : 'light'}
      >
        <Story />
      </div>
    </TooltipProvider>
  )
}

const preview: Preview = {
  tags: ['autodocs'],
  globalTypes: {
    theme: {
      description: 'Fikra color theme',
      toolbar: {
        icon: 'circlehollow',
        dynamicTitle: true,
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
      },
    },
  },
  initialGlobals: { theme: 'light' },
  decorators: [withTheme],
  parameters: {
    layout: 'padded',
    backgrounds: { disable: true },
    controls: {
      expanded: true,
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    options: {
      storySort: {
        order: [
          'Foundations',
          'Inputs',
          'Data Display',
          'Feedback',
          'Overlays',
          'Navigation',
          'Layout',
          'Messaging',
          'Patterns',
        ],
      },
    },
    a11y: { test: 'todo' },
  },
}
export default preview
