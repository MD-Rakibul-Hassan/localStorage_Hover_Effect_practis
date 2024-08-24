import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../Components/About';
import Private from './Private';

export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: (
          <Private>
            <About />
          </Private>
        ),
      },
    ],
  },
]);