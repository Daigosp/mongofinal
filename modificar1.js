use("MiEscuela");


db.alumnos.updateOne({ nombre: "Luis" }, { $set: { grado: "5B" } });
db.alumnos.updateOne({ nombre: "María" }, { $set: { edad: 16 } });


db.maestros.updateOne({ nombre: "Miss Ana" }, { $set: { materia: "Literatura" } });
db.maestros.updateOne({ nombre: "Prof. Mario" }, { $set: { materia: "Ciencias Sociales" } });


db.materias.updateOne({ nombre: "Física" }, { $set: { horario: "7:30" } });
db.materias.updateOne({ nombre: "Química" }, { $set: { horario: "8:30" } });


db.salones.updateOne({ numero: "B1" }, { $set: { capacidad: 33 } });
db.salones.updateOne({ numero: "C1" }, { $set: { capacidad: 36 } });

db.talleres.updateOne({ nombre: "Música" }, { $set: { dias: "Lunes" } });
db.talleres.updateOne({ nombre: "Fútbol" }, { $set: { dias: "Miércoles" } });
