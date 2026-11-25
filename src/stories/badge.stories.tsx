import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/badge'

const meta = {
  title: 'Data Display/Badge',
  component: UI.Badge,
  parameters: {
    docs: {
      description: {
        component:
          'Badge using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Badge>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <div className="flex flex-wrap gap-3">
        {(['default', 'secondary', 'outline', 'destructive'] as const).map(
          (variant) => (
            <UI.Badge key={variant} variant={variant}>
              {variant}
            </UI.Badge>
          ),
        )}
      </div>
    )
  },
}
