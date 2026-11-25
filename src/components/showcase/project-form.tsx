import { useId, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
} from '@/components/ui/field'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Spinner } from '@/components/ui/spinner'

export function ProjectForm({ onSaved }: { onSaved?: (name: string) => void }) {
  const id = useId()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved'>('idle')
  return (
    <form
      noValidate
      className="w-full space-y-5"
      onSubmit={async (event) => {
        event.preventDefault()
        if (name.trim().length < 3) {
          setError('Use at least 3 characters for your project name.')
          return
        }
        setError('')
        setStatus('saving')
        await new Promise((resolve) => setTimeout(resolve, 400))
        setStatus('saved')
        onSaved?.(name.trim())
      }}
    >
      <FieldGroup>
        <Field data-invalid={!!error}>
          <FieldLabel htmlFor={`${id}-name`}>
            Project name <span aria-hidden="true">*</span>
          </FieldLabel>
          <Input
            id={`${id}-name`}
            autoComplete="off"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value)
              setStatus('idle')
            }}
            placeholder="e.g. Brand exploration"
            aria-invalid={!!error}
            aria-describedby={`${id}-help${error ? ` ${id}-error` : ''}`}
          />
          <FieldDescription id={`${id}-help`}>
            Give your next idea a place to grow.
          </FieldDescription>
          {error && (
            <FieldError id={`${id}-error`} role="alert">
              {error}
            </FieldError>
          )}
        </Field>
        <Field>
          <FieldLabel htmlFor={`${id}-description`}>Description</FieldLabel>
          <Textarea
            id={`${id}-description`}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="What are you working on?"
            rows={3}
          />
        </Field>
      </FieldGroup>
      {status === 'saved' && (
        <Alert role="status">
          <AlertTitle>Project created</AlertTitle>
          <AlertDescription>
            {name} is ready for your first idea. This is a local demo.
          </AlertDescription>
        </Alert>
      )}
      <Button type="submit" disabled={status === 'saving'}>
        {status === 'saving' && <Spinner />}
        {status === 'saving' ? 'Creating…' : 'Create project'}
      </Button>
    </form>
  )
}
