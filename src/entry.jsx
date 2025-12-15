import ReactDOM from 'react-dom/client'
import './app.css';
import { App } from './app';
import { StrictMode } from 'react';

const app = document.getElementById('app')
const root = ReactDOM.createRoot(app)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)