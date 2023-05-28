import { studentModel } from '../model/student.model.js';

class StudentService {
	constructor() {
		this.studentModel = studentModel;
	}

	async getAll() {
		return await this.studentModel.find();
	}

	async addStudent(student) {
		if (
			!student.nombre ||
			!student.apellido ||
			!student.edad ||
			!student.dni ||
			!student.curso ||
			!student.nota
		) {
			throw new Error('Faltan datos');
		}
		return await this.studentModel.create(student);
	}

	async updateStudent(sid, student) {
		if (!sid) {
			throw new Error('Falta ID');
		}
		return await this.studentModel.updateOne({ _id: sid }, student);
	}

	async deleteStudent(sid) {
		if (!sid) {
			throw new Error('Falta ID');
		}
		return await this.studentModel.deleteOne({ _id: sid });
	}

	// async addManyStudents(students) {
	// 	try {
	// 		return await this.studentModel.insertMany(students);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }
}

const studentService = new StudentService();

export default studentService;
