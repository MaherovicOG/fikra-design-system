import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/marker'
import { Check } from 'lucide-react'

const meta = {
  title: 'Messaging/Marker',
  component: UI.Marker,
  parameters: {
    docs: {
      description: {
        component:
          'Marker using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Marker>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <div className="space-y-6">
        <UI.Marker variant="separator">
          <UI.MarkerContent>Today · November 25</UI.MarkerContent>
        </UI.Marker>
        <UI.Marker>
          <UI.MarkerIcon>
            <Check />
          </UI.MarkerIcon>
          <UI.MarkerContent>All caught up. Take a breath.</UI.MarkerContent>
        </UI.Marker>
      </div>
    )
  },
}
