import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{
        padding: '3em',
        display: 'flex',
        justifyContent: 'center',
        border: '2px dashed #ccc'
      }}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary'],
    },
    size: {
      control: 'select',
      options: ['small', 'large']
    },
    label: {
      control: 'text',
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    label: 'Главная кнопка',
    variant: 'primary',
  }
}

export const Secondary: Story = {
  args: {
    label: 'Вторичная кнопка',
    variant: 'secondary',
  }
}

export const Large: Story = {
  args: {
    label: 'Большая кнопка',
    variant: 'primary',
    size: 'large',
  }
}
