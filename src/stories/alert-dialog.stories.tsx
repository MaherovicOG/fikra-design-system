import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/alert-dialog'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Overlays/Alert Dialog',
  component: UI.AlertDialog,
  parameters: {
    docs: {
      description: {
        component:
          'Alert Dialog using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.AlertDialog>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    const [deleted, setDeleted] = useState(false)
    return (
      <div className="space-y-4">
        <UI.AlertDialog>
          <UI.AlertDialogTrigger render={<Button variant="destructive" />}>
            Delete project
          </UI.AlertDialogTrigger>
          <UI.AlertDialogContent>
            <UI.AlertDialogHeader>
              <UI.AlertDialogTitle>Delete this project?</UI.AlertDialogTitle>
              <UI.AlertDialogDescription>
                This demo asks for confirmation before removing a project.
              </UI.AlertDialogDescription>
            </UI.AlertDialogHeader>
            <UI.AlertDialogFooter>
              <UI.AlertDialogCancel>Keep project</UI.AlertDialogCancel>
              <UI.AlertDialogAction onClick={() => setDeleted(true)}>
                Delete project
              </UI.AlertDialogAction>
            </UI.AlertDialogFooter>
          </UI.AlertDialogContent>
        </UI.AlertDialog>
        <p role="status" className="text-sm text-muted-foreground">
          {deleted ? 'Project deleted in this demo.' : 'Project is safe.'}
        </p>
      </div>
    )
  },
}

export const WithOutcome: Story = {
  render: function Render() {
    const [deleted, setDeleted] = useState(false)
    return (
      <div className="space-y-4">
        <UI.AlertDialog>
          <UI.AlertDialogTrigger render={<Button variant="destructive" />}>
            Delete project
          </UI.AlertDialogTrigger>
          <UI.AlertDialogContent>
            <UI.AlertDialogHeader>
              <UI.AlertDialogTitle>Delete this project?</UI.AlertDialogTitle>
              <UI.AlertDialogDescription>
                Only the demo state is changed.
              </UI.AlertDialogDescription>
            </UI.AlertDialogHeader>
            <UI.AlertDialogFooter>
              <UI.AlertDialogCancel>Cancel</UI.AlertDialogCancel>
              <UI.AlertDialogAction onClick={() => setDeleted(true)}>
                Confirm deletion
              </UI.AlertDialogAction>
            </UI.AlertDialogFooter>
          </UI.AlertDialogContent>
        </UI.AlertDialog>
        <p role="status">
          {deleted ? 'Project deleted in this demo.' : 'Project is safe.'}
        </p>
      </div>
    )
  },
}
