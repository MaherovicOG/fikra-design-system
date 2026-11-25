import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/spinner'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Feedback/Spinner',
  component: UI.Spinner,
  parameters: {
    docs: {
      description: {
        component:
          'Spinner using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Spinner>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <div className="flex items-center gap-3" role="status">
        <UI.Spinner />
        <span className="text-sm text-muted-foreground">
          A moment of preparation…
        </span>
      </div>
    )
  },
}

export const InButton: Story = {
  render: function Render() {
    return (
      <Button disabled>
        <UI.Spinner />
        Creating project
      </Button>
    )
  },
}
