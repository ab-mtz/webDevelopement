//Classes are a template for creating objects. They encapsulate data with code to work on that data.
class Color {
	constructor(r, g, b, name) { //These are the properties of the object
		this.r = r;
		this.g = g;
		this.b = b;
		this.name = name;
	}
	//These are the methods of the object
	innerRGB() {
		const { r, g, b } = this;
		return `${r}, ${g}, ${b}`;
	}
	rgb() {
		return `rgb(${this.innerRGB()})`;
	}
	rgba(a = 1.0) {
		return `rgba(${this.innerRGB()}, ${a})`;
	}
	hex() {
		const { r, g, b } = this;
		return (
			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
	}
}
const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');
