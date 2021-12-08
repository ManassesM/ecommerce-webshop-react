import React from 'react'

import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import Section, { SectionTitle, SectionBody } from '../components/Section'

import heroSliderData from '../assets/fake-data/hero-slider'

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
          
        </SectionBody>
      </Section>
		</Helmet>
	)
}

export default Home
