import { Router } from 'express';
import studentService from '../service/student.service.js';

const studentsRouter = Router();

studentsRouter.get('/', async (req, res) => {
	try {
		const students = await studentService.getAll();
		res.send(students);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

studentsRouter.post('/', async (req, res) => {
	try {
		const student = await studentService.addStudent(req.body);
		res.status(201).send(student);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

studentsRouter.put('/:sid', async (req, res) => {
	const sid = req.params.sid;
	try {
		const student = await studentService.updateStudent(sid, req.body);
		res.status(200).send(student);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

studentsRouter.delete('/:sid', async (req, res) => {
	const sid = req.params.sid;
	try {
		const student = await studentService.deleteStudent(sid);
		res.status(200).send(student);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

// studentsRouter.post('/', async (req, res) => {
// 	try {
// 		const students = await studentService.addManyStudents(req.body);
// 		res.status(201).send(students);
// 	} catch (err) {
// 		res.status(500).send({ message: err.message });
// 	}
// });

export default studentsRouter;
