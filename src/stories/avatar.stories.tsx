import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/avatar'

const meta = {
  title: 'Data Display/Avatar',
  component: UI.Avatar,
  parameters: {
    docs: {
      description: {
        component:
          'Avatar using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Avatar>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <div className="flex items-center gap-4">
        {(['sm', 'default', 'lg'] as const).map((size) => (
          <UI.Avatar key={size} size={size}>
            <UI.AvatarFallback>AM</UI.AvatarFallback>
          </UI.Avatar>
        ))}
      </div>
    )
  },
}

export const Group: Story = {
  render: function Render() {
    return (
      <UI.AvatarGroup>
        {['AM', 'SK', 'JL'].map((name) => (
          <UI.Avatar key={name}>
            <UI.AvatarFallback>{name}</UI.AvatarFallback>
          </UI.Avatar>
        ))}
        <UI.AvatarGroupCount>+3</UI.AvatarGroupCount>
      </UI.AvatarGroup>
    )
  },
}

export const ImageFallback: Story = {
  render: function Render() {
    return (
      <UI.Avatar>
        <UI.AvatarImage
          src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
          alt="Transparent avatar example"
        />
        <UI.AvatarFallback>AM</UI.AvatarFallback>
      </UI.Avatar>
    )
  },
}
