import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/hosting/Hosting'
import Gallery from './pages/security/Security'
import Plans from './pages/signup/SignUp'
import Trainers from './pages/domain/Domain'
import NotFound from './pages/notFound/NotFound'
import Navbar from './components/Navbar'
import Hosting from './pages/hosting/Hosting'

const App = () => {
    return (

        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<Home/>} />
                <Route path='about' element={<Hosting />} />
                <Route path='contact' element={<Domain />} />
                <Route path='*' element={<Security />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App