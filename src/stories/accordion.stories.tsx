import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/accordion'

const meta = {
  title: 'Data Display/Accordion',
  component: UI.Accordion,
  parameters: {
    docs: {
      description: {
        component:
          'Accordion using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Accordion>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <UI.Accordion defaultValue={['theme']} className="w-full">
        <UI.AccordionItem value="theme">
          <UI.AccordionTrigger>
            What makes Fikra feel like Fikra?
          </UI.AccordionTrigger>
          <UI.AccordionContent>
            Warm amber, thoughtful spacing, and components made to work
            together.
          </UI.AccordionContent>
        </UI.AccordionItem>
        <UI.AccordionItem value="dark">
          <UI.AccordionTrigger>Does it support dark mode?</UI.AccordionTrigger>
          <UI.AccordionContent>
            Every surface follows the semantic theme tokens.
          </UI.AccordionContent>
        </UI.AccordionItem>
        <UI.AccordionItem value="disabled" disabled>
          <UI.AccordionTrigger>Coming soon</UI.AccordionTrigger>
          <UI.AccordionContent>More patterns.</UI.AccordionContent>
        </UI.AccordionItem>
      </UI.Accordion>
    )
  },
}
