import React from 'react'

import Helmet from '../components/Helmet'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import CheckBox from '../components/CheckBox'

import productData from '../assets/fake-data/products'
import category from '../assets/fake-data/category'
import colors from '../assets/fake-data/product-color'
import size from '../assets/fake-data/product-size'
import Button from '../components/Button'

const Catalog = () => {
  return (
    <Helmet title='Catalog'>
      <div className="catalog">
        
        <div className="catalog__filter">
   
          {/* catalog */}
          <div className="catalog__filter__widget"> 
            <div className="catalog__filter__widget__title">
              Catalog 
            </div>
            
            <div className="catalog__filter__widget__content">
              {
                category.map((item, idx) => (
                  <div key={idx} className='catalog__filter__widget__content__item'>
                    <CheckBox
                      label={item.display}
                    />
                  </div>
                ))
              }
            </div>
          </div>

          {/* colors */}
          <div className="catalog__filter__widget">  
            <div className="catalog__filter__widget__title">
              Color
            </div>
            
            <div className="catalog__filter__widget__content">
              {
                colors.map((item, idx) => (
                  <div key={idx} className='catalog__filter__widget__content__item'>
                    <CheckBox
                      label={item.display}
                    />
                  </div>
                ))
              }
            </div>
          </div>

          {/* sizes */}
          <div className="catalog__filter__widget">  
            <div className="catalog__filter__widget__title">
              Size
            </div>
            
            <div className="catalog__filter__widget__content">
              {
                size.map((item, idx) => (
                  <div key={idx} className='catalog__filter__widget__content__item'>
                    <CheckBox
                      label={item.display}
                    />
                  </div>
                ))
              }
            </div>
          </div>

          <div className="catalog__filter__widget">
            <div className="catalog__filter_widget__content">
              <Button size='sm' >Remove filter</Button>
            </div>
          </div>

        </div>
        
        <div className="catalog__content">
          <Grid
            col={3}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            {
              productData.getAllProducts().map((item, idx) => (
                <ProductCard 
                  key={idx}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={Number(item.price)}
                  slug={item.slug}
                >
                  
                </ProductCard>
              ))
            }
          </Grid>
        </div>

      </div>
    </Helmet>
  )
}

export default Catalog
