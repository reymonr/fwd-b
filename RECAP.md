# HTML - HyperText Markup Language

## Structure of an HTML Document

```html
<!DOCTYPE html>
<html>
	<head>
		<meta name="author" content="reyr" />
		<title>Nama Website</title>
	</head>

	<body>
		<h1>Content Halaman Website</h1>
	</body>
</html>
```

## Formatting Content

- Text (paragraf, title/heading, etc)
- Image
- List (ordered and unordered)
- Table
- Form
- Link

# CSS - Cascading Style Sheet

## Rules

```css
selector {
	property: value;
}
```

**_Example_**

```css
p {
	color: #f4f4f4;
	text-align: center;
}
```

### Selector Types

- Universal
- Type
- Class
- Id
- Attribute

## Properties

- text / font
- box (margin, padding, border)
- colors / backgrounds
- floating and positioning
- flexbox
- grid
- responsive web design (RWD)

## How to Use CSS in HTML

### 1. Inline styling

```html
<p style="color: red; font-weight: bold;">This is a paragraph.</p>
```

### 2. Embedded styling

```html
<!DOCTYPE html>
<html>
	<head>
		<meta name="author" content="reyr" />

		<style>
			h1 {
				font-size: 3rem;
				color: rgb(100, 50, 75);
			}
		</style>

		<title>Nama Website</title>
	</head>

	<body>
		<h1>Content Halaman Website</h1>
	</body>
</html>
```

### 3. External

Dokumen: `index.html`

```html
<!DOCTYPE html>
<html>
	<head>
		<meta name="author" content="reyr" />

		<link rel="stylesheet" href="style.css" />

		<title>Nama Website</title>
	</head>

	<body>
		<h1>Content Halaman Website</h1>
	</body>
</html>
```

Dokumen: `style.css`

```css
h1 {
	font-size: 3rem;
	color: rgb(100, 50, 75);
}
```

# JavaScript

## Data Types

- Numbers
- String
- Boolean
- null
- undefined
- Array
- Object

## Variable Declaration

`let score = 50;`

`const fullName = 'John Doe'`

## Conditionals

`if...else...`

```javascript
if (true) {
	console.log('execute this');
} else {
	console.log('execute that');
}
```

`switch...case...`

```javascript
switch (condition) {
	case 1:
		console.log('execute this');
		break;
	default:
		console.log('default execution');
		break;
}
```

## Looping

`while`

```javascript
let i = 0;
while (i < 10) {
	console.log(i);
	i++;
}
```

`do ... while`

```javascript
let i = 0;
do {
	console.log(i);
	i++;
} while (i < 10);
```

`for`

```javascript
for (let i = 0; i < 10; i++) {
	console.log(i);
}
```

`for ... of`

```javascript
for (let e of element) {
	console.log(e.index);
}
```

`for ... in`

```javascript
for (let e in element) {
	console.log(e.index);
}
```

## Array

`const grades = [20, 45, 80, 90];`

## Object

```javascript
const person = {
	fullName: 'John Doe',
	gender: 30,
	hobbies: ['Read Book', 'Swimming'],
	married: true,
};
```

## Functions

```javascript
function addNumber(x, y) {
	return x + y;
}

// call function
addNumber(5, 7);

// arrow function
const addNumber = (x, y) => {
	return x + y;
};

// call function
addNumber(5, 7);
```

## Class

### ES5 Prototype

```javascript
function Person(fullName, gender) {
	this.fullName = fullName;
	this.gender = gender;
}
```

### ES6 Class

```javascript
class Person {
	constructor(fullName, gender) {
		this.fullName = fullName;
		this.gender = gender;
	}
}
```
