import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Devices from '../../pages/Devices/Devices';
import Gallery from '../../pages/Gallery/Gallery';
import Layout from '../../pages/Layout/Layout';
import NoPage from '../../pages/NoPage/NoPage';


class App extends Component{
  render() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Devices />} />
              <Route path="/:id/gallery" element={<Gallery />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
    )
  }
}

export default App;
