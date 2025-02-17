import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Redux
import { Provider } from 'react-redux';
import store from './store/store';

// Components
import App from './App.jsx'
import UserListPage from './pages/UserListPage.jsx';
import Profile from './components/Profile';

// Router
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users",
    element: <UserListPage />,
  },
  {
    path: "/users/:id",
    element: <Profile />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
