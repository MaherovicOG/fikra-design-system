import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/calendar'
import { useState } from 'react'
import type { DateRange } from 'react-day-picker'

const meta = {
  title: 'Inputs/Calendar',
  component: UI.Calendar,
  parameters: {
    docs: {
      description: {
        component:
          'Calendar using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Calendar>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    const [date, setDate] = useState<Date | undefined>(new Date(2026, 10, 25))
    return (
      <UI.Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        defaultMonth={new Date(2026, 10, 1)}
        className="rounded-xl border"
      />
    )
  },
}

export const Range: Story = {
  render: function Render() {
    const [range, setRange] = useState<DateRange | undefined>()
    return (
      <UI.Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        defaultMonth={new Date(2026, 10, 1)}
        numberOfMonths={2}
        className="rounded-xl border"
      />
    )
  },
}
