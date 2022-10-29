import { useState } from "react";
import { Link } from "react-router-dom";
import { IconicButton, RedButton, WhiteButton } from "./Button";
import logo from '../assets/logo.svg';

const Header = () => {
    const [product, setProduct] = useState(true)
    const [company, setCompany] = useState(true)
    const [connect, setConnect] = useState(true)

    const handleProduct = () => {
        setProduct(prev => !prev)
    }
    const handleCompany = () => {
        setCompany(prev => !prev)
    }
    const handleConnect = () => {
        setConnect(prev => !prev)
    }
    
  return (
    <header className="bg-Red bg-[url('./assets/bg-pattern-intro-mobile.svg')] lg:bg-[url('./assets/bg-pattern-intro-desktop.svg')] bg-[length:180%] bg-center bg-no-repeat text-White rounded-bl-[52px] h-screen lg:h-[50vh] lg:px-[100px]">
        <section className="flex justify-between items-center py-10">
            <div className="flex items-center gap-9">
                <img src={logo} alt="logo of the company" />
                <nav className="flex lg:flex-row gap-4">
                    <div className="block text-Gray-blue">
                        <IconicButton label="Product" onhover={handleProduct}/>
                        <div className={`${product ? "hidden" : "flex flex-col gap-2 absolute"}`}>
                            <Link to="/">Overview</Link>
                            <Link to="/">Pricing</Link>
                            <Link to="/">Marketplace</Link>
                            <Link to="/">Features</Link>
                            <Link to="/">Integrations</Link>
                        </div>
                    </div>

                    <div className="block text-Gray-blue">
                        <IconicButton label="Company" onhover={handleCompany}/>
                        <div className={`${company ? "hidden" : "flex flex-col gap-2 absolute"}`}>
                            <Link to="/">About</Link>
                            <Link to="/">Team</Link>
                            <Link to="/">Blog</Link>
                            <Link to="/">Careers</Link>
                        </div>
                    </div>

                    <div className="block text-Gray-blue">
                        <IconicButton label="Connect" onhover={handleConnect}/>
                        <div className={`${connect ? "hidden" : "flex flex-col gap-2 absolute"}`}>
                            <Link to="/">Contact</Link>
                            <Link to="/">Newsletter</Link>
                            <Link to="/">LinkedIn</Link>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="flex items-center gap-6">
                Login
                <WhiteButton label="Sign Up" link="/"/>
            </div>
        </section>
        <section className="w-full mx-auto lg:w-3/5 text-center py-9">
            <h1>A modern publishing platform</h1>
            <p className="py-5">Grow your audience and build your online brand</p>
            <div className="flex justify-center gap-3">
                <WhiteButton link="" label="Start for Free"/>
                <RedButton link="" label="Learn More"/>
            </div>
        </section>
    </header>
  )
}

export default Header