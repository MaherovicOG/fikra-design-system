import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/resizable'

const meta = {
  title: 'Layout/Resizable',
  component: UI.ResizablePanelGroup,
  parameters: {
    docs: {
      description: {
        component:
          'Resizable using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.ResizablePanelGroup>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <UI.ResizablePanelGroup
        orientation="horizontal"
        className="h-56 rounded-xl border"
      >
        <UI.ResizablePanel defaultSize="35%" minSize="20%">
          <div className="grid h-56 place-items-center bg-muted text-sm">
            References
          </div>
        </UI.ResizablePanel>
        <UI.ResizableHandle withHandle />
        <UI.ResizablePanel defaultSize="65%" minSize="25%">
          <div className="grid h-56 place-items-center font-serif text-2xl">
            Your canvas.
          </div>
        </UI.ResizablePanel>
      </UI.ResizablePanelGroup>
    )
  },
}
