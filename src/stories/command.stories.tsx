import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/command'
import { useState } from 'react'
import { Folder, Plus, Settings } from 'lucide-react'

const meta = {
  title: 'Navigation/Command',
  component: UI.Command,
  parameters: {
    docs: {
      description: {
        component:
          'Command using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Command>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    const [action, setAction] = useState('Search or select a command')
    return (
      <div className="space-y-3">
        <UI.Command className="rounded-xl border">
          <UI.CommandInput placeholder="Find a command…" />
          <UI.CommandList>
            <UI.CommandEmpty>No matching commands.</UI.CommandEmpty>
            <UI.CommandGroup heading="Workspace">
              <UI.CommandItem onSelect={() => setAction('Projects opened')}>
                <Folder />
                Projects
              </UI.CommandItem>
              <UI.CommandItem onSelect={() => setAction('Settings opened')}>
                <Settings />
                Settings<UI.CommandShortcut>⌘ ,</UI.CommandShortcut>
              </UI.CommandItem>
            </UI.CommandGroup>
            <UI.CommandSeparator />
            <UI.CommandGroup heading="Create">
              <UI.CommandItem onSelect={() => setAction('New project created')}>
                <Plus />
                New project
              </UI.CommandItem>
            </UI.CommandGroup>
          </UI.CommandList>
        </UI.Command>
        <p className="text-sm text-muted-foreground" role="status">
          {action}
        </p>
      </div>
    )
  },
}
