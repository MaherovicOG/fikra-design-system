import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/hover-card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const meta = {
  title: 'Overlays/Hover Card',
  component: UI.HoverCard,
  parameters: {
    docs: {
      description: {
        component:
          'Hover Card using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.HoverCard>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <UI.HoverCard>
        <UI.HoverCardTrigger
          render={
            <a
              href="#profile"
              className="font-medium underline underline-offset-4"
            />
          }
        >
          @amina
        </UI.HoverCardTrigger>
        <UI.HoverCardContent>
          <div className="flex gap-3">
            <Avatar>
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">Amina Mansouri</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Designing thoughtful digital experiences. Based in Casablanca.
              </p>
            </div>
          </div>
        </UI.HoverCardContent>
      </UI.HoverCard>
    )
  },
}
