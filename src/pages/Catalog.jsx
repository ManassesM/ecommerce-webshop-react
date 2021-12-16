import React, { useCallback, useEffect, useRef, useState } from 'react'

import productData from '../assets/fake-data/products'
import category from '../assets/fake-data/category'
import colors from '../assets/fake-data/product-color'
import size from '../assets/fake-data/product-size'

import Helmet from '../components/Helmet'
import CheckBox from '../components/CheckBox'
import Button from '../components/Button'
import InfinityList from '../components/InfinityList'

const Catalog = () => {
	const initFilter = {
		category: [],
		color: [],
		size: [],
	}

	const productList = productData.getAllProducts()
	const filterRef = useRef(null)

	const [products, setProducts] = useState(productList)
	const [filter, setFilter] = useState(initFilter)

	// as you select the items at the sidebar, they will be added to an array separated by their category
	const filterSelect = (type, checked, item) => {
		if (checked) {
			switch (type) {
				case 'CATEGORY':
					setFilter({
						...filter,
						category: [...filter.category, item.categorySlug],
					})
					break
				case 'COLOR':
					setFilter({ ...filter, color: [...filter.color, item.color] })
					break
				case 'SIZE':
					setFilter({ ...filter, size: [...filter.size, item.size] })
					break
				default:
			}
		} else {
			switch (type) {
				case 'CATEGORY':
					const newCategory = filter.category.filter(
						(e) => e !== item.categorySlug
					)
					setFilter({ ...filter, category: newCategory })
					break
				case 'COLOR':
					const newColor = filter.color.filter((e) => e !== item.color)
					setFilter({ ...filter, color: newColor })
					break
				case 'SIZE':
					const newSize = filter.size.filter((e) => e !== item.size)
					setFilter({ ...filter, size: newSize })
					break
				default:
			}
		}
	}

	// remove all the filters previously added
	const clearFilter = () => setFilter(initFilter)

	// updates the product list based on the checked items in the filter
	const updateProducts = useCallback(() => {
		let temp = productList

		if (filter.category.length > 0)
			temp = temp.filter((e) => filter.category.includes(e.categorySlug))

		if (filter.color.length > 0) {
			temp = temp.filter((e) => {
				const check = e.colors.find((color) => filter.color.includes(color))
				return check !== undefined
			})

			if (filter.size.length > 0) {
				temp = temp.filter((e) => {
					const check = e.size.find((size) => filter.size.includes(size))
					return check !== undefined
				})
			}
			setProducts(temp)
		}
	}, [filter, productList])

	// monitors when the product list gets updated
	useEffect(() => {
		updateProducts()
	}, [updateProducts])

	const showHideFilter = () => filterRef.current.classList.toggle('active')

	return (
		<Helmet title='Catalog'>
			<div className='catalog'>
				{/* sidebar */}
				<div className='catalog__filter' ref={filterRef}>
					<div
						className='catalog__filter__close'
						onClick={() => showHideFilter()}
					>
						<div className='bx bx-left-arrow-alt'></div>
					</div>
					{/* catalog */}
					<div className='catalog__filter__widget'>
						<div className='catalog__filter__widget__title'>Catalog</div>

						<div className='catalog__filter__widget__content'>
							{category.map((item, idx) => (
								<div
									key={idx}
									className='catalog__filter__widget__content__item'
								>
									<CheckBox
										label={item.display}
										onChange={(input) =>
											filterSelect('CATEGORY', input.checked, item)
										}
										checked={filter.category.includes(item.categorySlug)}
									/>
								</div>
							))}
						</div>
					</div>

					{/* color */}
					<div className='catalog__filter__widget'>
						<div className='catalog__filter__widget__title'>Color</div>

						<div className='catalog__filter__widget__content'>
							{colors.map((item, idx) => (
								<div
									key={idx}
									className='catalog__filter__widget__content__item'
								>
									<CheckBox
										label={item.display}
										onChange={(input) =>
											filterSelect('COLOR', input.checked, item)
										}
										checked={filter.color.includes(item.color)}
									/>
								</div>
							))}
						</div>
					</div>

					{/* size */}
					<div className='catalog__filter__widget'>
						<div className='catalog__filter__widget__title'>Size</div>

						<div className='catalog__filter__widget__content'>
							{size.map((item, idx) => (
								<div
									key={idx}
									className='catalog__filter__widget__content__item'
								>
									<CheckBox
										label={item.display}
										onChange={(input) =>
											filterSelect('SIZE', input.checked, item)
										}
										checked={filter.size.includes(item.size)}
									/>
								</div>
							))}
						</div>
					</div>

					{/* remove filter button */}
					<div className='catalog__filter__widget'>
						<div className='catalog__filter_widget__content'>
							<Button size='sm' onClick={clearFilter}>
								Remove filter
							</Button>
						</div>
					</div>
				</div>

				{/* add filter button */}
				<div className='catalog__filter__toggle'>
					<Button size='sm' onClick={() => showHideFilter()}>
						Filter
					</Button>
				</div>

				{/* middle content */}
				<div className='catalog__content'>
					<InfinityList data={products} />
				</div>
			</div>
		</Helmet>
	)
}

export default Catalog
