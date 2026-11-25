import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/button-group'
import { Copy, Share2, MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Inputs/Button Group',
  component: UI.ButtonGroup,
  parameters: {
    docs: {
      description: {
        component:
          'Button Group using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.ButtonGroup>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <UI.ButtonGroup aria-label="Document actions">
        <Button variant="outline">
          <Copy />
          Copy
        </Button>
        <Button variant="outline">
          <Share2 />
          Share
        </Button>
        <Button variant="outline" size="icon" aria-label="More actions">
          <MoreHorizontal />
        </Button>
      </UI.ButtonGroup>
    )
  },
}
