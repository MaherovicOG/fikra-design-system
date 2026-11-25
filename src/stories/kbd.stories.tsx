import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/kbd'

const meta = {
  title: 'Data Display/Kbd',
  component: UI.KbdGroup,
  parameters: {
    docs: {
      description: {
        component:
          'Kbd using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.KbdGroup>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        Open command palette
        <UI.KbdGroup>
          <UI.Kbd>⌘</UI.Kbd>
          <UI.Kbd>K</UI.Kbd>
        </UI.KbdGroup>
      </div>
    )
  },
}
