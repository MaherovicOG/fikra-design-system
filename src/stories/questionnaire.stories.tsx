import type { Meta, StoryObj } from '@storybook/react-vite'
import * as UI from '@/components/ui/questionnaire'
import { useState } from 'react'

const meta = {
  title: 'Inputs/Questionnaire',
  component: UI.Questionnaire,
  parameters: {
    docs: {
      description: {
        component:
          'Questionnaire using the Fikra semantic theme. Switch the toolbar between light and dark, and explore the component with keyboard navigation.',
      },
    },
  },
} satisfies Meta<typeof UI.Questionnaire>
export default meta
type Story = StoryObj

export const Default: Story = {
  render: function Render() {
    const [submitted, setSubmitted] = useState(false)
    return (
      <div className="space-y-4">
        <UI.Questionnaire
          onSubmit={(e) => {
            e.preventDefault()
            setSubmitted(true)
          }}
        >
          <UI.QuestionnaireProgress />
          <UI.QuestionnaireItem name="discipline" required>
            <UI.QuestionnaireTitle>What brings you here?</UI.QuestionnaireTitle>
            <UI.QuestionnaireDescription>
              Choose the work you love doing.
            </UI.QuestionnaireDescription>
            <UI.QuestionnaireChoices>
              <UI.QuestionnaireChoice value="design">
                Design
                <UI.QuestionnaireChoiceDescription>
                  Shape how things look and feel.
                </UI.QuestionnaireChoiceDescription>
              </UI.QuestionnaireChoice>
              <UI.QuestionnaireChoice value="build">
                Engineering
                <UI.QuestionnaireChoiceDescription>
                  Bring an idea to life.
                </UI.QuestionnaireChoiceDescription>
              </UI.QuestionnaireChoice>
            </UI.QuestionnaireChoices>
            <UI.QuestionnaireError>
              Please choose a discipline.
            </UI.QuestionnaireError>
          </UI.QuestionnaireItem>
          <UI.QuestionnaireItem name="name" required>
            <UI.QuestionnaireTitle>
              What should we call you?
            </UI.QuestionnaireTitle>
            <UI.QuestionnaireInput
              aria-label="Your name"
              placeholder="Your name"
              required
            />
            <UI.QuestionnaireError>Enter your name.</UI.QuestionnaireError>
          </UI.QuestionnaireItem>
          <UI.QuestionnaireActions>
            <UI.QuestionnairePrevious />
            <UI.QuestionnaireNext />
            <UI.QuestionnaireSubmit>Finish</UI.QuestionnaireSubmit>
          </UI.QuestionnaireActions>
        </UI.Questionnaire>
        <p role="status" className="text-sm text-muted-foreground">
          {submitted
            ? 'Thanks! Your workspace is ready.'
            : 'Your answers stay in this demo.'}
        </p>
      </div>
    )
  },
}
