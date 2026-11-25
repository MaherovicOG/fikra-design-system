import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/slider'
import { useState } from 'react'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'Inputs/Slider',
  component: UI.Slider,
  parameters: {
    docs: {
      description: {
        component:
          'Slider using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Slider>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    const [value, setValue] = useState([60])
    return (
      <div className="space-y-5">
        <Label>Canvas zoom: {value[0]}%</Label>
        <UI.Slider
          value={value}
          onValueChange={(v) => setValue(Array.isArray(v) ? v : [v])}
          min={0}
          max={100}
          aria-label="Canvas zoom"
        />
      </div>
    )
  },
}

export const Range: Story = {
  render: function Render() {
    return <UI.Slider defaultValue={[25, 75]} aria-label="Budget range" />
  },
}

export const Disabled: Story = {
  render: function Render() {
    return <UI.Slider defaultValue={[50]} disabled aria-label="Disabled zoom" />
  },
}
