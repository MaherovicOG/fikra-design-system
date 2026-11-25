import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ProjectForm } from '@/components/showcase/project-form'

const meta = {
  title: 'Overlays/Dialog',
  component: UI.Dialog,
  parameters: {
    docs: {
      description: {
        component:
          'Accessible focus-managed overlay with a labeled title, description, close control, and working project form. Escape dismisses and returns focus to its trigger.',
      },
    },
  },
} satisfies Meta<typeof UI.Dialog>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <UI.Dialog>
        <UI.DialogTrigger render={<Button variant="outline" />}>
          Open dialog
        </UI.DialogTrigger>
        <UI.DialogContent>
          <UI.DialogHeader>
            <UI.DialogTitle>Create something new</UI.DialogTitle>
            <UI.DialogDescription>
              Give your next idea a place to grow.
            </UI.DialogDescription>
          </UI.DialogHeader>
          <div className="p-4">
            <ProjectForm />
          </div>
        </UI.DialogContent>
      </UI.Dialog>
    )
  },
}
