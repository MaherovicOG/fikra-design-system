import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/input-otp'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'Inputs/Input Otp',
  component: UI.InputOTP,
  parameters: {
    docs: {
      description: {
        component:
          'Input Otp using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.InputOTP>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    return (
      <div className="space-y-3">
        <Label htmlFor="otp">Verification code</Label>
        <UI.InputOTP id="otp" maxLength={6}>
          <UI.InputOTPGroup>
            {[0, 1, 2].map((i) => (
              <UI.InputOTPSlot key={i} index={i} />
            ))}
          </UI.InputOTPGroup>
          <UI.InputOTPSeparator />
          <UI.InputOTPGroup>
            {[3, 4, 5].map((i) => (
              <UI.InputOTPSlot key={i} index={i} />
            ))}
          </UI.InputOTPGroup>
        </UI.InputOTP>
        <p className="text-sm text-muted-foreground">
          Enter the six-digit code from your email.
        </p>
      </div>
    )
  },
}
