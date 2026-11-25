import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/bubble'

const meta = {
  title: 'Messaging/Bubble',
  component: UI.BubbleGroup,
  parameters: {
    docs: {
      description: {
        component:
          'Bubble using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.BubbleGroup>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <UI.BubbleGroup>
        <UI.Bubble variant="muted">
          <UI.BubbleContent>
            Every good project starts with a conversation.
          </UI.BubbleContent>
        </UI.Bubble>
        <UI.Bubble align="end">
          <UI.BubbleContent>Let’s make something thoughtful.</UI.BubbleContent>
          <UI.BubbleReactions>✨ 2</UI.BubbleReactions>
        </UI.Bubble>
      </UI.BubbleGroup>
    )
  },
}

export const Variants: Story = {
  render: function Render() {
    return (
      <UI.BubbleGroup>
        {(
          [
            'default',
            'secondary',
            'muted',
            'tinted',
            'outline',
            'ghost',
            'destructive',
          ] as const
        ).map((variant) => (
          <UI.Bubble key={variant} variant={variant}>
            <UI.BubbleContent>{variant} message</UI.BubbleContent>
          </UI.Bubble>
        ))}
      </UI.BubbleGroup>
    )
  },
}
