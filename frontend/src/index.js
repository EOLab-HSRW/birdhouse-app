import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';

import './i18n';

ReactDOM.createRoot(
  document.getElementById('root')
  ).render(
    <Provider store={store}>
      <Suspense fallback={(<div>Loading....</div>)}>
        <App/>
      </Suspense> 
    </Provider>
  )

