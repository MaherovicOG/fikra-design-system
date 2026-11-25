import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'Inputs/Radio Group',
  component: UI.RadioGroup,
  parameters: {
    docs: {
      description: {
        component:
          'Radio Group using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.RadioGroup>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <UI.RadioGroup defaultValue="team" aria-label="Workspace plan">
        {['personal', 'team', 'studio'].map((plan) => (
          <div key={plan} className="flex items-center gap-3">
            <UI.RadioGroupItem id={plan} value={plan} />
            <Label htmlFor={plan} className="capitalize">
              {plan}
            </Label>
          </div>
        ))}
      </UI.RadioGroup>
    )
  },
}
