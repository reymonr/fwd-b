const students = [
	{
		id: 1,
		nim: 105011110001,
		fullName: 'John Doe',
		prodi: 'Sistem Informasi',
		entranceYear: 2011,
		gpa: 3.19,
		isActive: true,
	},
	{
		id: 2,
		nim: 105011510002,
		fullName: 'Mary Weather',
		prodi: 'Sistem Informasi',
		entranceYear: 2015,
		gpa: 2.25,
		isActive: false,
	},
	{
		id: 3,
		nim: 105011810003,
		fullName: 'Jack Ryan',
		prodi: 'Sistem Informasi',
		entranceYear: 2018,
		gpa: 3.99,
		isActive: true,
	},
	{
		id: 4,
		nim: 105021210010,
		fullName: 'James Milner',
		prodi: 'Informatika',
		entranceYear: 2012,
		gpa: 3.87,
		isActive: true,
	},
	{
		id: 5,
		nim: 105021710003,
		fullName: 'Amy Awards',
		prodi: 'Informatika',
		entranceYear: 2017,
		gpa: 3.01,
		isActive: true,
	},
	{
		id: 6,
		nim: 105021110003,
		fullName: 'Jack Ryan',
		prodi: 'Informatika',
		entranceYear: 2011,
		gpa: 2.13,
		isActive: false,
	},
];

// HIGHER ORDER FUNCTIONS

// forEach
// students.forEach((st) => console.log(`${st.nim} / ${st.fullName}`));

// filter
// const registeredStudents = students.filter(function (st) {
// 	if (st.isActive) {
// 		return true;
// 	}
// });

// const registeredStudents = students.filter((st) =>
// 	st.isActive ? true : false
// );
// console.log(registeredStudents);

// const currentYear = new Date().getFullYear();
// const legendStudents = students.filter(
// 	(st) => currentYear - st.entranceYear > 4
// );
// console.log(legendStudents);

// map
// const highGPA = students
// 	.map((st) => st.gpa)
// 	.filter((gpa) => gpa >= 3.01)
// 	.sort((a, b) => b - a);

// console.log(highGPA);

// sort
const studentWithHighGPA = students.map((st) => st.gpa).sort((a, b) => b - a);
console.log(studentWithHighGPA);

// reduce
const averageGPA = students.map((st) => st.gpa).reduce((acc, cv) => acc + cv);
console.log(averageGPA / students.length);
