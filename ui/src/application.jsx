import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './style/theme'

const Application = props => {
    return <ThemeProvider theme={theme}>{ props.children }</ThemeProvider>
}

export default Application