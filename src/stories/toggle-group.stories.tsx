import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/toggle-group'
import { AlignLeft, AlignCenter, AlignRight } from 'lucide-react'

const meta = {
  title: 'Inputs/Toggle Group',
  component: UI.ToggleGroup,
  parameters: {
    docs: {
      description: {
        component:
          'Toggle Group using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.ToggleGroup>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <UI.ToggleGroup
        defaultValue={['left']}
        variant="outline"
        aria-label="Text alignment"
      >
        <UI.ToggleGroupItem value="left" aria-label="Align left">
          <AlignLeft />
        </UI.ToggleGroupItem>
        <UI.ToggleGroupItem value="center" aria-label="Align center">
          <AlignCenter />
        </UI.ToggleGroupItem>
        <UI.ToggleGroupItem value="right" aria-label="Align right">
          <AlignRight />
        </UI.ToggleGroupItem>
      </UI.ToggleGroup>
    )
  },
}
