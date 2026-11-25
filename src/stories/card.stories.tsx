import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Data Display/Card',
  component: UI.Card,
  parameters: {
    docs: {
      description: {
        component:
          'Card using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Card>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <UI.Card className="w-full">
        <UI.CardHeader>
          <UI.CardTitle>A home for your ideas</UI.CardTitle>
          <UI.CardDescription>
            Bring a little clarity to your creative work.
          </UI.CardDescription>
        </UI.CardHeader>
        <UI.CardContent>
          <p className="text-sm text-muted-foreground">
            Start with a project. Build something that matters.
          </p>
        </UI.CardContent>
        <UI.CardFooter>
          <Button>
            Get started
            <ArrowRight />
          </Button>
        </UI.CardFooter>
      </UI.Card>
    )
  },
}

export const Compact: Story = {
  render: function Render() {
    return (
      <UI.Card size="sm">
        <UI.CardHeader>
          <UI.CardTitle>12 active projects</UI.CardTitle>
          <UI.CardDescription>
            A good week of making progress.
          </UI.CardDescription>
        </UI.CardHeader>
      </UI.Card>
    )
  },
}
