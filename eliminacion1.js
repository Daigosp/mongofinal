use("MiEscuela");


db.alumnos.deleteOne({ nombre: "Diego" });
db.alumnos.deleteOne({ nombre: "Ana" });


db.maestros.deleteOne({ nombre: "Prof. Juan" });
db.maestros.deleteOne({ nombre: "Prof. Luis" });


db.materias.deleteOne({ nombre: "Matemáticas" });
db.materias.deleteOne({ nombre: "Historia" });


db.salones.deleteOne({ numero: "A1" });
db.salones.deleteOne({ numero: "A2" });


db.talleres.deleteOne({ nombre: "Robótica" });
db.talleres.deleteOne({ nombre: "Danza" });
