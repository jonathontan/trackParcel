
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router'
import './App.css'
import NavbarWrapper from './components/NavbarWrapper'
import JobPage from './pages/JobPage'
import MainPage from './pages/MainPage'

function App() {
  const routes = createBrowserRouter(
    [
      {
        path: "",
        //element: <ProtectedRoute/> if user login exists
        //errorElement: <ErrorPage />
        children: [
          {
            element: <NavbarWrapper />,
            children: [
              {
                path: "",
                element: <MainPage />
              },
              {
                path: ":search",
                element: <JobPage />,
              },
            ]
          }
        ]
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
    { basename: import.meta.env.APP_BASE_URL }
  )
  return (
    <RouterProvider router={routes} />
  )
}

export default App
