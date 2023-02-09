import React from 'react'
import { Route, Routes } from "react-router-dom";
import BindBlock from './components/BindBlock';
import BindedPage from './pages/BindedPage';
import MainPage from './pages/MainPage';
import CreateTicketPage from './pages/CreateTicketPage';




function App() {
  return (
    <div>
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/binded" element={<BindedPage />} />
              <Route path="/create" element={<CreateTicketPage />} />
          </Routes>
    </div>
  )
}

export default App