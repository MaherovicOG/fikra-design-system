import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'Inputs/Switch',
  component: UI.Switch,
  parameters: {
    docs: {
      description: {
        component:
          'Switch using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Switch>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <div className="flex items-center gap-3">
        <UI.Switch id="notifications" defaultChecked />
        <Label htmlFor="notifications">Email notifications</Label>
      </div>
    )
  },
}

export const Off: Story = {
  render: function Render() {
    return <UI.Switch aria-label="Email notifications" />
  },
}

export const Disabled: Story = {
  render: function Render() {
    return <UI.Switch aria-label="Email notifications" disabled />
  },
}
