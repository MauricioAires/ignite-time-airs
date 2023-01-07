import { ThemeProvider } from 'styled-components'
import { useState } from 'react'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello</h1>

      <GlobalStyle />
    </ThemeProvider>
  )
}
