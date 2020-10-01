/**
 * SELECTORS
 *
 * getElementById() - single
 * getElementsByClassName() - multiple
 * getElementsByTagName() - multiple
 *
 * querySelector() - single
 * querySelectorAll() - multiple
 */

// getElementById()
// const headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// console.log(headerTitle.textContent);
// headerTitle.textContent = 'Student App';
// headerTitle.innerText = 'FWD A Student List';
// headerTitle.innerHTML = '<h5>FWD-A Students</h5>';
// headerTitle.style.color = 'red';
// headerTitle.style.backgroundColor = '#fff';
// headerTitle.style.fontWeight = 'bold';

// getElementsByClassName()
// const students = document.getElementsByClassName('list-group-item');
// console.log(students);
// console.log(students[1].textContent);
// students[0].textContent = '105021810090 / Ken Thompson';
// students[1].style.fontWeight = 'bold';
// students[2].style.textDecoration = 'line-through';
// students[3].style.backgroundColor = '#bbb';

// for (st of students) {
// 	st.style.backgroundColor = '#a1b1c1';
// }

// getElementsByTagName()
// const students = document.getElementsByTagName('li');
// console.log(students);
// console.log(students[0].textContent);

// for (st of students) {
// 	st.style.backgroundColor = '#a1b1c1';
// }

// solution on using forEach on NodeList
// https://dev.to/jess/how-do-i-use-foreach-on-dom-elements-3m9h
// Array.prototype.forEach.call(students, (st) =>
// 	console.log(`${st.textContent}`)
// );

// querySelector() - id, class, tag - return one element (first element)
// const headerTitle = document.querySelector('#header-title');
// console.log(headerTitle.textContent);
// headerTitle.textContent = 'Student Management MiniApp';

// const listOfStudents = document.querySelector(
// 	'.list-group-item:nth-of-type(2)'
// );
// console.log(listOfStudents);

// const listOfStudents = document.querySelector('li:last-child');
// console.log(listOfStudents);

// querySelectorAll() -
// const listOfStudents = document.querySelectorAll('li:nth-child(even)');
// console.log(listOfStudents);

// for (student of listOfStudents) {
// 	console.log(student.textContent);
// }

// const oddRows = document.querySelectorAll('li:nth-child(odd)');
// const evenRows = document.querySelectorAll('li:nth-child(even)');

// for (odd of oddRows) {
// 	odd.style.backgroundColor = 'lightgreen';
// }

// for (even of evenRows) {
// 	even.style.backgroundColor = 'lightskyblue';
// }

// EVENT HANDLING
// const main = document.querySelector('#main');

// main.addEventListener('contextmenu', (e) => {
// 	e.preventDefault();
// });
const card = document.querySelector('.card');
const output = document.querySelector('#output');
const box = document.querySelector('#box');
box.addEventListener('mousemove', eventHandler);

function eventHandler(e) {
	console.log(e);

	output.innerHTML = `<h5>offsetX : ${e.offsetX} <br> offsetY: ${e.offsetY}</h5>`;
	card.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 70)`;
}
