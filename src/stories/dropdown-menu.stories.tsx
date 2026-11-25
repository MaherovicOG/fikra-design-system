import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/dropdown-menu'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Overlays/Dropdown Menu',
  component: UI.DropdownMenu,
  parameters: {
    docs: {
      description: {
        component:
          'Action menu with grouped commands, separators, a controlled checkbox, and selection feedback.',
      },
    },
  },
} satisfies Meta<typeof UI.DropdownMenu>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    const [notify, setNotify] = useState(true)
    const [action, setAction] = useState('Choose an action')
    return (
      <div className="space-y-4">
        <UI.DropdownMenu>
          <UI.DropdownMenuTrigger render={<Button variant="outline" />}>
            Project actions
            <ChevronDown />
          </UI.DropdownMenuTrigger>
          <UI.DropdownMenuContent>
            <UI.DropdownMenuGroup>
              <UI.DropdownMenuLabel>Workspace</UI.DropdownMenuLabel>
              <UI.DropdownMenuItem
                onClick={() => setAction('Project duplicated')}
              >
                Duplicate
              </UI.DropdownMenuItem>
              <UI.DropdownMenuItem
                onClick={() => setAction('Link copied in this demo')}
              >
                Copy link
              </UI.DropdownMenuItem>
            </UI.DropdownMenuGroup>
            <UI.DropdownMenuSeparator />
            <UI.DropdownMenuCheckboxItem
              checked={notify}
              onCheckedChange={setNotify}
            >
              Notifications
            </UI.DropdownMenuCheckboxItem>
            <UI.DropdownMenuSeparator />
            <UI.DropdownMenuItem
              variant="destructive"
              onClick={() => setAction('Project archived')}
            >
              Archive
            </UI.DropdownMenuItem>
          </UI.DropdownMenuContent>
        </UI.DropdownMenu>
        <p role="status" className="text-sm text-muted-foreground">
          {action}
        </p>
      </div>
    )
  },
}
