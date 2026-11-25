import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/breadcrumb'

const meta = {
  title: 'Navigation/Breadcrumb',
  component: UI.Breadcrumb,
  parameters: {
    docs: {
      description: {
        component:
          'Breadcrumb using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Breadcrumb>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <UI.Breadcrumb>
        <UI.BreadcrumbList>
          <UI.BreadcrumbItem>
            <UI.BreadcrumbLink href="#home">Workspace</UI.BreadcrumbLink>
          </UI.BreadcrumbItem>
          <UI.BreadcrumbSeparator />
          <UI.BreadcrumbItem>
            <UI.BreadcrumbLink href="#projects">Projects</UI.BreadcrumbLink>
          </UI.BreadcrumbItem>
          <UI.BreadcrumbSeparator />
          <UI.BreadcrumbItem>
            <UI.BreadcrumbPage>Brand exploration</UI.BreadcrumbPage>
          </UI.BreadcrumbItem>
        </UI.BreadcrumbList>
      </UI.Breadcrumb>
    )
  },
}
