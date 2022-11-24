import readline from 'readline';
import {students, 
        availableFemaleNames, 
        availableMaleNames, 
        availableGenders, 
        showOptions,
        isInt,
        calculateRandomNumber,
        sumExtraPoints,
        } from './utils.js';


const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout, 
});



function getOptionFromConsole() {
    const promise = new Promise((resolve, reject) => { 
        rl.question('Elige una opción: ', (num) => {
            rl.pause();
            if (isInt(num)) {
                num = Number.parseInt(num);
                resolve(num);
                
            } else {
                reject('Introduce un número válido');
            }
        })
    
    })

    return promise;
}

async function displayOptions() {
    let numberFromConsole
    let femalesList
    let studentsScores
    let studentAges
    do {
      // gestion de promise
      try {
        showOptions()
        numberFromConsole = await getOptionFromConsole();
        
    } catch (error) {
        console.log(error)
        process.exit(0)
    }

    
      // condiciones para la opcion elegida
    switch(numberFromConsole) {
      
      case 1:
          // Tabla  de todos los alumnos
          console.table(students);
          break;

      case 2:
          // Número de alumnos que hay en clase.
          console.log('Número total de alumnos: ', students.length);
          break;

      case 3:
          // Nombres de todos los alumnos.
          const namesList = students.map(student => student.name);
          namesList.forEach(name => console.log(name));
          break;

      case 4:
          // Elimina al último alumno de la lista.
          students.pop();
          console.log('Estudiantes después de eliminar al último de la lista: ');
          console.table(students);
          break;

      case 5:
          // Elimina a un alumno aleatoriamente.
          students.splice(calculateRandomNumber(0, students.length), 1);
          console.log('Estudiantes después de eliminar un alumno aleatorio: ')
          console.table(students)
          break;

      case 6:
          // Datos de las alumnas.
          femalesList = students.filter(student => student.gender ==='female');
          console.log('Tabla de alumnas: ');
          console.table(femalesList)
          break;

      case 7:
          // Número de chicos y chicas que hay en la clase.
          const malesList = students.filter(student => student.gender === 'male');
          femalesList = students.filter(student => student.gender ==='female');
          
          console.log('Número de alumnas: ', femalesList.length);
          console.log('Número de alumnos: ', malesList.length);
          break;

      case 8:
          // ¿Todos los alumnos son chicas?(true/false).
          const allFemales = students.every(student => student.gender === 'female');
          console.log('¿Son todos los alumnos chicas?: ',allFemales);
          break;

      case 9:
          // Nombres de los alumnos entre 20 y 25 años.
          const youngList = students.filter(student => student.age >= 20 && student.age <= 25 );

          const youngListNames = youngList.map(student => student.name)
          console.log('Alumnos entre 20 y 25 años: ', youngListNames);
          break;

      case 10:
          // Añade un alumno nuevo aleatorio entre 20 y 50 años ( consecuente genero-nombre), y lista de notas vacía.
          const randomGender = availableGenders[Math.floor(Math.random()*availableGenders.length)];

          const randomName = randomGender === 'female'? availableFemaleNames[Math.floor(Math.random()*availableFemaleNames.length)] : availableMaleNames[Math.floor(Math.random()*availableFemaleNames.length)];

          let randomAge = calculateRandomNumber(20, 50);

          students.push({ age: randomAge, examScores: [], gender: randomGender, name: randomName });

          console.log('Nueva tabla de alumnos con la incorporación: ');
          console.table(students)

          break;

      case 11:
          // Nombre del alumno más joven de la clase.

          studentAges = students.map(student => student.age);

          const minYoungerAge = Math.min(...studentAges);

          const youngerStudent = students[studentAges.indexOf(minYoungerAge)];

          const youngerName = students.length > 0 ?  youngerStudent.name : 'No hay alumnos en esta clase. Para añadir uno nuevo, elige la opción 10.';

          console.log('El alumno/a más joven es: ', youngerName);
          break;

      case 12: // CONTROL DE ERROR CON LISTA VACIA DONE
          // Edad media de todos los alumnos de la clase.

          const sumStudentsAges = students.length > 0 ? studentAges.reduce((sum, n) => sum + n, 0) : 0;

          const avgStudetsAges = students.length > 0 ? Math.round(sumStudentsAges / students.length) : 0; // ternaria

          console.log('Edad media de todos los alumnos de la clase : ',avgStudetsAges);
          break;

      case 13: 
          // Edad media de las alumnas de la clase.
          femalesList = students.filter(student => student.gender ==='female');

          const femalesAges = femalesList.map(female => female.age);

          const sumFemalesAges = femalesAges.reduce((sum, n) => sum + n, 0);

          const avgFemalesages = students.length > 0 ? Math.round(sumFemalesAges / femalesList.length) : 'No hay alumnos en esta clase. Para añadir uno nuevo, elige la opción 10.';

          console.log('Edad media de las alumnas: ', avgFemalesages);

          break;

      case 14:
          // Añade nueva nota aleatoria al listado de cada alumno(entre 0 y 10).

          students.forEach(student => student.examScores.push(calculateRandomNumber(0, 10))); // correcto
          
          console.log('Students´s new exam Scores: ')
          console.table(students)
          break;

      case 15:
          // Ordena alfabéticamente a los alumnos según su nombre.

          students.sort((a, b) => {
            const nameA = a.name.toUpperCase(); 
            const nameB = b.name.toUpperCase(); 
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            // si los nombres son iguales:
            return 0;
          });

          console.log('Estudiantes ordenados alfabéticamente: ');
          console.table(students)
          break;

      case 16:
          // Alumno de la clase con mayor sumatorio de notas.
          studentsScores = students.map(student => student.examScores);

          const sumStudentsScores = Array.from(studentsScores, (scores => scores.reduce((sum, n) => sum + n , 0)))

          const bestStudentIndex = sumStudentsScores.indexOf(Math.max(...sumStudentsScores));

          const bestStudent = students.length > 0 ? students[bestStudentIndex].name : 'No hay alumnos en esta clase. Para añadir uno nuevo, elige la opción 10.';

          console.log('El alumno/a con mejores notas es: ', bestStudent);

          break;

      case 17:
          // Nota media más alta de la clase y alumno al que pertenece.
          studentsScores = students.map(student => student.examScores);

          const studentsMedias = Array.from(studentsScores, (scores => (scores.reduce((sum, n) => sum + n , 0))/scores.length));

          const highMedia =  Math.max(...studentsMedias);

          const highMediaStudentIndex = studentsMedias.indexOf(highMedia);

          const highMediaStudentName =   students[highMediaStudentIndex].name ;

          console.log( 'La nota media más alta es: ', highMedia, 'y pertenece al alumno/a: ', highMediaStudentName);

          break;

      case 18:
          //Añade un punto extra a cada nota existente de todos los alumnos.(nota máxima posible: 10. Si aún no hay registro, primera nota: 10.)
          console.log('Notas con punto extra: ')
          sumExtraPoints()
          break
      
    }


  } while (numberFromConsole > 0 && numberFromConsole <= 18)

}

displayOptions()