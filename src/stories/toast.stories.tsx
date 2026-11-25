import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/toast'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Feedback/Toast',
  component: UI.Toaster,
  parameters: {
    docs: {
      description: {
        component:
          'Toast using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Toaster>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <UI.Toaster>
        <div className="flex flex-wrap gap-3">
          <Button
            onClick={() =>
              UI.toast.add({
                title: 'Project saved',
                description: 'Your latest changes are ready.',
                type: 'success',
              })
            }
          >
            Success toast
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              UI.toast.add({
                title: 'Could not save',
                description: 'Check your connection and try again.',
                type: 'error',
              })
            }
          >
            Error toast
          </Button>
        </div>
      </UI.Toaster>
    )
  },
}
