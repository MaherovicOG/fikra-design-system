import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const colorTokens = [
  'background',
  'foreground',
  'card',
  'card-foreground',
  'popover',
  'popover-foreground',
  'primary',
  'primary-foreground',
  'secondary',
  'secondary-foreground',
  'muted',
  'muted-foreground',
  'accent',
  'accent-foreground',
  'destructive',
  'destructive-foreground',
  'border',
  'input',
  'ring',
  'sidebar',
  'sidebar-foreground',
  'sidebar-primary',
  'sidebar-primary-foreground',
  'sidebar-accent',
  'sidebar-accent-foreground',
  'sidebar-border',
  'sidebar-ring',
  'chart-1',
  'chart-2',
  'chart-3',
  'chart-4',
  'chart-5',
] as const
const radii = ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'] as const
const shadows = ['2xs', 'xs', 'sm', 'default', 'md', 'lg', 'xl', '2xl'] as const

export function DesignTokens({ compact = false }: { compact?: boolean }) {
  const [values, setValues] = useState<Record<string, string>>({})
  useEffect(() => {
    const read = () => {
      const style = getComputedStyle(document.documentElement)
      setValues(
        Object.fromEntries(
          colorTokens.map((t) => [t, style.getPropertyValue(`--${t}`).trim()]),
        ),
      )
    }
    read()
    const observer = new MutationObserver(read)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
    return () => observer.disconnect()
  }, [])
  return (
    <div className="w-full space-y-10">
      <section aria-label="Color tokens">
        <div
          className={cn(
            'grid gap-3',
            compact
              ? 'grid-cols-2 sm:grid-cols-4'
              : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
          )}
        >
          {(compact
            ? ([
                'primary',
                'secondary',
                'accent',
                'muted',
                'background',
                'foreground',
                'border',
                'destructive',
              ] as const)
            : colorTokens
          ).map((token) => (
            <div
              key={token}
              className="overflow-hidden rounded-xl border bg-card"
            >
              <div
                className="h-20 border-b"
                style={{ backgroundColor: `var(--${token})` }}
              />
              <div className="p-3">
                <p className="font-mono text-xs">{token}</p>
                <p
                  className="mt-1 truncate font-mono text-[10px] text-muted-foreground"
                  title={values[token]}
                >
                  {values[token] || `var(--${token})`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {!compact && (
        <>
          <section aria-label="Border radii">
            <h3 className="mb-4 text-lg font-semibold">
              A little softer around the edges.
            </h3>
            <p className="mb-5 text-sm text-muted-foreground">
              Base radius: 0.55rem. The first four steps preserve the supplied
              theme; larger steps support the current registry.
            </p>
            <div className="flex flex-wrap gap-5">
              {radii.map((r) => (
                <div
                  key={r}
                  className="grid h-24 w-28 place-items-center border bg-muted font-mono text-xs"
                  style={{ borderRadius: `var(--radius-${r})` }}
                >
                  rounded-{r}
                </div>
              ))}
            </div>
          </section>
          <section aria-label="Shadows">
            <h3 className="mb-6 text-lg font-semibold">Quiet depth.</h3>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {shadows.map((s) => (
                <div
                  key={s}
                  className="grid h-24 place-items-center rounded-xl border bg-card font-mono text-xs"
                  style={{
                    boxShadow: `var(--shadow${s === 'default' ? '' : `-${s}`})`,
                  }}
                >
                  shadow{s === 'default' ? '' : `-${s}`}
                </div>
              ))}
            </div>
          </section>
          <section aria-label="Typography">
            <h3 className="mb-6 text-lg font-semibold">
              Three voices. One system.
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-xs text-muted-foreground">GEIST / SANS</p>
                <p className="mt-2 text-4xl font-semibold tracking-tight">
                  Make room for a good idea.
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">
                  SOURCE SERIF 4 / SERIF
                </p>
                <p className="mt-2 font-serif text-4xl">
                  A thoughtful point of view.
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">
                  JETBRAINS MONO / MONO
                </p>
                <p className="mt-2 font-mono text-lg">
                  const idea = createSomething();
                </p>
              </div>
            </div>
            <div className="mt-8 space-y-3">
              {[
                'text-xs',
                'text-sm',
                'text-base',
                'text-lg',
                'text-xl',
                'text-2xl',
                'text-3xl',
                'text-4xl',
                'text-5xl',
              ].map((size) => (
                <div
                  key={size}
                  className="flex items-baseline gap-6 border-b py-3"
                >
                  <span className="w-20 shrink-0 font-mono text-xs text-muted-foreground">
                    {size}
                  </span>
                  <span className={cn(size, 'truncate')}>
                    Ideas take shape.
                  </span>
                </div>
              ))}
            </div>
          </section>
          <section aria-label="Spacing and tracking">
            <h3 className="mb-4 text-lg font-semibold">A measured rhythm.</h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Spacing unit: 0.26rem · Normal tracking: −0.025em
            </p>
            <div className="space-y-3">
              {[1, 2, 3, 4, 6, 8, 12, 16].map((n) => (
                <div key={n} className="flex items-center gap-4">
                  <span className="w-8 font-mono text-xs">{n}</span>
                  <div
                    className="h-4 rounded-sm bg-primary"
                    style={{ width: `calc(var(--spacing) * ${n})` }}
                  />
                  <span className="font-mono text-xs text-muted-foreground">
                    {(n * 0.26).toFixed(2)}rem
                  </span>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  )
}
