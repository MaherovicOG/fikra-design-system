import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/menubar'
import { useState } from 'react'

const meta = {
  title: 'Navigation/Menubar',
  component: UI.Menubar,
  parameters: {
    docs: {
      description: {
        component:
          'Menubar using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Menubar>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    const [action, setAction] = useState('Choose a command')
    return (
      <div className="space-y-4">
        <UI.Menubar>
          <UI.MenubarMenu>
            <UI.MenubarTrigger>File</UI.MenubarTrigger>
            <UI.MenubarContent>
              <UI.MenubarItem onClick={() => setAction('New project created')}>
                New project
              </UI.MenubarItem>
              <UI.MenubarItem onClick={() => setAction('Project exported')}>
                Export
              </UI.MenubarItem>
              <UI.MenubarSeparator />
              <UI.MenubarItem disabled>Print</UI.MenubarItem>
            </UI.MenubarContent>
          </UI.MenubarMenu>
          <UI.MenubarMenu>
            <UI.MenubarTrigger>Edit</UI.MenubarTrigger>
            <UI.MenubarContent>
              <UI.MenubarItem onClick={() => setAction('Undone')}>
                Undo
              </UI.MenubarItem>
              <UI.MenubarItem onClick={() => setAction('Redone')}>
                Redo
              </UI.MenubarItem>
            </UI.MenubarContent>
          </UI.MenubarMenu>
        </UI.Menubar>
        <p role="status" className="text-sm text-muted-foreground">
          {action}
        </p>
      </div>
    )
  },
}
