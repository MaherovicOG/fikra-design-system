import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/tabs'
import { ProjectForm } from '@/components/showcase/project-form'
import { ActivityChart } from '@/components/showcase/activity-chart'

const meta = {
  title: 'Navigation/Tabs',
  component: UI.Tabs,
  parameters: {
    docs: {
      description: {
        component:
          'Tabs using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Tabs>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <UI.Tabs defaultValue="overview" className="w-full">
        <UI.TabsList>
          <UI.TabsTrigger value="overview">Overview</UI.TabsTrigger>
          <UI.TabsTrigger value="activity">Activity</UI.TabsTrigger>
          <UI.TabsTrigger value="settings">Settings</UI.TabsTrigger>
        </UI.TabsList>
        <UI.TabsContent value="overview" className="rounded-xl border p-6">
          <h3 className="font-medium">Your workspace, at a glance.</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            12 projects. Plenty of possibilities.
          </p>
        </UI.TabsContent>
        <UI.TabsContent value="activity">
          <ActivityChart />
        </UI.TabsContent>
        <UI.TabsContent value="settings" className="pt-4">
          <ProjectForm />
        </UI.TabsContent>
      </UI.Tabs>
    )
  },
}
