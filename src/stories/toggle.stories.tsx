import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/toggle'
import { Bold } from 'lucide-react'

const meta = {
  title: 'Inputs/Toggle',
  component: UI.Toggle,
  parameters: {
    docs: {
      description: {
        component:
          'Toggle using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Toggle>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <UI.Toggle aria-label="Toggle bold" variant="outline">
        <Bold />
      </UI.Toggle>
    )
  },
}

export const Pressed: Story = {
  render: function Render() {
    return (
      <UI.Toggle aria-label="Toggle bold" defaultPressed>
        <Bold />
      </UI.Toggle>
    )
  },
}

export const Disabled: Story = {
  render: function Render() {
    return (
      <UI.Toggle aria-label="Toggle bold" disabled>
        <Bold />
      </UI.Toggle>
    )
  },
}
