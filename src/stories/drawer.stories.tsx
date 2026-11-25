import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { ProjectForm } from '@/components/showcase/project-form'

const meta = {
  title: 'Overlays/Drawer',
  component: UI.Drawer,
  parameters: {
    docs: {
      description: {
        component:
          'Accessible focus-managed overlay with a labeled title, description, close control, and working project form. Escape dismisses and returns focus to its trigger.',
      },
    },
  },
} satisfies Meta<typeof UI.Drawer>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <UI.Drawer>
        <UI.DrawerTrigger render={<Button variant="outline" />}>
          Open drawer
        </UI.DrawerTrigger>
        <UI.DrawerContent>
          <UI.DrawerHeader>
            <UI.DrawerTitle>Create something new</UI.DrawerTitle>
            <UI.DrawerDescription>
              Give your next idea a place to grow.
            </UI.DrawerDescription>
          </UI.DrawerHeader>
          <div className="p-4">
            <ProjectForm />
          </div>
        </UI.DrawerContent>
      </UI.Drawer>
    )
  },
}
