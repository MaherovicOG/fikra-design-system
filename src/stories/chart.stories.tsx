import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/chart'
import { ActivityChart } from '@/components/showcase/activity-chart'

const meta = {
  title: 'Data Display/Chart',
  component: UI.ChartContainer,
  parameters: {
    docs: {
      description: {
        component:
          'Responsive Recharts area chart with semantic chart tokens, accessible data, a working tooltip, and legend.',
      },
    },
  },
} satisfies Meta<typeof UI.ChartContainer>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return <ActivityChart />
  },
}

export const Empty: Story = {
  render: function Render() {
    return <ActivityChart empty />
  },
}
