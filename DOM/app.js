const formAddStudent = document.querySelector('#form-add-student');
const students = document.querySelector('#students');

formAddStudent.addEventListener('submit', addStudent);
students.addEventListener('click', deleteStudent);

// add student
function addStudent(e) {
	e.preventDefault();

	console.log(e.target);

	// get input value
	const nim = document.querySelector('#nim').value;
	const fullName = document.querySelector('#fullName').value;
	const studentData = `${nim} / ${fullName}`;

	// create new list element
	const li = document.createElement('li');
	li.className = 'list-group-item';
	li.appendChild(document.createTextNode(studentData));

	// create delete button element
	const btnDelete = document.createElement('button');
	btnDelete.className = 'btn btn-danger btn-sm float-right remove';
	btnDelete.appendChild(document.createTextNode('Delete'));

	li.appendChild(btnDelete);
	students.appendChild(li);

	document.querySelector('#nim').value = '';
	document.querySelector('#fullName').value = '';
}

// delete student
function deleteStudent(e) {
	if (e.target.classList.contains('remove')) {
		const li = e.target.parentElement;
		students.removeChild(li);
	}
}
