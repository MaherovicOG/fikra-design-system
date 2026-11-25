import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'Inputs/Checkbox',
  component: UI.Checkbox,
  parameters: {
    docs: {
      description: {
        component:
          'Checkbox using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Checkbox>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <div className="flex items-center gap-3">
        <UI.Checkbox id="accept" defaultChecked />
        <Label htmlFor="accept">Keep me in the loop</Label>
      </div>
    )
  },
}

export const Unchecked: Story = {
  render: function Render() {
    return <UI.Checkbox aria-label="Subscribe" />
  },
}

export const Disabled: Story = {
  render: function Render() {
    return <UI.Checkbox aria-label="Disabled subscription" disabled />
  },
}

export const Indeterminate: Story = {
  render: function Render() {
    return <UI.Checkbox aria-label="Some projects selected" indeterminate />
  },
}
