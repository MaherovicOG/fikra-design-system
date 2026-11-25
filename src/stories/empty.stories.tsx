import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/empty'
import { useState } from 'react'
import { Folder, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Feedback/Empty',
  component: UI.Empty,
  parameters: {
    docs: {
      description: {
        component:
          'Empty using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Empty>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    const [created, setCreated] = useState(false)
    return (
      <UI.Empty>
        <UI.EmptyHeader>
          <UI.EmptyMedia variant="icon">
            <Folder />
          </UI.EmptyMedia>
          <UI.EmptyTitle>A fresh start</UI.EmptyTitle>
          <UI.EmptyDescription>
            Your next big idea starts with a small step. Create your first
            project.
          </UI.EmptyDescription>
        </UI.EmptyHeader>
        <UI.EmptyContent>
          <Button onClick={() => setCreated(true)}>
            Create project
            <Plus />
          </Button>
          {created && <p role="status">Your new project is ready.</p>}
        </UI.EmptyContent>
      </UI.Empty>
    )
  },
}
