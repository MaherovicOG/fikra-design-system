import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'Overlays/Popover',
  component: UI.Popover,
  parameters: {
    docs: {
      description: {
        component:
          'Popover using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Popover>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <UI.Popover>
        <UI.PopoverTrigger render={<Button variant="outline" />}>
          Display settings
        </UI.PopoverTrigger>
        <UI.PopoverContent>
          <UI.PopoverHeader>
            <UI.PopoverTitle>Make it yours</UI.PopoverTitle>
            <UI.PopoverDescription>
              Choose how your workspace feels.
            </UI.PopoverDescription>
          </UI.PopoverHeader>
          <Label htmlFor="density">Density</Label>
          <Input id="density" defaultValue="Comfortable" />
        </UI.PopoverContent>
      </UI.Popover>
    )
  },
}
