import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Form from '../todos/Form'
import List from '../todos/List'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router