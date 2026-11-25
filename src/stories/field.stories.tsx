import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/field'
import { ProjectForm } from '@/components/showcase/project-form'

const meta = {
  title: 'Inputs/Field',
  component: UI.Field,
  parameters: {
    docs: {
      description: {
        component:
          'A complete locally validated form built from Field primitives: associated labels, descriptions, errors, saving state, and success feedback.',
      },
    },
  },
} satisfies Meta<typeof UI.Field>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return <ProjectForm />
  },
}
