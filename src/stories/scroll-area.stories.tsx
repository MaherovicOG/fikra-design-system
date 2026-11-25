import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/scroll-area'

const meta = {
  title: 'Layout/Scroll Area',
  component: UI.ScrollArea,
  parameters: {
    docs: {
      description: {
        component:
          'Scroll Area using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.ScrollArea>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <UI.ScrollArea className="h-64 rounded-xl border">
        <div className="p-5">
          <h3 className="mb-4 font-medium">A collection of possibilities</h3>
          {Array.from({ length: 24 }, (_, i) => (
            <div
              key={i}
              className="border-b py-3 text-sm text-muted-foreground"
            >
              Reference {String(i + 1).padStart(2, '0')} — Something worth
              keeping.
            </div>
          ))}
        </div>
      </UI.ScrollArea>
    )
  },
}
