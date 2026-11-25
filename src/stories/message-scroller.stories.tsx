import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/message-scroller'
import { Bubble, BubbleContent } from '@/components/ui/bubble'

const meta = {
  title: 'Messaging/Message Scroller',
  component: UI.MessageScrollerProvider,
  parameters: {
    docs: {
      description: {
        component:
          'Message Scroller using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.MessageScrollerProvider>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <UI.MessageScrollerProvider>
        <UI.MessageScroller className="h-72 rounded-xl border">
          <UI.MessageScrollerViewport>
            <UI.MessageScrollerContent className="p-5">
              {Array.from({ length: 12 }, (_, i) => (
                <UI.MessageScrollerItem key={i}>
                  <Bubble
                    variant={i % 2 ? 'default' : 'muted'}
                    align={i % 2 ? 'end' : 'start'}
                  >
                    <BubbleContent>
                      Message {i + 1}:{' '}
                      {i % 2
                        ? 'Let’s explore that direction.'
                        : 'Here is a little inspiration for the project.'}
                    </BubbleContent>
                  </Bubble>
                </UI.MessageScrollerItem>
              ))}
            </UI.MessageScrollerContent>
          </UI.MessageScrollerViewport>
          <UI.MessageScrollerButton />
        </UI.MessageScroller>
      </UI.MessageScrollerProvider>
    )
  },
}
