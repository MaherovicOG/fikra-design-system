import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/progress'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Feedback/Progress',
  component: UI.Progress,
  parameters: {
    docs: {
      description: {
        component:
          'Progress using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Progress>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    const [value, setValue] = useState(40)
    return (
      <div className="w-full space-y-4">
        <UI.Progress value={value}>
          <UI.ProgressLabel>Uploading assets</UI.ProgressLabel>
          <UI.ProgressValue />
        </UI.Progress>
        <Button
          variant="outline"
          onClick={() =>
            setValue((v) => (v === 100 ? 0 : Math.min(100, v + 20)))
          }
        >
          Advance upload
        </Button>
      </div>
    )
  },
}

export const Complete: Story = {
  render: function Render() {
    return (
      <UI.Progress value={100}>
        <UI.ProgressLabel>Upload complete</UI.ProgressLabel>
      </UI.Progress>
    )
  },
}

export const Indeterminate: Story = {
  render: function Render() {
    return (
      <UI.Progress value={null}>
        <UI.ProgressLabel>Preparing your files</UI.ProgressLabel>
      </UI.Progress>
    )
  },
}
