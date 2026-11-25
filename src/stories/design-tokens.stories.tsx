import type { Meta, StoryObj } from '@storybook/react-vite'
import { DesignTokens } from '@/components/showcase/design-tokens'

const meta = {
  title: 'Foundations/Design Tokens',
  component: DesignTokens,
  parameters: {
    docs: {
      description: {
        component:
          'The complete supplied tweakcn theme: every semantic color, radii, eight shadow levels, local font families, type sizes, spacing, and tracking. Values update when the theme toolbar changes.',
      },
    },
  },
} satisfies Meta<typeof DesignTokens>
export default meta
type Story = StoryObj<typeof meta>
export const CompleteTheme: Story = {}
export const CorePalette: Story = { args: { compact: true } }
