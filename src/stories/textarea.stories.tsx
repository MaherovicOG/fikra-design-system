import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'Inputs/Textarea',
  component: UI.Textarea,
  parameters: {
    docs: {
      description: {
        component:
          'Textarea using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Textarea>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <div className="space-y-2">
        <Label htmlFor="notes">Project notes</Label>
        <UI.Textarea id="notes" placeholder="Start with a thought…" rows={4} />
      </div>
    )
  },
}

export const Disabled: Story = {
  render: function Render() {
    return (
      <UI.Textarea
        aria-label="Disabled notes"
        disabled
        placeholder="Notes are locked"
      />
    )
  },
}
