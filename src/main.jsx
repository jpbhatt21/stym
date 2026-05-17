import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
const INJECT_ID = 'custom-injected-interface-root';
let container = document.getElementById(INJECT_ID);
const rootStyles = {
  backgroundColor: '#00000000',
  width: '100%',
  height: '100%',
  position: 'fixed',
};

if (!container) {
  container = document.createElement('div');
  container.id = INJECT_ID;
  container.style = { ...container.style, ...rootStyles };
  document.body.appendChild(container);
}
createRoot(document.getElementById('custom-injected-interface-root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
