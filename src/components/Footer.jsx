import React from 'react'

import { Link } from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/images/Logo-2.png'

const footerAboutLinks = [
	{
		display: 'Who We Are',
		path: '/about',
	},
	{
		display: 'What We Do',
		path: '/about',
	},
	{
		display: 'Our Policies',
		path: '/about',
	},
	{
		display: 'Our Goals',
		path: '/about',
	},
	{
		display: 'Where We Are Located',
		path: '/about',
	},
]

const footerCustomerLinks = [
	{
		display: 'Policy',
		path: '/about',
	},
	{
		display: 'Guarantee',
		path: '/about',
	},
	{
		display: 'Refund',
		path: '/about',
	},
]

const Footer = () => {
	return (
		<footer>
			<div className='container'>
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          
          <div>
            <div className="footer__title">
              Support
            </div>
            
            <div className="footer__content">

              <p>Washington <strong>+1 (206) 497-9846</strong></p>
              <p>California <strong>+1 (415) 697-7212</strong></p>
              <p>Alabama <strong>+1 (251) 897-6879</strong></p>

            </div>
          </div>
          
          <div>   
            <div className="footer__title">
              About Us
            </div>
            
            <div className="footer__content">
              
              {
                footerAboutLinks.map((item, idx) => (
                  
                  <p key={idx}>
                    <Link to={item.path}>
                      {item.display}
                    </Link>
                  </p>

                ))
              }

            </div>
          </div>

          <div>   
            <div className="footer__title">
              Customer Place
            </div>
            
            <div className="footer__content">
              
              {
                footerCustomerLinks.map((item, idx) => (
                  
                  <p key={idx}>
                    <Link to={item.path}>
                      {item.display}
                    </Link>
                  </p>

                ))
              }

            </div>
          </div>

          <div className="footer__about">
            <p>
              <Link to='/'>
                  <img src={logo} className='footer__logo' alt="logo brand" />
              </Link>
            </p>
            <p>
              Looking forward to bringing joy to our customers, we provide the best that can be found in the clothing market. Let's work towards a more active and positive life.
            </p>
          </div>          

        </Grid>
      </div>
		</footer>
	)
}

export default Footer
