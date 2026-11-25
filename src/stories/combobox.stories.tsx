import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/combobox'

const meta = {
  title: 'Inputs/Combobox',
  component: UI.Combobox,
  parameters: {
    docs: {
      description: {
        component:
          'Combobox using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Combobox>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <UI.Combobox
        items={['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Storybook']}
      >
        <UI.ComboboxInput
          aria-label="Search technology"
          placeholder="Choose technology…"
          showClear
        />
        <UI.ComboboxContent>
          <UI.ComboboxEmpty>No technology found.</UI.ComboboxEmpty>
          <UI.ComboboxList>
            {(item: string) => (
              <UI.ComboboxItem key={item} value={item}>
                {item}
              </UI.ComboboxItem>
            )}
          </UI.ComboboxList>
        </UI.ComboboxContent>
      </UI.Combobox>
    )
  },
}
