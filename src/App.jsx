import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import logo from './assets/logo.png';

import { Home, CreatePost } from "./pages";
//or function App()
const App = () => {
  return (
    <BrowserRouter>
      {/* tailwind css */}
      <header className="w-full flex items-center bg-white sm:px-8  py-1 border-b border-b-[#e6ebf4]">
        <Link to="/"><img src={logo} width={50} height={50} alt="logo" /></Link>
        <div className="w-full flex justify-center">
        <h2 className="text-2xl font-bold">EpiGenerator</h2>
          
        </div>
      </header>

      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;
