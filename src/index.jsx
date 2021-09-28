import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';

// Light
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('light'),
);

// Shadow
const shadowRoot = document.getElementById('shadow').attachShadow({mode: 'open'})
const cssLink = document.createElement('link')
cssLink.setAttribute('rel', 'stylesheet')
cssLink.setAttribute('href', './index.css')
shadowRoot.append(cssLink)

const mountingPoint = document.createElement('span')
shadowRoot.append(mountingPoint)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
    mountingPoint,
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
