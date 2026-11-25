import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/select'

const meta = {
  title: 'Inputs/Select',
  component: UI.Select,
  parameters: {
    docs: {
      description: {
        component:
          'Select using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Select>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <UI.Select
        defaultValue="design"
        items={[
          { label: 'Design', value: 'design' },
          { label: 'Engineering', value: 'engineering' },
          { label: 'Strategy', value: 'strategy' },
        ]}
      >
        <UI.SelectTrigger aria-label="Choose discipline" className="w-64">
          <UI.SelectValue placeholder="Choose discipline" />
        </UI.SelectTrigger>
        <UI.SelectContent>
          <UI.SelectGroup>
            <UI.SelectLabel>Discipline</UI.SelectLabel>
            <UI.SelectItem value="design">Design</UI.SelectItem>
            <UI.SelectItem value="engineering">Engineering</UI.SelectItem>
            <UI.SelectItem value="strategy">Strategy</UI.SelectItem>
          </UI.SelectGroup>
        </UI.SelectContent>
      </UI.Select>
    )
  },
}
