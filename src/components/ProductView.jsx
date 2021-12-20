import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'

import { addItem } from '../redux/shopping-card/cartItemsSlide'

import Button from './Button'
import numberWithCommas from '../utils/numberWithCommas'
import { withRouter } from 'react-router'

const ProductView = (props) => {
	const dispatch = useDispatch()

	let product = props.product

	if (product === undefined)
		product = {
			price: 0,
			title: '',
			colors: [],
			size: [],
		}

	const [previewImg, setPreviewImg] = useState(product.image01)
	const [descriptionExpand, setDescriptionExpand] = useState(false)
	const [color, setColor] = useState(undefined)
	const [size, setSize] = useState(undefined)
	const [quantity, setQuantity] = useState(1)

	// increase or decrease the input number set
	const updateQuantity = (type) => {
		type === 'plus' && setQuantity(quantity + 1)
		type === 'minus' && setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
	}

	// set the states back to their default values
	useEffect(() => {
		setPreviewImg(product.image01)
		setQuantity(1)
		setColor(undefined)
		setSize(undefined)
	}, [product])

	// check if the color and size has been set
	const check = () => {
		if (color === undefined) {
			alert('Please select a color.')
			return false
		}

		if (size === undefined) {
			alert('Please select a size')
			return false
		}

		return true
	}

	// ===
	const addToCart = () => {
		if (check()) {
			dispatch(
				addItem({
					slug: product.slug,
					color,
					size,
					quantity,
					price: product.price,
				})
			)
		}
	}

	// push the user to the cart page
	const goToCart = () => {
		if (check()) {
			dispatch(
				addItem({
					slug: product.slug,
					color,
					size,
					quantity,
					price: product.price,
				})
			)
			props.history.push('/cart')
		}
	}

	return (
		<div className='product'>
			<div className='product__images'>
				<div className='product__images__list'>
					<div
						className='product__images__list__item'
						onClick={() => setPreviewImg(product.image01)}
					>
						<img src={product.image01} alt='' />
					</div>

					<div
						className='product__images__list__item'
						onClick={() => setPreviewImg(product.image02)}
					>
						<img src={product.image02} alt='' />
					</div>
				</div>

				<div className='product__images__main'>
					<img src={previewImg} alt='' />
				</div>

				<div
					className={`product-description mobile ${
						descriptionExpand && 'expand'
					}`}
				>
					<div className='product-description__title'>Product Detail</div>
					<div
						className='product-description__content'
						dangerouslySetInnerHTML={{ __html: product.description }}
					></div>
					<div className='product-description__toggle'>
						<Button
							size='sm'
							onClick={() => setDescriptionExpand(!descriptionExpand)}
						>
							{descriptionExpand ? 'Show less' : 'Show more'}
						</Button>
					</div>
				</div>
			</div>

			<div className='product__info'>
				{/* tag */}
				<h1 className='product__info__title'>{product.title}</h1>
				{/* price */}
				<div className='product__info__item'>
					<span className='product__info__item__price'>
						{numberWithCommas(product.price)}
					</span>
				</div>
				{/* color */}
				<div className='product__info__item'>
					<div className='product__info__item__title'>Color</div>
					<div className='product__info__item__list'>
						{product.colors.map((item, idx) => (
							<div
								key={idx}
								className={`product__info__item__list__item ${
									color === item && 'active'
								}`}
								onClick={() => setColor(item)}
							>
								<div className={`circle bg-${item}`}></div>
							</div>
						))}
					</div>
				</div>
				{/* size */}
				<div className='product__info__item'>
					<div className='product__info__item__title'>Size</div>
					<div className='product__info__item__list'>
						{product.size.map((item, idx) => (
							<div
								key={idx}
								className={`product__info__item__list__item ${
									size === item && 'active'
								}`}
								onClick={() => setSize(item)}
							>
								<span className='product__info__item__list__item__size'>
									{item}
								</span>
							</div>
						))}
					</div>
				</div>
				{/* quantity */}
				<div className='product__info__item'>
					<div className='product__info__item__title'>Quantity</div>
					<div className='product__info__item__quantity'>
						<div
							className='product__info__item__quantity__btn'
							onClick={() => updateQuantity('minus')}
						>
							<i className='bx bx-minus'></i>
						</div>
						<div className='product__info__item__quantity__input'>
							{quantity}
						</div>
						<div
							className='product__info__item__quantity__btn'
							onClick={() => updateQuantity('plus')}
						>
							<i className='bx bx-plus'></i>
						</div>
					</div>
				</div>
				{/* utils buttons */}
				<div className='product__info__item'>
					<Button onClick={() => addToCart()}>Add to cart</Button>
					<Button onClick={() => goToCart()}>Buy</Button>
				</div>
			</div>
		</div>
	)
}

ProductView.propTypes = {
	product: PropTypes.object.isRequired,
}

export default withRouter(ProductView)
