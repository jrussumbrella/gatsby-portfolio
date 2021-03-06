import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../../styles/globalStyles'
import Header from './header'
import theme from '../../utils/theme'
import Footer from './footer'
import styled from 'styled-components'

const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container id="home">{children}</Container>
        <Footer />
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
