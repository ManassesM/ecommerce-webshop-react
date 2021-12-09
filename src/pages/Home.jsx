import React from 'react'
import { Link } from 'react-router-dom'

import Section, { SectionTitle, SectionBody } from '../components/Section'
import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import ProductCard from '../components/ProductCard'
import PolicyCard from '../components/PolicyCard'
import Grid from '../components/Grid'

import heroSliderData from '../assets/fake-data/hero-slider'
import policy from '../assets/fake-data/policy'
import productData from '../assets/fake-data/products'
import banner from '../assets/images/banner.png'

const Home = () => {
	return (
		<Helmet title='Home'>
			{/* hero slider */}
			<HeroSlider
				data={heroSliderData}
				control={true}
				auto={true}
				timeOut={5000}
			/>
			{/* end hero slider */}
      
      {/* policy section */}
      <Section>
        <SectionBody>
          <Grid
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            {
              policy.map((item, idx) =>
                <Link to='/policy'> 
                  <PolicyCard 
                    key={idx}
                    name={item.name} 
                    description={item.description} 
                    icon={item.icon}
                  />
                </Link>
              )        
            }
          </Grid>
        </SectionBody>
      </Section>
      {/* end policy section */}

      {/* best selling section */}
      <Section>
        
        <SectionTitle>
          Top selling products of the week 
        </SectionTitle>
          
        <SectionBody>
        <Grid
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            
            {
              productData.getProducts(4).map((item, idx) => (
                <ProductCard
                  key={idx}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={Number(item.price)}
                  slug={item.slug}

                />
              ))
            }

          </Grid>
        </SectionBody>

      </Section>
      {/* end selling section */}


      {/* new arrival section */}
      <Section>
        
        <SectionTitle>
          New Products 
        </SectionTitle>
          
        <SectionBody>
        <Grid
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            
            {
              productData.getProducts(8).map((item, idx) => (
                <ProductCard
                  key={idx}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={Number(item.price)}
                  slug={item.slug}

                />
              ))
            }

          </Grid>
        </SectionBody>

      </Section>
      {/* end arrival section */}

      {/* banner */}
      <Section>
        <SectionBody>
          <Link to='/catalog'>
            <img src={banner} alt="banner" />
          </Link>
        </SectionBody>
      </Section>
      {/* end banner */}

      {/* popular products section */}
      <Section>
        
        <SectionTitle>
          Popular Products 
        </SectionTitle>
          
        <SectionBody>
        <Grid
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            
            {
              productData.getProducts(12).map((item, idx) => (
                <ProductCard
                  key={idx}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={Number(item.price)}
                  slug={item.slug}

                />
              ))
            }

          </Grid>
        </SectionBody>

      </Section>
      {/* end popular products section */}
		</Helmet>
	)
}

export default Home
