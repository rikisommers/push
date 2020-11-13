import React, {ReactDOM, Component} from 'react';
import {mapValues,toNumber} from 'lodash';
import {window} from 'browser-monads'

const settings = {
	threshold: 40,
	ratio: 5,
	max: 100,
	scale: 1.2,
	ease: 0.14,
	label: 'Hover me.'
}

class MagneticButton extends Component {
	state = {
		window: { width: window.innerWidth, height: window.innerHeight },
		mouse: { x: 0, y: 0 },
		isMagnetic: true,
		ease: { x: 0, y: 0, scale: 1 },
		bounds: {}
	};

	componentDidMount () {
		this.addEvents()
		this.resize()
		this.run()
	}
	
	addEvents () {
		window.addEventListener('resize', this.resize)
		document.addEventListener('mousemove', this.mouseMove)
	}

	resize = () => {
		const btn = this.btn.getBoundingClientRect()
		const state = {
			window: {
				width: window.innerWidth,
				height: window.innerHeight,
			},
			bounds: {
				width: btn.width,
				height: btn.height,
				top: btn.top,
				left: btn.left
			}
		}
		this.setState({...state})
	};

	mouseMove = ({pageX: x, pageY: y}) => {
		this.setState({
			mouse: { x, y },
			isMagnetic: this.isMagnetic(x, y)
		})
	};

	isMagnetic (x, y) {
		const { bounds } = this.state

		const centerX = bounds.left + (bounds.width / 2)
		const centerY = bounds.top + (bounds.height / 2)

		const a = Math.abs(centerX - x)
		const b = Math.abs(centerY - y)
		const c = Math.sqrt(a * a + b * b)

		return c < (bounds.width / 2) + this.getThreshold()
	}

	getThreshold () {
		const { isMagnetic } = this.state
		const { threshold, ratio } = this.props

		return isMagnetic ? threshold * ratio : threshold
	}

	run = () => {		
		const ease = {...this.state.ease}
		const transform = this.getTransforms()
		
		Object.keys(transform).forEach(key => this.getEase(key, transform, ease))
		
		this.setState({ ease: this.fixValues(ease) })
		
		requestAnimationFrame(this.run)
	};

	getTransforms () {
		const { isMagnetic, mouse, window } = this.state
		const { max, scale } = this.props

		return ({
			x: isMagnetic ? (mouse.x - window.width / 2) / window.width * max : 0,
			y: isMagnetic ? (mouse.y - window.height / 2) / window.height * max : 0,
			scale: isMagnetic ? scale : 1
		})
	}

	getEase (key, target, value) {
		return value[key] += (target[key] - value[key]) * this.props.ease
	}
	
	fixValues (obj) {
		return mapValues(obj, x => toNumber(x.toFixed(2)))
	}

	render () {
		const { ratio } = this.props
		const isHoverClass = this.state.isMagnetic ? 'is-hover' : ''
		const { x, y, scale } = this.state.ease
		const style = {
			btn: { transform: `translate3d(${x}px, ${y}px, 0) scale(${(scale)})` },
			label: { transform: `translate3d(${-x / ratio}px, ${-y / ratio}px, 0) scale(${(1 / scale)})` }
		}

		return (
			<button style={style.btn} className={`c-magnetic-btn u-relative ${isHoverClass}`}  ref={btn => this.btn = btn}>
				<span className="t-btn-label u-flex u-center-xy" style={style.label}>{this.props.label}</span>
				<span className="o-circle u-fit u-absolute u-pos-tl"></span>
			</button>
		)
	}
}

export default MagneticButton