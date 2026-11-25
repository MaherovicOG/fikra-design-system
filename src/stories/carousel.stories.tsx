import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/carousel'

const meta = {
  title: 'Layout/Carousel',
  component: UI.Carousel,
  parameters: {
    docs: {
      description: {
        component:
          'Carousel using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Carousel>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <div className="px-10">
        <UI.Carousel className="w-full">
          <UI.CarouselContent>
            {[
              'A spark of inspiration.',
              'A little exploration.',
              'An idea takes shape.',
            ].map((text, i) => (
              <UI.CarouselItem key={text}>
                <div className="flex aspect-video flex-col justify-between rounded-xl border bg-accent p-6 text-accent-foreground">
                  <span className="font-mono text-xs">
                    0{i + 1} / THE PROCESS
                  </span>
                  <p className="font-serif text-3xl">{text}</p>
                </div>
              </UI.CarouselItem>
            ))}
          </UI.CarouselContent>
          <UI.CarouselPrevious />
          <UI.CarouselNext />
        </UI.Carousel>
      </div>
    )
  },
}
