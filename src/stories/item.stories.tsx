import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/item'
import { useState } from 'react'
import { Folder } from 'lucide-react'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Data Display/Item',
  component: UI.Item,
  parameters: {
    docs: {
      description: {
        component:
          'Item using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Item>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    const [opened, setOpened] = useState(false)
    return (
      <div className="space-y-3">
        <UI.Item variant="outline">
          <UI.ItemMedia variant="icon">
            <Folder />
          </UI.ItemMedia>
          <UI.ItemContent>
            <UI.ItemTitle>Brand exploration</UI.ItemTitle>
            <UI.ItemDescription>
              12 references · Updated today
            </UI.ItemDescription>
          </UI.ItemContent>
          <UI.ItemActions>
            <Button variant="outline" size="sm" onClick={() => setOpened(true)}>
              Open
            </Button>
          </UI.ItemActions>
        </UI.Item>
        <p role="status" className="text-sm text-muted-foreground">
          {opened ? 'Project opened in this demo.' : 'Ready to explore.'}
        </p>
      </div>
    )
  },
}
