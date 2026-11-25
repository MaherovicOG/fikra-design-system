import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/pagination'
import { useState } from 'react'

const meta = {
  title: 'Navigation/Pagination',
  component: UI.Pagination,
  parameters: {
    docs: {
      description: {
        component:
          'Pagination using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Pagination>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    const [page, setPage] = useState(1)
    return (
      <div className="space-y-4">
        <UI.Pagination>
          <UI.PaginationContent>
            <UI.PaginationItem>
              <UI.PaginationPrevious
                href="#previous"
                aria-disabled={page === 1}
                onClick={(e) => {
                  e.preventDefault()
                  setPage((p) => Math.max(1, p - 1))
                }}
              />
            </UI.PaginationItem>
            {[1, 2, 3].map((p) => (
              <UI.PaginationItem key={p}>
                <UI.PaginationLink
                  href={`#page-${p}`}
                  isActive={page === p}
                  onClick={(e) => {
                    e.preventDefault()
                    setPage(p)
                  }}
                >
                  {p}
                </UI.PaginationLink>
              </UI.PaginationItem>
            ))}
            <UI.PaginationItem>
              <UI.PaginationNext
                href="#next"
                aria-disabled={page === 3}
                onClick={(e) => {
                  e.preventDefault()
                  setPage((p) => Math.min(3, p + 1))
                }}
              />
            </UI.PaginationItem>
          </UI.PaginationContent>
        </UI.Pagination>
        <p className="text-center text-sm text-muted-foreground" role="status">
          Showing page {page} of 3
        </p>
      </div>
    )
  },
}
