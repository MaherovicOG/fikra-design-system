import { useId, useState } from 'react'
import { ArrowDown, ArrowUp, Search } from 'lucide-react'
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableCaption,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const projects = [
  {
    id: '01',
    name: 'Brand exploration',
    category: 'Identity',
    initials: 'AM',
    status: 'In progress',
    updated: 'Nov 25, 2026',
  },
  {
    id: '02',
    name: 'Website refresh',
    category: 'Product design',
    initials: 'SK',
    status: 'In review',
    updated: 'Nov 24, 2026',
  },
  {
    id: '03',
    name: 'Autumn campaign',
    category: 'Marketing',
    initials: 'JL',
    status: 'Published',
    updated: 'Nov 22, 2026',
  },
  {
    id: '04',
    name: 'Mobile experience',
    category: 'Product design',
    initials: 'AM',
    status: 'In progress',
    updated: 'Nov 20, 2026',
  },
  {
    id: '05',
    name: 'Editorial direction',
    category: 'Content',
    initials: 'SK',
    status: 'Published',
    updated: 'Nov 19, 2026',
  },
  {
    id: '06',
    name: 'Design foundations',
    category: 'Design system',
    initials: 'JL',
    status: 'In review',
    updated: 'Nov 18, 2026',
  },
]

export function ProjectTable({ empty = false }: { empty?: boolean }) {
  const id = useId()
  const [query, setQuery] = useState('')
  const [descending, setDescending] = useState(false)
  const [selected, setSelected] = useState<string[]>([])
  const [page, setPage] = useState(0)
  const rows = (empty ? [] : projects)
    .filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) =>
      descending ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name),
    )
  const visible = rows.slice(page * 4, page * 4 + 4)
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <InputGroup className="max-w-xs">
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupInput
            id={id}
            aria-label="Search projects"
            placeholder="Search projects…"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setPage(0)
            }}
          />
        </InputGroup>
        <span className="text-xs text-muted-foreground" aria-live="polite">
          {selected.length
            ? `${selected.length} selected`
            : `${rows.length} projects`}
        </span>
      </div>
      <div className="overflow-hidden rounded-xl border">
        <Table>
          <TableCaption className="sr-only">
            Projects, owners, statuses, and last update dates
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-10">
                <Checkbox
                  aria-label="Select all visible projects"
                  checked={
                    visible.length > 0 &&
                    visible.every((p) => selected.includes(p.id))
                  }
                  onCheckedChange={(checked) =>
                    setSelected(
                      checked
                        ? [
                            ...new Set([
                              ...selected,
                              ...visible.map((p) => p.id),
                            ]),
                          ]
                        : selected.filter(
                            (id) => !visible.some((p) => p.id === id),
                          ),
                    )
                  }
                />
              </TableHead>
              <TableHead aria-sort={descending ? 'descending' : 'ascending'}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setDescending(!descending)}
                >
                  Project {descending ? <ArrowDown /> : <ArrowUp />}
                </Button>
              </TableHead>
              <TableHead>Owner</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Updated</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {visible.map((p) => (
              <TableRow
                key={p.id}
                data-state={selected.includes(p.id) ? 'selected' : undefined}
              >
                <TableCell>
                  <Checkbox
                    aria-label={`Select ${p.name}`}
                    checked={selected.includes(p.id)}
                    onCheckedChange={(checked) =>
                      setSelected(
                        checked
                          ? [...selected, p.id]
                          : selected.filter((id) => id !== p.id),
                      )
                    }
                  />
                </TableCell>
                <TableCell>
                  <div className="font-medium">{p.name}</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {p.category}
                  </div>
                </TableCell>
                <TableCell>
                  <Avatar size="sm">
                    <AvatarFallback>{p.initials}</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      p.status === 'Published'
                        ? 'default'
                        : p.status === 'In review'
                          ? 'outline'
                          : 'secondary'
                    }
                  >
                    {p.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right text-xs text-muted-foreground">
                  {p.updated}
                </TableCell>
              </TableRow>
            ))}
            {!visible.length && (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="h-32 text-center text-muted-foreground"
                >
                  No projects found. Try a different search.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          Page {page + 1} of {Math.max(1, Math.ceil(rows.length / 4))}
        </span>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={(page + 1) * 4 >= rows.length}
            onClick={() => setPage(page + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
