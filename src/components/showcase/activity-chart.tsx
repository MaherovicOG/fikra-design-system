import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from '@/components/ui/chart'

const config = {
  created: { label: 'Created', color: 'var(--chart-1)' },
  published: { label: 'Published', color: 'var(--chart-3)' },
} satisfies ChartConfig
const data = [
  { day: 'Mon', created: 24, published: 12 },
  { day: 'Tue', created: 38, published: 20 },
  { day: 'Wed', created: 30, published: 18 },
  { day: 'Thu', created: 54, published: 34 },
  { day: 'Fri', created: 42, published: 28 },
  { day: 'Sat', created: 65, published: 42 },
  { day: 'Sun', created: 58, published: 38 },
]

export function ActivityChart({ empty = false }: { empty?: boolean }) {
  if (empty)
    return (
      <p className="grid h-64 place-items-center text-sm text-muted-foreground">
        Activity will appear after your first publication.
      </p>
    )
  return (
    <ChartContainer
      config={config}
      className="h-64 w-full"
      aria-label="Weekly created and published projects"
    >
      <AreaChart
        accessibilityLayer
        data={data}
        margin={{ top: 12, right: 12, left: -24, bottom: 0 }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          tick={{ fill: 'var(--muted-foreground)' }}
          dataKey="day"
          tickLine={false}
          axisLine={false}
          tickMargin={12}
        />
        <YAxis
          tick={{ fill: 'var(--muted-foreground)' }}
          tickLine={false}
          axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area
          isAnimationActive={false}
          type="monotone"
          dataKey="created"
          stroke="var(--color-created)"
          fill="var(--color-created)"
          fillOpacity={0.15}
          strokeWidth={2}
        />
        <Area
          isAnimationActive={false}
          type="monotone"
          dataKey="published"
          stroke="var(--color-published)"
          fill="var(--color-published)"
          fillOpacity={0.08}
          strokeWidth={2}
        />
        <ChartLegend content={<ChartLegendContent />} />
      </AreaChart>
    </ChartContainer>
  )
}
