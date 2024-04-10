import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import AboutPage from './pages/About.jsx'
import PortfolioPage from './pages/Portfolio.jsx'
import ContactPage from './pages/Contact.jsx'
import ErrorPage from './pages/Error.jsx'
import ResumePage from './pages/Resume.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: '/About',
        element: <AboutPage />,
      },
      {
        path: '/Portfolio',
        element: <PortfolioPage />,
      },
      {
        path: '/Contact',
        element: <ContactPage />,
      },
      {
        path: '/Resume',
        element: <ResumePage />,
      }
    ]
    
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
