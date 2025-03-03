import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material'
import { SnackbarProvider } from "notistack"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import store from './app/store.ts'
import './index.css'

let theme = createTheme({
  palette: {
    background: { default: "#ffffff" },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
        h1: {
      fontSize: "4rem",
    },
    h2: {
      fontSize: "2.5rem",
    },
    h3: {
      fontSize: "2rem",
    },
    h4: {
      fontSize: "1.5rem"
    },
    h5: {
      fontSize: "1.2rem"
    },
    body1: {
      fontSize: "1rem",
    },
  },
})

theme = responsiveFontSizes(theme)

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <Provider store={store}>
        <SnackbarProvider
          hideIconVariant
          variant="error"
          autoHideDuration={3000}
          preventDuplicate={true}
          anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
          transitionDuration={{ enter: 200, exit: 395 }}
          style={{
            borderRadius: '25px',
            flexGrow: 1,
            justifyContent: 'center'
          }}
        >
          <App />
        </SnackbarProvider>
      </Provider>
    </StrictMode>
  </ThemeProvider>
)
