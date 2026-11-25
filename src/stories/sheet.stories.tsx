import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { ProjectForm } from '@/components/showcase/project-form'

const meta = {
  title: 'Overlays/Sheet',
  component: UI.Sheet,
  parameters: {
    docs: {
      description: {
        component:
          'Accessible focus-managed overlay with a labeled title, description, close control, and working project form. Escape dismisses and returns focus to its trigger.',
      },
    },
  },
} satisfies Meta<typeof UI.Sheet>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <UI.Sheet>
        <UI.SheetTrigger render={<Button variant="outline" />}>
          Open sheet
        </UI.SheetTrigger>
        <UI.SheetContent>
          <UI.SheetHeader>
            <UI.SheetTitle>Create something new</UI.SheetTitle>
            <UI.SheetDescription>
              Give your next idea a place to grow.
            </UI.SheetDescription>
          </UI.SheetHeader>
          <div className="p-4">
            <ProjectForm />
          </div>
        </UI.SheetContent>
      </UI.Sheet>
    )
  },
}
