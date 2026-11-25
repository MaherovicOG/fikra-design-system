import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/code-block'

const meta = {
  title: 'Data Display/Code Block',
  component: UI.CodeBlock,
  parameters: {
    docs: {
      description: {
        component:
          'Code Block using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.CodeBlock>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    const code =
      'import { Button } from "@/components/ui/button"\n\nexport function Hello() {\n  return <Button>Make something good</Button>\n}'
    return (
      <UI.CodeBlock>
        <UI.CodeBlockHeader>
          <UI.CodeBlockTitle>hello-fikra.tsx</UI.CodeBlockTitle>
          <UI.CodeBlockActions>
            <UI.CodeBlockCopyButton value={code} />
          </UI.CodeBlockActions>
        </UI.CodeBlockHeader>
        <UI.CodeBlockContent lineNumbers>{code}</UI.CodeBlockContent>
        <UI.CodeBlockFooter className="text-xs">
          TypeScript · UTF-8
        </UI.CodeBlockFooter>
      </UI.CodeBlock>
    )
  },
}
