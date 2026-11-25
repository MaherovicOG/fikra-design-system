import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/trace'
import { Check, Sparkles, Clock } from 'lucide-react'

const meta = {
  title: 'Messaging/Trace',
  component: UI.Trace,
  parameters: {
    docs: {
      description: {
        component:
          'Trace using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Trace>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <UI.Trace>
        <UI.TraceLine>
          <UI.TraceIcon>
            <Check />
          </UI.TraceIcon>
          <UI.TraceTitle>Gathered references</UI.TraceTitle>
          <UI.TraceDescription>1.2s</UI.TraceDescription>
        </UI.TraceLine>
        <UI.TraceCollapsible>
          <UI.TraceCollapsibleTrigger>
            <UI.TraceLine>
              <UI.TraceIcon>
                <Sparkles />
              </UI.TraceIcon>
              <UI.TraceTitle>Exploring directions</UI.TraceTitle>
            </UI.TraceLine>
          </UI.TraceCollapsibleTrigger>
          <UI.TraceCollapsibleContent>
            <p className="text-sm">
              Comparing typography, color, and spacing against your design
              tokens.
            </p>
          </UI.TraceCollapsibleContent>
        </UI.TraceCollapsible>
        <UI.TraceLine status="pending">
          <UI.TraceIcon>
            <Clock />
          </UI.TraceIcon>
          <UI.TraceTitle>Preparing your canvas</UI.TraceTitle>
        </UI.TraceLine>
      </UI.Trace>
    )
  },
}
