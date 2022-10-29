import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-Dark-blackBlue from-Gradient-dark-blue to-Gradient-dark-gray-blue text-White rounded-tr-[52px] lg:p-[100px]">
      <div className="flex lg:flex-row justify-between">
        <img src={logo} className="h-10" alt="logo of the company" />
        <div>
          <h4>Product</h4>
          <div className='flex flex-col text-Gray-blue mt-3'>
            <Link to="/" >Overview</Link>
            <Link to="/" >Pricing</Link>
            <Link to="/" >Marketplace</Link>
            <Link to="/" >Features</Link>
            <Link to="/" >Integrations</Link>
          </div>
        </div>
        <div>
          <h4>Company</h4>
          <div className='flex flex-col text-Gray-blue mt-3'>
            <Link to="/" >About</Link>
            <Link to="/" >Team</Link>
            <Link to="/" >Blog</Link>
            <Link to="/" >Careers</Link>
          </div>
        </div>
        <div>
          <h4>Connect</h4>
          <div className='flex flex-col text-Gray-blue mt-3'>
            <Link to="/" >Contact</Link>
            <Link to="/" >Newsletter</Link>
            <Link to="/" >Link edIn</Link>
          </div>
        </div>
      </div>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://philipoyelegbin.github.io">Philip Oyelegbin</a>.
      </div>
    </footer>
  )
}

export default Footer