import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const HeroSlider = props => {
  
  const { data, timeOut = 3000 } = props


  const [activeSlide, setActiveSlide] = useState(0)

  // go to the next slide
  const nextSlide = useCallback(
    () => {
      const idx = activeSlide + 1 === data.length ? 0 : activeSlide + 1
      setActiveSlide(idx)
    },
    [activeSlide, data]
  )

  // go to the previous slide
  const prevSlide = () => {
    const idx = activeSlide - 1 < 0 ? data.length : activeSlide - 1
    setActiveSlide(idx)
  }

  // go to the next slide every 3 seconds
  useEffect(() => {
    if(props.auto) {
      const slideAuto = setInterval(() => {
          nextSlide()
      }, timeOut)
      return () => {
        clearInterval(slideAuto)
      }
    }
  }, [nextSlide, timeOut, props])

  return (
    <div className='hero-slider'>
      {
        data.map((item, idx) => (
          <HeroSliderItem key={idx} item={item} active={idx === activeSlide} />
        ))
      }
      {
        props.control ? (
          <div className="hero-slider__control">
            
            <div className="hero-slider__control__item" onClick={prevSlide}>
              <i className="bx bx-chevron-left"></i>
            </div>

            <div className="hero-slider__control__item">
              <div className="index">
                {activeSlide + 1}/{data.length}
              </div>
            </div>

            <div className="hero-slider__control__item" onClick={nextSlide}>
              <i className="bx bx-chevron-right"></i>
            </div>

          </div>
        ) : null
      }
    </div>
  )
}

HeroSlider.propTypes = {
  data: PropTypes.array.isRequired,
  control: PropTypes.bool,
  auto: PropTypes.bool,
  timeOut: PropTypes.number,
}

const HeroSliderItem = props => (
  <div className={`hero-slider__item ${props.active && 'active'}`}>
      
      <div className="hero-slider__item__info">
          <div className={`hero-slider__item__info__title color-${props.item.color}`}>
              <span>{props.item.title}</span>
          </div>
          
          <div className="hero-slider__item__info__description">
              <span>{props.item.description}</span>
          </div>
          
          <div className="hero-slider__item__info__btn">
              <Link to={props.item.path}>
                  <button
                      // backgroundColor={props.item.color}
                      icon="bx bx-cart"
                      // animate={true}
                  >
                    More Details
                  </button>
              </Link>
          </div>
      </div>

      <div className="hero-slider__item__image">
          <div className={`shape bg-${props.item.color}`}></div>
          <img src={props.item.img} alt="" />
      </div>

  </div>
)

export default HeroSlider
