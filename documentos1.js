use("MiEscuela");


db.alumnos.insertMany([
  { nombre: "Diego", edad: 17, grado: "5A" },
  { nombre: "Ana", edad: 16, grado: "4B" },
  { nombre: "Luis", edad: 17, grado: "5A" },
  { nombre: "María", edad: 15, grado: "3C" },
  { nombre: "Carlos", edad: 16, grado: "4A" },
  { nombre: "Jessica", edad: 17, grado: "5C" },
  { nombre: "Jorge", edad: 15, grado: "3A" },
  { nombre: "Elena", edad: 16, grado: "4C" },
  { nombre: "Pablo", edad: 17, grado: "5B" },
  { nombre: "Lucía", edad: 14, grado: "2A" }
]);


db.maestros.insertMany([
  { nombre: "Prof. Juan", materia: "Matemáticas" },
  { nombre: "Prof. Luis", materia: "Física" },
  { nombre: "Miss Ana", materia: "Español" },
  { nombre: "Miss Sonia", materia: "Historia" },
  { nombre: "Prof. Mario", materia: "Geografía" },
  { nombre: "Prof. Elena", materia: "Biología" },
  { nombre: "Miss Claudia", materia: "Química" },
  { nombre: "Prof. David", materia: "Tecnología" },
  { nombre: "Prof. Hugo", materia: "Inglés" },
  { nombre: "Miss Laura", materia: "Artes" }
]);


db.materias.insertMany([
  { nombre: "Matemáticas", horario: "7:00" },
  { nombre: "Historia", horario: "8:00" },
  { nombre: "Geografía", horario: "9:00" },
  { nombre: "Física", horario: "10:00" },
  { nombre: "Química", horario: "11:00" },
  { nombre: "Biología", horario: "12:00" },
  { nombre: "Español", horario: "1:00" },
  { nombre: "Inglés", horario: "2:00" },
  { nombre: "Artes", horario: "3:00" },
  { nombre: "Educación Física", horario: "4:00" }
]);


db.salones.insertMany([
  { numero: "A1", capacidad: 30 },
  { numero: "A2", capacidad: 25 },
  { numero: "B1", capacidad: 35 },
  { numero: "B2", capacidad: 40 },
  { numero: "C1", capacidad: 32 },
  { numero: "C2", capacidad: 28 },
  { numero: "D1", capacidad: 45 },
  { numero: "D2", capacidad: 38 },
  { numero: "E1", capacidad: 20 },
  { numero: "E2", capacidad: 22 }
]);


db.talleres.insertMany([
  { nombre: "Robótica", dias: "Lunes-Miércoles" },
  { nombre: "Danza", dias: "Martes-Jueves" },
  { nombre: "Música", dias: "Viernes" },
  { nombre: "Fútbol", dias: "Lunes-Martes" },
  { nombre: "Pintura", dias: "Miércoles" },
  { nombre: "Ajedrez", dias: "Jueves" },
  { nombre: "Teatro", dias: "Viernes" },
  { nombre: "Programación", dias: "Lunes" },
  { nombre: "Cocina", dias: "Martes" },
  { nombre: "Carpintería", dias: "Jueves" }
]);
