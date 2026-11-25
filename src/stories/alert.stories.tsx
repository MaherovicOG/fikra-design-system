import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/alert'
import { Check, AlertTriangle } from 'lucide-react'

const meta = {
  title: 'Feedback/Alert',
  component: UI.Alert,
  parameters: {
    docs: {
      description: {
        component:
          'Alert using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Alert>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <UI.Alert>
        <Check />
        <UI.AlertTitle>All changes saved</UI.AlertTitle>
        <UI.AlertDescription>
          Your work is ready for the next good idea.
        </UI.AlertDescription>
      </UI.Alert>
    )
  },
}

export const Destructive: Story = {
  render: function Render() {
    return (
      <UI.Alert variant="destructive">
        <AlertTriangle />
        <UI.AlertTitle>Something needs your attention</UI.AlertTitle>
        <UI.AlertDescription>
          Check your connection and try again.
        </UI.AlertDescription>
      </UI.Alert>
    )
  },
}
