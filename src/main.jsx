import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Store } from './app/store.jsx'
import { Provider } from 'react-redux'
import {Tasks} from "./features/tasks.jsx"
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <Tasks/>
    </Provider>
  </StrictMode>,
)
