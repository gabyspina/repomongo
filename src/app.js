import express from 'express';
import mongoose from 'mongoose';
import studentsRouter from './router/student.router.js';

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api/students', studentsRouter);

mongoose.connect(
	'mongodb+srv://gabyspina:gsp246813579@coderclaster.gnpohje.mongodb.net/colegio?retryWrites=true&w=majority'
); // Aca conecto mi base de datos con atlas y despues de la /pongo mi celección, que crée en atlas

app.listen(8080, () => console.log('Server running on port 8080'));
