import type { Preview } from '@storybook/react'
import '../app/globals.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    docs: {
      toc: true
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#0a0a0a'
        },
        {
          name: 'light',
          value: '#ffffff'
        }
      ]
    }
  },
  tags: ['autodocs']
}

export default preview
