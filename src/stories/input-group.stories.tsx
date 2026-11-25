import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/input-group'
import { Search } from 'lucide-react'
import { Kbd } from '@/components/ui/kbd'

const meta = {
  title: 'Inputs/Input Group',
  component: UI.InputGroup,
  parameters: {
    docs: {
      description: {
        component:
          'Input Group using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.InputGroup>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <div className="space-y-4">
        <UI.InputGroup>
          <UI.InputGroupAddon>
            <Search />
          </UI.InputGroupAddon>
          <UI.InputGroupInput
            aria-label="Search workspace"
            placeholder="Find a little inspiration…"
          />
          <UI.InputGroupAddon align="inline-end">
            <Kbd>⌘ K</Kbd>
          </UI.InputGroupAddon>
        </UI.InputGroup>
        <UI.InputGroup>
          <UI.InputGroupAddon>
            <UI.InputGroupText>https://</UI.InputGroupText>
          </UI.InputGroupAddon>
          <UI.InputGroupInput
            aria-label="Website domain"
            placeholder="fikra.design"
          />
        </UI.InputGroup>
      </div>
    )
  },
}
