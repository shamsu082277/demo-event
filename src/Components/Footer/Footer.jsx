import React from 'react';
import logo from '../../../public/Image/logo.png'

const Footer = () => {
    return (
        <footer className="footer p-7 bg-base-200 text-base-content px-[5vw]">
            <aside className='place-items-center md:place-items-start mx-auto text-center md:text-left'>
                <img className='w-60' src={logo} alt="" />
                <p>EVENT ORG<br />Providing Best Event facility</p>
            </aside>
            <nav className='hidden md:grid'>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav className='hidden md:grid'>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav className='hidden md:grid'>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;