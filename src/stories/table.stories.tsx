import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/table'
import { ProjectTable } from '@/components/showcase/project-table'

const meta = {
  title: 'Data Display/Table',
  component: UI.Table,
  parameters: {
    docs: {
      description: {
        component:
          'A working project table with search, sorting, row selection, pagination, and an empty state. All data stays local to the story.',
      },
    },
  },
} satisfies Meta<typeof UI.Table>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return <ProjectTable />
  },
}

export const Empty: Story = {
  render: function Render() {
    return <ProjectTable empty />
  },
}
