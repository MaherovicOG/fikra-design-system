import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProjectForm } from '@/components/showcase/project-form'
import { ProjectTable } from '@/components/showcase/project-table'
import { ActivityChart } from '@/components/showcase/activity-chart'

const meta = {
  title: 'Patterns/Compositions',
  parameters: {
    docs: {
      description: {
        component:
          'Working compositions of the local primitives. Use these patterns as a starting point for product features. Data and saves are local demo state.',
      },
    },
  },
} satisfies Meta
export default meta
type Story = StoryObj
export const ValidatedForm: Story = {
  render: () => (
    <div className="max-w-md">
      <ProjectForm />
    </div>
  ),
}
export const SearchableTable: Story = { render: () => <ProjectTable /> }
export const ActivityOverview: Story = { render: () => <ActivityChart /> }
