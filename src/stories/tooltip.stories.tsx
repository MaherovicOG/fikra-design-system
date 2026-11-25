import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/tooltip'
import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Overlays/Tooltip',
  component: UI.Tooltip,
  parameters: {
    docs: {
      description: {
        component:
          'Tooltip using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Tooltip>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <UI.Tooltip>
        <UI.TooltipTrigger
          render={
            <Button
              variant="outline"
              size="icon"
              aria-label="Add to favorites"
            />
          }
        >
          <Star />
        </UI.TooltipTrigger>
        <UI.TooltipContent>Add to favorites</UI.TooltipContent>
      </UI.Tooltip>
    )
  },
}
