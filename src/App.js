import React from 'react'
import Nav from './components/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Courses from './components/Courses'
import Enquires from './components/Enquires'
import CreateEnquiry from './components/CreateEnquiry'
export default function App() {
  return (
    <main>
      <Router>
        <Nav />
        <section className='container'>
          <Routes>
            <Route path='/' element={<Courses />} />
            <Route path='/enquires' element={<Enquires />} />
            <Route path="/CreateEnquiry/:cid" element={<CreateEnquiry />} />           
          </Routes>
        </section>
      </Router>
    </main>
  )
}
