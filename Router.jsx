import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../Component/Header'
import Home from '../Ui/Pages/Home'
import SignupForm from '../Ui/Pages/SignupForm'
import Product from '../Ui/Pages/Product'


export default function Router() {
  return (
    <div>
        <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/products" element={<Product />} />

        </Routes>
        </BrowserRouter>
    </div>
  )
}
