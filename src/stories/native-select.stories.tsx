import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/native-select'

const meta = {
  title: 'Inputs/Native Select',
  component: UI.NativeSelect,
  parameters: {
    docs: {
      description: {
        component:
          'Native Select using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.NativeSelect>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <UI.NativeSelect aria-label="Choose a workspace" defaultValue="studio">
        <UI.NativeSelectOption value="personal">Personal</UI.NativeSelectOption>
        <UI.NativeSelectOption value="studio">
          Fikra Studio
        </UI.NativeSelectOption>
        <UI.NativeSelectOption value="team">
          Team workspace
        </UI.NativeSelectOption>
      </UI.NativeSelect>
    )
  },
}

export const Disabled: Story = {
  render: function Render() {
    return (
      <UI.NativeSelect aria-label="Disabled workspace" disabled>
        <UI.NativeSelectOption>No workspace available</UI.NativeSelectOption>
      </UI.NativeSelect>
    )
  },
}
