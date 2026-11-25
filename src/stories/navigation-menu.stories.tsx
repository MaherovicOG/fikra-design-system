import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/navigation-menu'

const meta = {
  title: 'Navigation/Navigation Menu',
  component: UI.NavigationMenu,
  parameters: {
    docs: {
      description: {
        component:
          'Navigation Menu using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.NavigationMenu>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <UI.NavigationMenu>
        <UI.NavigationMenuList>
          <UI.NavigationMenuItem>
            <UI.NavigationMenuTrigger>Explore</UI.NavigationMenuTrigger>
            <UI.NavigationMenuContent>
              <div className="grid w-64 gap-2 p-2">
                <UI.NavigationMenuLink href="#foundations">
                  Foundations
                </UI.NavigationMenuLink>
                <UI.NavigationMenuLink href="#components">
                  Components
                </UI.NavigationMenuLink>
              </div>
            </UI.NavigationMenuContent>
          </UI.NavigationMenuItem>
          <UI.NavigationMenuItem>
            <UI.NavigationMenuLink href="#documentation">
              Documentation
            </UI.NavigationMenuLink>
          </UI.NavigationMenuItem>
        </UI.NavigationMenuList>
      </UI.NavigationMenu>
    )
  },
}
