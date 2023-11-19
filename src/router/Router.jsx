const { createBrowserRouter } = require("react-router-dom");
import App from '../components/App';
import Error404 from '../components/error/Error404';
import Header from '../components/header/Header';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <App />
      }
    ]
  }
])

export default Router