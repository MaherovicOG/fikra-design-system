import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/separator'

const meta = {
  title: 'Layout/Separator',
  component: UI.Separator,
  parameters: {
    docs: {
      description: {
        component:
          'Separator using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Separator>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <div className="space-y-4">
        <div>
          <p className="font-medium">Fikra Design System</p>
          <p className="text-sm text-muted-foreground">
            A shared language for good ideas.
          </p>
        </div>
        <UI.Separator />
        <div className="flex h-5 items-center gap-4 text-sm">
          <span>Foundations</span>
          <UI.Separator orientation="vertical" />
          <span>Components</span>
          <UI.Separator orientation="vertical" />
          <span>Patterns</span>
        </div>
      </div>
    )
  },
}
