import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/collapsible'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Data Display/Collapsible',
  component: UI.Collapsible,
  parameters: {
    docs: {
      description: {
        component:
          'Collapsible using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Collapsible>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <UI.Collapsible className="w-full rounded-xl border p-4">
        <UI.CollapsibleTrigger render={<Button variant="ghost" />}>
          <ChevronDown />
          Project details
        </UI.CollapsibleTrigger>
        <UI.CollapsibleContent>
          <p className="pt-4 text-sm text-muted-foreground">
            A shared place for briefs, references, and the ideas in between.
          </p>
        </UI.CollapsibleContent>
      </UI.Collapsible>
    )
  },
}
