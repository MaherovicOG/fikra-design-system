import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/context-menu'
import { useState } from 'react'

const meta = {
  title: 'Overlays/Context Menu',
  component: UI.ContextMenu,
  parameters: {
    docs: {
      description: {
        component:
          'Context Menu using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.ContextMenu>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    const [action, setAction] = useState('Ready')
    return (
      <div className="space-y-3">
        <UI.ContextMenu>
          <UI.ContextMenuTrigger className="grid h-40 w-full place-items-center rounded-xl border border-dashed text-sm text-muted-foreground">
            Right-click here, or use Shift + F10
          </UI.ContextMenuTrigger>
          <UI.ContextMenuContent>
            <UI.ContextMenuItem onClick={() => setAction('Opened')}>
              Open project
            </UI.ContextMenuItem>
            <UI.ContextMenuItem onClick={() => setAction('Duplicated')}>
              Duplicate
            </UI.ContextMenuItem>
            <UI.ContextMenuSeparator />
            <UI.ContextMenuItem disabled>Move to archive</UI.ContextMenuItem>
          </UI.ContextMenuContent>
        </UI.ContextMenu>
        <p role="status">{action}</p>
      </div>
    )
  },
}
