import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/hosting/Hosting'
import Gallery from './pages/security/Security'
import Plans from './pages/signup/SignUp'
import Trainers from './pages/solutions/Solutions'
import NotFound from './pages/notFound/NotFound'
import Navbar from './components/Navbar'

const App = () => {
    return (

        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<Home/>} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='gallery' element={<Gallery />} />
                <Route path='plans' element={<Plans />} />
                <Route path='trainers' element={<Trainers />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App