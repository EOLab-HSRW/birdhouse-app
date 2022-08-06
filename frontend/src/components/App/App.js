import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Devices from '../../pages/Devices/Devices';
import Gallery from '../../pages/Gallery/Gallery';
import Landing from '../../pages/Landing/Landing';
import Layout from '../../pages/Layout/Layout';
import NoPage from '../../pages/NoPage/NoPage';


class App extends Component{
  render() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Landing />} />
              <Route path="/devices" element={<Devices />} />
              <Route path="/:id/gallary" element={<Gallery />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
    )
  }
}

export default App;
