import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Devices from './pages/Devices';
import Gallery from './pages/Gallery';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import store from './store/store'
import { Provider } from 'react-redux'

class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Devices />} />
              <Route path="/:id/gallery" element={<Gallery />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
