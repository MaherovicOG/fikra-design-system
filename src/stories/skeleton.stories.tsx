import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/skeleton'

const meta = {
  title: 'Feedback/Skeleton',
  component: UI.Skeleton,
  parameters: {
    docs: {
      description: {
        component:
          'Skeleton using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Skeleton>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <div
        className="flex items-center gap-4"
        role="status"
        aria-label="Loading profile"
      >
        <UI.Skeleton className="size-12 rounded-full" />
        <div className="space-y-2">
          <UI.Skeleton className="h-4 w-48" />
          <UI.Skeleton className="h-3 w-32" />
        </div>
      </div>
    )
  },
}

export const Card: Story = {
  render: function Render() {
    return (
      <div className="space-y-4" role="status" aria-label="Loading card">
        <UI.Skeleton className="h-40 w-full rounded-xl" />
        <UI.Skeleton className="h-5 w-3/4" />
        <UI.Skeleton className="h-4 w-1/2" />
      </div>
    )
  },
}
