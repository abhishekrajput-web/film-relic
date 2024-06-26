import React, {useState} from 'react';
import {FormSend} from "./";

const Footer = () => {

  return (

    <footer className="bg-base-200 mt-12 ">
      <div className="container mx-auto px-4">
        <div className='footer text-base-content py-10'>
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
     <FormSend/>
        </div>
      </div>

    </footer>
  )
}

export default Footer;