import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from '../components/App.jsx'
import { Provider } from 'react-redux'
import store from '../redux/store.jsx'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
