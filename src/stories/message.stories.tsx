import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/message'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Bubble, BubbleContent } from '@/components/ui/bubble'

const meta = {
  title: 'Messaging/Message',
  component: UI.MessageGroup,
  parameters: {
    docs: {
      description: {
        component:
          'Message using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.MessageGroup>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <UI.MessageGroup>
        <UI.Message>
          <UI.MessageAvatar>
            <Avatar>
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
          </UI.MessageAvatar>
          <UI.MessageContent>
            <UI.MessageHeader>Amina · 10:42</UI.MessageHeader>
            <Bubble variant="muted">
              <BubbleContent>
                I’ve added a few references to the board.
              </BubbleContent>
            </Bubble>
            <UI.MessageFooter>Delivered</UI.MessageFooter>
          </UI.MessageContent>
        </UI.Message>
        <UI.Message align="end">
          <UI.MessageContent>
            <Bubble align="end">
              <BubbleContent>
                These feel like a great starting point.
              </BubbleContent>
            </Bubble>
            <UI.MessageFooter>Read · 10:43</UI.MessageFooter>
          </UI.MessageContent>
        </UI.Message>
      </UI.MessageGroup>
    )
  },
}
