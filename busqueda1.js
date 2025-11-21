use("MiEscuela");


db.alumnos.find({ edad: 17 });
db.alumnos.find({ grado: "5A" });
db.alumnos.find({ edad: { $gt: 15 } });
db.alumnos.find({ nombre: /^M/ });
db.alumnos.find({ grado: { $in: ["4A", "4B"] } });
db.alumnos.find({}, { nombre: 1 });
db.alumnos.find().sort({ edad: 1 });
db.alumnos.find().limit(3);
db.alumnos.find({ edad: { $lte: 16 } });
db.alumnos.find({ nombre: "Lucía" });

db.maestros.find({ materia: "Biología" });
db.maestros.find({ nombre: /^Prof/ });
db.maestros.find({}, { materia: 1 });
db.maestros.find({ materia: { $regex: "ía" } });
db.maestros.find().sort({ nombre: 1 });
db.maestros.find().limit(5);
db.maestros.find({ materia: { $ne: "Historia" } });
db.maestros.find({ materia: { $in: ["Matemáticas", "Física"] } });
db.maestros.find({ nombre: "Miss Laura" });
db.maestros.find({ materia: { $exists: true } });


db.materias.find({ horario: "7:00" });
db.materias.find({ nombre: /^B/ });
db.materias.find({ horario: { $gte: "10:00" } });
db.materias.find({}, { nombre: 1 });
db.materias.find().limit(4);
db.materias.find({ nombre: { $in: ["Matemáticas", "Física"] } });
db.materias.find().sort({ nombre: -1 });
db.materias.find({ horario: { $lte: "12:00" } });
db.materias.find({ nombre: "Español" });
db.materias.find({ horario: { $exists: true } });


db.salones.find({ capacidad: { $gt: 30 } });
db.salones.find({ numero: /^A/ });
db.salones.find().sort({ capacidad: -1 });
db.salones.find().limit(5);
db.salones.find({ capacidad: { $lt: 30 } });
db.salones.find({ numero: "C2" });
db.salones.find({}, { numero: 1 });
db.salones.find({ capacidad: { $gte: 35 } });
db.salones.find({ numero: { $exists: true } });
db.salones.find({ capacidad: { $ne: 40 } });


db.talleres.find({ dias: "Viernes" });
db.talleres.find({ nombre: /^P/ });
db.talleres.find({}, { nombre: 1 });
db.talleres.find({ dias: { $regex: "Lunes" } });
db.talleres.find().limit(3);
db.talleres.find().sort({ nombre: 1 });
db.talleres.find({ nombre: "Programación" });
db.talleres.find({ dias: { $exists: true } });
db.talleres.find({ nombre: { $in: ["Danza", "Ajedrez"] } });
db.talleres.find({ nombre: { $ne: "Teatro" } });
