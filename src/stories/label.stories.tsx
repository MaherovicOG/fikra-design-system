import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/label'
import { Input } from '@/components/ui/input'

const meta = {
  title: 'Inputs/Label',
  component: UI.Label,
  parameters: {
    docs: {
      description: {
        component:
          'Label using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Label>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <div className="space-y-2">
        <UI.Label htmlFor="full-name">Full name</UI.Label>
        <Input
          id="full-name"
          autoComplete="name"
          placeholder="Amina Mansouri"
        />
      </div>
    )
  },
}
