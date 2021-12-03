import React, { useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import logo from '../assets/images/Logo-2.png'

// navbar paths
const mainNav = [
	{
		display: 'Home',
		path: '/',
	},
	{
		display: 'Product',
		path: '/catalog',
	},
	{
		display: 'Accessory',
		path: '/accessories',
	},
	{
		display: 'Contact',
		path: '/contact',
	},
]

const Header = () => {

  const { pathname } = useLocation()
  const activeNav = mainNav.findIndex(e => e.path === pathname)

  const headerRef = useRef(null);
  const menuLeft = useRef(null)

  // this function shrinks the navbar by adding the shrink class
  useEffect(() => {
    window.addEventListener('scroll', () => {
      (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) 
        ? headerRef.current.classList.add('shrink')
        : headerRef.current.classList.remove('shrink')
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])

  // this function either add or remove the class 'active'
  const menuToggle = () => menuLeft.current.classList.toggle('active')


	return (
		<div className='header' ref={headerRef}>
			<div className='container'>
        
				<div className='header__logo'>
					<Link to='/'>
						<img src={logo} alt='' />
					</Link>
				</div>

				<div className='header__menu'>
          
          <div className='header__menu__mobile-toggle' onClick={() => menuToggle()}>
					  <i className='bx bx-menu-alt-left'></i>
					</div>

					<div className='header__menu__left' ref={menuLeft}>	
            
            <div className='header__menu__left__close' onClick={() => menuToggle()}>
              <i className='bx bx-chevron-left'></i>
            </div>

						{
              mainNav.map((item, idx) => (
							  <div key={idx} className={`
                  header__menu__item
                  header__menu__left__item 
                  ${idx === activeNav && 'active'}`  
                }
                onClick={menuToggle}
                >
                  <Link to={item.path}>
                    <span>{item.display}</span>
                  </Link>
                </div>
              ))
						}

					</div>
          <div className='header__menu__right'>
            
            <div className='header__menu__item header__menu__right__item'>
              <i className='bx bx-search'></i>
            </div>

            <div className='header__menu__item header__menu__right__item'>
              <Link to='/cart'> 
                <i className='bx bx-shopping-bag'></i>
              </Link>
            </div>

            <div className='header__menu__item header__menu__right__item'>
              <i className='bx bx-user'></i>
            </div>

          </div>
				</div>

			</div>
		</div>
	)
}

export default Header
