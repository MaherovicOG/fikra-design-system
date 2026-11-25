import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/direction'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Foundations/Direction',
  component: UI.DirectionProvider,
  parameters: {
    docs: {
      description: {
        component:
          'Direction using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.DirectionProvider>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <UI.DirectionProvider direction="rtl">
        <div dir="rtl" className="space-y-4 rounded-xl border p-6">
          <p className="text-xl font-medium" lang="ar">
            مساحة للأفكار الجميلة
          </p>
          <p className="text-sm text-muted-foreground">
            Right-to-left layout with logical spacing.
          </p>
          <Button>
            <ArrowLeft />
            ابدأ مشروعًا
          </Button>
        </div>
      </UI.DirectionProvider>
    )
  },
}

export const LeftToRight: Story = {
  render: function Render() {
    return (
      <UI.DirectionProvider direction="ltr">
        <div dir="ltr" className="rounded-xl border p-6">
          A shared language for good ideas.
        </div>
      </UI.DirectionProvider>
    )
  },
}
