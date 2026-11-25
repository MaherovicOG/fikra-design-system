import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/sidebar'
import { useState } from 'react'
import { Folder } from 'lucide-react'

const meta = {
  title: 'Navigation/Sidebar',
  component: UI.SidebarProvider,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A contained sidebar with active navigation. Real apps can use SidebarTrigger for collapsing.',
      },
    },
  },
} satisfies Meta<typeof UI.SidebarProvider>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    const [active, setActive] = useState('Overview')
    return (
      <UI.SidebarProvider className="min-h-[420px] overflow-hidden rounded-xl border">
        <UI.Sidebar collapsible="none">
          <UI.SidebarHeader>
            <p className="p-2 text-lg font-semibold">
              fikra<span className="text-primary">.</span>
            </p>
          </UI.SidebarHeader>
          <UI.SidebarContent>
            <UI.SidebarGroup>
              <UI.SidebarGroupLabel>Workspace</UI.SidebarGroupLabel>
              <UI.SidebarGroupContent>
                <UI.SidebarMenu>
                  {['Overview', 'Projects', 'Library', 'Settings'].map(
                    (name) => (
                      <UI.SidebarMenuItem key={name}>
                        <UI.SidebarMenuButton
                          isActive={active === name}
                          onClick={() => setActive(name)}
                        >
                          <Folder />
                          <span>{name}</span>
                        </UI.SidebarMenuButton>
                      </UI.SidebarMenuItem>
                    ),
                  )}
                </UI.SidebarMenu>
              </UI.SidebarGroupContent>
            </UI.SidebarGroup>
          </UI.SidebarContent>
          <UI.SidebarFooter>
            <p className="p-2 text-xs text-muted-foreground">
              Made for good ideas.
            </p>
          </UI.SidebarFooter>
        </UI.Sidebar>
        <UI.SidebarInset>
          <div className="p-6">
            <h3 className="text-xl font-semibold">{active}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A little space to do your best work.
            </p>
          </div>
        </UI.SidebarInset>
      </UI.SidebarProvider>
    )
  },
}
