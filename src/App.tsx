import { useState } from 'react'
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronRight,
  CircleHelp,
  Code2,
  Component,
  FileText,
  Folder,
  Layers,
  LayoutDashboard,
  Palette,
  Plus,
  Search,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarGroup } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { toast } from '@/components/ui/toast'
import { ThemeToggle } from '@/components/showcase/theme-toggle'
import { ActivityChart } from '@/components/showcase/activity-chart'
import { ProjectForm } from '@/components/showcase/project-form'
import { ProjectTable } from '@/components/showcase/project-table'
import { DesignTokens } from '@/components/showcase/design-tokens'
import { componentCatalog } from '@/lib/component-catalog'
import { cn } from '@/lib/utils'

const storybookUrl =
  import.meta.env.VITE_STORYBOOK_URL || 'http://localhost:6006'
const navigation = [
  { name: 'Overview', icon: LayoutDashboard },
  { name: 'Components', icon: Component },
  { name: 'Design tokens', icon: Palette },
  { name: 'Patterns', icon: Layers },
] as const
type View = (typeof navigation)[number]['name']

function NewProject() {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>
        <Plus />
        New project
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Start with a good idea.</DialogTitle>
          <DialogDescription>
            Create a project to bring your next idea to life.
          </DialogDescription>
        </DialogHeader>
        <ProjectForm
          onSaved={(name) =>
            toast.add({
              title: 'A new beginning',
              description: `${name} is ready.`,
              type: 'success',
            })
          }
        />
      </DialogContent>
    </Dialog>
  )
}

function ComponentPreview() {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>The building blocks</CardTitle>
          <Badge variant="outline">Live preview</Badge>
        </div>
        <CardDescription>
          Small details. A shared point of view.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-wrap gap-2">
          <Button>
            Primary action
            <ArrowRight />
          </Button>
          <Button variant="outline">Secondary</Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Favorite"
            onClick={() =>
              toast.add({
                title: 'A little inspiration',
                description: 'Added to your favorites.',
                type: 'success',
              })
            }
          >
            <Sparkles />
          </Button>
        </div>
        <div className="space-y-2">
          <Label htmlFor="preview-email">Your email</Label>
          <Input
            id="preview-email"
            type="email"
            placeholder="hello@fikra.design"
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="preview-switch" className="text-sm font-normal">
            A little less noise
          </Label>
          <Switch id="preview-switch" defaultChecked />
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Badge>
              <span className="size-1.5 rounded-full bg-current" />
              In progress
            </Badge>
            <Badge variant="secondary">Design</Badge>
          </div>
          <AvatarGroup>
            {['AM', 'SK', 'JL'].map((name) => (
              <Avatar key={name} size="sm">
                <AvatarFallback>{name}</AvatarFallback>
              </Avatar>
            ))}
          </AvatarGroup>
        </div>
      </CardContent>
    </Card>
  )
}

export default function App() {
  const [view, setView] = useState<View>('Overview')
  const [query, setQuery] = useState('')
  const [group, setGroup] = useState('All')
  const catalog = componentCatalog.filter(
    (item) =>
      (group === 'All' || item.group === group) &&
      `${item.name} ${item.group}`.toLowerCase().includes(query.toLowerCase()),
  )
  const goTo = (next: View) => {
    setView(next)
    setQuery('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="px-5 py-7">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              goTo('Overview')
            }}
            className="flex items-center gap-2.5"
          >
            <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Sparkles className="size-4" />
            </span>
            <span className="text-2xl font-semibold tracking-tight">
              fikra<span className="text-primary">.</span>
            </span>
            <Badge variant="outline" className="ml-auto text-[10px]">
              UI
            </Badge>
          </a>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="px-3">
            <SidebarGroupLabel className="mb-2 text-[10px] tracking-widest uppercase">
              The design system
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navigation.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton
                      isActive={view === item.name}
                      onClick={() => goTo(item.name)}
                      className="h-10 gap-3"
                    >
                      <item.icon />
                      <span>{item.name}</span>
                      {item.name === 'Components' && (
                        <span className="ml-auto font-mono text-[10px] text-muted-foreground">
                          {componentCatalog.length}
                        </span>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup className="mt-5 px-3">
            <SidebarGroupLabel className="mb-2 text-[10px] tracking-widest uppercase">
              Keep exploring
            </SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={
                    <a href={storybookUrl} target="_blank" rel="noreferrer" />
                  }
                >
                  <BookOpen />
                  <span>Storybook</span>
                  <ArrowUpRight className="ml-auto size-3" />
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={
                    <a
                      href="https://ui.shadcn.com/docs"
                      target="_blank"
                      rel="noreferrer"
                    />
                  }
                >
                  <Code2 />
                  <span>Documentation</span>
                  <ArrowUpRight className="ml-auto size-3" />
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="p-4">
          <div className="mb-4 rounded-xl border bg-background p-4">
            <span className="text-primary">
              <Sparkles className="mb-2 size-4" />
            </span>
            <p className="text-sm font-medium">A system to build on.</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Thoughtfully made. Ready for your next good idea.
            </p>
            <Button
              variant="link"
              className="mt-2 h-auto p-0 text-xs"
              onClick={() => goTo('Design tokens')}
            >
              Explore the foundations
              <ArrowRight />
            </Button>
          </div>
          <Separator />
          <div className="flex items-center gap-3 px-1 pt-3">
            <Avatar size="sm">
              <AvatarFallback>FS</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-xs font-medium">Fikra Studio</p>
              <p className="text-[10px] text-muted-foreground">
                Design with intention
              </p>
            </div>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    size="icon-sm"
                    variant="ghost"
                    className="ml-auto"
                    aria-label="About this showcase"
                  />
                }
              >
                <CircleHelp />
              </TooltipTrigger>
              <TooltipContent>
                Local, interactive design system showcase.
              </TooltipContent>
            </Tooltip>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex min-h-17 flex-wrap items-center justify-between gap-3 border-b px-5 py-3 md:px-9">
          <div className="flex items-center gap-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="h-4" />
            <span className="text-xs text-muted-foreground">Design system</span>
            <ChevronRight className="size-3 text-muted-foreground" />
            <span className="text-xs font-medium">{view}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-1.5 text-[11px] text-muted-foreground sm:flex">
              <span className="size-1.5 rounded-full bg-primary" />
              v1.0 · Ready to create
            </span>
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              render={
                <a href={storybookUrl} target="_blank" rel="noreferrer" />
              }
            >
              Open Storybook
              <ArrowUpRight />
            </Button>
          </div>
        </header>
        <main className="mx-auto w-full max-w-7xl space-y-7 p-5 md:p-9 lg:p-11">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <div className="mb-3 flex items-center gap-2 text-[10px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
                <span className="h-px w-5 bg-primary" />
                Fikra design system
              </div>
              <h1 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">
                {view === 'Overview' ? (
                  <>
                    Good ideas deserve
                    <br />a great foundation
                    <span className="text-primary">.</span>
                  </>
                ) : view === 'Components' ? (
                  <>
                    Considered, down to
                    <br />
                    the component<span className="text-primary">.</span>
                  </>
                ) : view === 'Design tokens' ? (
                  <>
                    The details that
                    <br />
                    make it feel like us<span className="text-primary">.</span>
                  </>
                ) : (
                  <>
                    Familiar pieces.
                    <br />
                    Fresh possibilities<span className="text-primary">.</span>
                  </>
                )}
              </h1>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
                {view === 'Overview'
                  ? 'A warm, purposeful collection of components and patterns. Everything you need to turn a blank canvas into something meaningful.'
                  : view === 'Components'
                    ? 'Accessible primitives, ready to compose. Explore every component in both themes with Storybook.'
                    : view === 'Design tokens'
                      ? 'Our shared language of color, type, space, and depth. One source of truth, in light and dark.'
                      : 'Real interactions, composed from simple building blocks. A starting point for your next feature.'}
              </p>
            </div>
            {view === 'Overview' ? (
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    navigator.clipboard
                      .writeText('npm install && npm run dev')
                      .then(() =>
                        toast.add({
                          title: 'Copied',
                          description:
                            'Run the command in this project to get started.',
                          type: 'success',
                        }),
                      )
                      .catch(() =>
                        toast.add({
                          title: 'Getting started',
                          description:
                            'Run npm install followed by npm run dev.',
                          type: 'info',
                        }),
                      )
                  }}
                >
                  <ArrowDownToLine />
                  Get started
                </Button>
                <NewProject />
              </div>
            ) : (
              <Badge variant="outline" className="gap-1.5">
                <Check className="size-3" />
                Light & dark ready
              </Badge>
            )}
          </div>
          {view === 'Overview' && (
            <>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    label: 'COMPONENTS',
                    value: String(componentCatalog.length),
                    detail: 'Thoughtfully composed',
                    icon: Component,
                  },
                  {
                    label: 'SEMANTIC COLORS',
                    value: '32',
                    detail: 'One palette, two perspectives',
                    icon: Palette,
                  },
                  {
                    label: 'A SHARED LANGUAGE',
                    value: '100%',
                    detail: 'Theme-driven, down to the details',
                    icon: Layers,
                  },
                ].map((stat, i) => (
                  <Card
                    key={stat.label}
                    className={cn(
                      'shadow-none',
                      i === 0 && 'border-primary/30 bg-accent/40',
                    )}
                  >
                    <CardContent className="flex items-start justify-between pt-5">
                      <div>
                        <p className="text-[9px] font-medium tracking-widest text-muted-foreground">
                          {stat.label}
                        </p>
                        <p className="mt-2 text-3xl font-medium tracking-tight">
                          {stat.value}
                        </p>
                        <p className="mt-2 text-[11px] text-muted-foreground">
                          {stat.detail}
                        </p>
                      </div>
                      <span
                        className={cn(
                          'grid size-8 place-items-center rounded-lg bg-muted text-muted-foreground',
                          i === 0 && 'bg-primary/20 text-accent-foreground',
                        )}
                      >
                        <stat.icon className="size-4" />
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="grid gap-5 xl:grid-cols-[1.4fr_1fr]">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>A little progress, every day</CardTitle>
                        <CardDescription className="mt-1.5">
                          Your creative work, taking shape.
                        </CardDescription>
                      </div>
                      <Badge variant="secondary">This week</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 flex items-baseline gap-3">
                      <span className="text-3xl font-medium tracking-tight">
                        311
                      </span>
                      <span className="text-xs text-muted-foreground">
                        ideas created
                      </span>
                      <Badge variant="outline" className="ml-auto text-[10px]">
                        Sample activity
                      </Badge>
                    </div>
                    <ActivityChart />
                  </CardContent>
                </Card>
                <ComponentPreview />
              </div>
              <Card>
                <CardHeader>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <CardTitle>Work in motion</CardTitle>
                      <CardDescription className="mt-1.5">
                        A few things we’re bringing to life. Sample data.
                      </CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => goTo('Patterns')}
                    >
                      Explore patterns
                      <ArrowUpRight />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ProjectTable />
                </CardContent>
              </Card>
              <div className="flex flex-wrap items-center justify-between gap-3 border-t pt-5">
                <p className="text-xs text-muted-foreground">
                  Built with intention. React · Tailwind v4 · shadcn/ui
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => goTo('Components')}
                >
                  Meet the components
                  <ArrowRight />
                </Button>
              </div>
            </>
          )}
          {view === 'Components' && (
            <>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="relative w-full sm:w-72">
                  <Search className="pointer-events-none absolute top-2.5 left-3 size-4 text-muted-foreground" />
                  <Input
                    className="pl-9"
                    aria-label="Search components"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Find a building block…"
                  />
                </div>
                <div className="flex flex-wrap gap-1">
                  {[
                    'All',
                    'Inputs',
                    'Data Display',
                    'Feedback',
                    'Overlays',
                    'Navigation',
                    'Layout',
                    'Messaging',
                    'Foundations',
                  ].map((name) => (
                    <Button
                      key={name}
                      size="sm"
                      variant={group === name ? 'secondary' : 'ghost'}
                      onClick={() => setGroup(name)}
                    >
                      {name}
                    </Button>
                  ))}
                </div>
              </div>
              <p className="text-xs text-muted-foreground" role="status">
                {catalog.length} components
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {catalog.map((item) => (
                  <a
                    key={item.slug}
                    href={`${storybookUrl}/?path=/docs/${item.group.toLowerCase().replaceAll(' ', '-')}-${item.slug}--docs`}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-xl border bg-card p-5 transition-colors outline-none hover:border-primary/60 hover:bg-accent/30 focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <span className="grid size-9 place-items-center rounded-lg border bg-muted">
                        <Component className="size-4 text-muted-foreground" />
                      </span>
                      <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                    </div>
                    <h2 className="text-sm font-medium">{item.name}</h2>
                    <p className="mt-1.5 text-xs text-muted-foreground">
                      {item.group} · View stories & documentation
                    </p>
                  </a>
                ))}
              </div>
              {!catalog.length && (
                <div className="rounded-xl border border-dashed p-12 text-center">
                  <Search className="mx-auto mb-3 size-6 text-muted-foreground" />
                  <p>No components match your search.</p>
                  <Button
                    variant="link"
                    onClick={() => {
                      setQuery('')
                      setGroup('All')
                    }}
                  >
                    Clear filters
                  </Button>
                </div>
              )}
            </>
          )}
          {view === 'Design tokens' && (
            <Tabs defaultValue="core">
              <TabsList>
                <TabsTrigger value="core">Core palette</TabsTrigger>
                <TabsTrigger value="complete">Complete theme</TabsTrigger>
              </TabsList>
              <TabsContent value="core" className="pt-5">
                <DesignTokens compact />
                <Card className="mt-7">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <Palette className="mt-1 size-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Semantic by design.</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        Use bg-primary, text-foreground, and border-border. The
                        theme handles the rest. Try the theme switch in the
                        header to see each token adapt.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="complete" className="pt-5">
                <DesignTokens />
              </TabsContent>
            </Tabs>
          )}
          {view === 'Patterns' && (
            <div className="grid gap-5 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <Badge variant="outline" className="mb-2 w-fit">
                    <FileText className="size-3" />
                    Forms
                  </Badge>
                  <CardTitle>A thoughtful beginning</CardTitle>
                  <CardDescription>
                    Labels, validation, and a little encouragement.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ProjectForm />
                </CardContent>
              </Card>
              <ComponentPreview />
              <Card className="lg:col-span-2">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Folder className="size-4 text-primary" />
                    <CardTitle>Organize what matters</CardTitle>
                  </div>
                  <CardDescription>
                    Search, sort, select, and page through a real table.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ProjectTable />
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
