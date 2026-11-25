import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/attachment'
import { FileText } from 'lucide-react'

const meta = {
  title: 'Messaging/Attachment',
  component: UI.AttachmentGroup,
  parameters: {
    docs: {
      description: {
        component:
          'Attachment using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.AttachmentGroup>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <UI.AttachmentGroup>
        {(['done', 'uploading', 'error'] as const).map((state) => (
          <UI.Attachment key={state} state={state}>
            <UI.AttachmentMedia>
              <FileText />
            </UI.AttachmentMedia>
            <UI.AttachmentContent>
              <UI.AttachmentTitle>brand-guidelines.pdf</UI.AttachmentTitle>
              <UI.AttachmentDescription>
                {state === 'done'
                  ? '2.4 MB · PDF'
                  : state === 'uploading'
                    ? 'Uploading…'
                    : 'Upload failed'}
              </UI.AttachmentDescription>
            </UI.AttachmentContent>
          </UI.Attachment>
        ))}
      </UI.AttachmentGroup>
    )
  },
}
