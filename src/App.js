import React from 'react'
import { Route, Routes } from "react-router-dom";
import BindBlock from './components/BindBlock';
import BindedPage from './pages/BindedPage';
import MainPage from './pages/MainPage';
import CreateTicketPage from './pages/CreateTicketPage';
import VConsole from 'vconsole';

import Test from './pages/Test';




function App() {
  const vConsole = new VConsole();
  return (
    <div>
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/binded" element={<BindedPage />} />
              <Route path="/create" element={<CreateTicketPage />} />
              <Route path="/test" element={<Test />} />
          </Routes>
    </div>
  )
}

export default App