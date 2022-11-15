import {Link} from 'react-router-dom'
import Image from '../images/main__header.jpeg'

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
      <div className="main__header-left">
        <h4>All-in-one Website Solution</h4>
        <h1>Go where the pros host.</h1>
        <h2>Web hosting that scales from easy to expert.</h2>
        <p>A ton of website hosting options, 99.9% uptime guarantee, free SSL certificate, easy WordPress installs, and a free domain for a year.
        </p>
        <Link to="/hosting" className='btn lg'>Get Started</Link>
      </div>
      <div className="main__header-right">
        <div className="main__header-circle"></div>
        <div className="main__header-image">
          <img src={Image} alt='Main Header Image' />
        </div>
      </div>
      </div>
    </header>
  
  )
}

export default MainHeader
