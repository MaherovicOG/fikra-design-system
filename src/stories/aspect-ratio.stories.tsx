import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/aspect-ratio'
import { Sparkles } from 'lucide-react'

const meta = {
  title: 'Layout/Aspect Ratio',
  component: UI.AspectRatio,
  parameters: {
    docs: {
      description: {
        component:
          'Aspect Ratio using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.AspectRatio>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <UI.AspectRatio
        ratio={16 / 9}
        className="overflow-hidden rounded-xl bg-accent"
      >
        <div className="flex size-full items-center justify-center font-serif text-3xl text-accent-foreground">
          Room for an idea.
        </div>
      </UI.AspectRatio>
    )
  },
}

export const Square: Story = {
  render: function Render() {
    return (
      <div className="w-64">
        <UI.AspectRatio
          ratio={1}
          className="grid place-items-center rounded-xl bg-primary text-primary-foreground"
        >
          <Sparkles className="size-12" />
        </UI.AspectRatio>
      </div>
    )
  },
}
