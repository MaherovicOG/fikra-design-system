import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'Inputs/Input',
  component: UI.Input,
  parameters: {
    docs: {
      description: {
        component:
          'Input using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Input>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render(args: React.ComponentProps<typeof UI.Input>) {
    return (
      <div className="space-y-2">
        <Label htmlFor="email">Email address</Label>
        <UI.Input
          {...args}
          id="email"
          type="email"
          placeholder="you@example.com"
        />
      </div>
    )
  },
}

export const Disabled: Story = {
  render: function Render() {
    return (
      <UI.Input
        disabled
        aria-label="Disabled email"
        placeholder="Unavailable"
      />
    )
  },
}

export const Invalid: Story = {
  render: function Render() {
    return (
      <div className="space-y-2">
        <UI.Input
          type="email"
          aria-label="Email"
          aria-invalid="true"
          aria-describedby="input-error"
          defaultValue="not-an-email"
        />
        <p id="input-error" className="text-sm text-destructive">
          Enter a valid email address.
        </p>
      </div>
    )
  },
}
