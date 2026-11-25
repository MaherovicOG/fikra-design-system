import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'

const meta = {
  title: 'Inputs/Button',
  component: UI.Button,
  parameters: {
    docs: {
      description: {
        component:
          'Primary actions, all intent variants, sizes, disabled, and busy states. Use one primary action per decision.',
      },
    },
  },
  args: {
    children: 'Make something good',
    variant: 'default',
    size: 'default',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'secondary',
        'outline',
        'ghost',
        'destructive',
        'link',
      ],
    },
    size: { control: 'select', options: ['xs', 'sm', 'default', 'lg', 'icon'] },
  },
} satisfies Meta<typeof UI.Button>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render(args: React.ComponentProps<typeof UI.Button>) {
    return <UI.Button {...args} />
  },
}

export const Secondary: Story = {
  render: function Render() {
    return <UI.Button variant="secondary">Secondary</UI.Button>
  },
}

export const Variants: Story = {
  render: function Render() {
    return (
      <div className="flex flex-wrap gap-3">
        {(
          [
            'default',
            'secondary',
            'outline',
            'ghost',
            'destructive',
            'link',
          ] as const
        ).map((variant) => (
          <UI.Button key={variant} variant={variant}>
            {variant}
          </UI.Button>
        ))}
      </div>
    )
  },
}

export const Sizes: Story = {
  render: function Render() {
    return (
      <div className="flex items-center gap-3">
        {(['xs', 'sm', 'default', 'lg'] as const).map((size) => (
          <UI.Button key={size} size={size}>
            {size}
          </UI.Button>
        ))}
      </div>
    )
  },
}

export const Disabled: Story = {
  render: function Render() {
    return <UI.Button disabled>Unavailable</UI.Button>
  },
}

export const Loading: Story = {
  render: function Render() {
    return (
      <UI.Button disabled>
        <Spinner />
        Saving…
      </UI.Button>
    )
  },
}
