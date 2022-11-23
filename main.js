import readline from 'readline';
import {students, availableFemaleNames, availableMaleNames, availableGenders} from './silPractica.js';


const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout, 
});

const isInt = (num) => {
  return !Number.isNaN(num)
}

function getOptionFromConsole() {
    const promise = new Promise((resolve, reject) => { 
        rl.question('Introduce el número: ', (num) => {
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

    do {
      // gestion de promise
      try {
        numberFromConsole = await getOptionFromConsole();
        
    } catch (error) {
        console.log(error)
        process.exit(0)
    }
      // condiciones para la opcion elegida
    switch(numberFromConsole) {

      case 1:
        console.table(students);

        break;

      case 2:
        console.log(students.length);

        break;

      case 3:
        const namesList = students.map(student => student.name);

        namesList.forEach(name => console.log(name));

        break;

      case 4:
        students.pop();
        console.log('Students after pop: ', students)
        break;

      case 5:
        students.splice(calculateRandomNumber(0, students.length), 1);
        console.log('Students after splice: ', students)
        break;

      case 6:
        const femalesList =  students.filter(student => student.gender ==='female');
        console.log('Females List: ', femalesList);
        break;

      case 7:
        const malesList = students.filter(student => student.gender === 'male');

        console.log('Number of females: ', femalesList.length);
        console.log ('Number of males: ', malesList.length);
        break;

      case 8:
        const allFemales = students.every(student => student.gender === 'female');
        console.log('Students are all females?: ',allFemales);
        break;

      case 9:
        const youngList = students.filter(student => student.age >= 20 && student.age <= 25 );

        const youngListNames = youngList.map(student => student.name)
        console.log('Students between 20-25: ',youngListNames);
        break;

      case 10:
        const randomGender = availableGenders[Math.floor(Math.random()*availableGenders.length)];

        const randomName = randomGender === 'female'? availableFemaleNames[Math.floor(Math.random()*availableFemaleNames.length)] : availableMaleNames[Math.floor(Math.random()*availableFemaleNames.length)];

        let randomAge = calculateRandomNumber(20, 50);

        students.push({ age: randomAge, examScores: [], gender: randomGender, name: randomName });

        console.log('Students después del new random student: ',students);

        break;

      case 11:
        const studentAges = students.map(student => student.age);

        const minYoungerAge = Math.min(...studentAges);

        const youngerStudent = students[studentAges.indexOf(minYoungerAge)];

        const youngerName = youngerStudent.name;

        console.log('Youngest student is: ', youngerName);
        break;

      case 12:
        const sumStudentsAges = studentAges.reduce((sum, n) => sum + n, 0);

        const avgStudetsAges = Math.round(sumStudentsAges/ students.length);

        console.log('Students ages average: ',avgStudetsAges);
        break;

      case 13:
        const femalesAges = femalesList.map(female => female.age);

        const sumFemalesAges = femalesAges.reduce((sum, n) => sum + n, 0);

        const avgFemalesages = Math.round(sumFemalesAges / femalesList.length);

        console.log('Females ages average: ', avgFemalesages);

        break;

      case 14:
        students.forEach(student => student.examScores.push(calculateRandomNumber(0, 10))); // correcto
        students.forEach(student => student.examScores.push(calculateRandomNumber(0, 10)));
        console.log('Students´s new exam Scores: ', students)

        break;

      case 15:
        students.sort((a, b) => {
          const nameA = a.name.toUpperCase(); // convierte a mayusculas
          const nameB = b.name.toUpperCase(); // para unificar.
          if (nameA < nameB) {
              return -1;
          }
          if (nameA > nameB) {
              return 1;
          }
          // si los nombres son iguales:
          return 0;
        });

        console.log('Students sorted alphabetically: ', students);

        break;

      case 16:
        const studentsScores = students.map(student => student.examScores);

        console.log('Students Scores', studentsScores);

        const sumStudentsScores = Array.from(studentsScores, (scores => scores.reduce((sum, n) => sum + n , 0)))
        console.log('Sumatorio Students Scores ', sumStudentsScores);

        const bestStudentIndex = sumStudentsScores.indexOf(Math.max(...sumStudentsScores));

        console.log('Best student Index is: ',bestStudentIndex);

        const bestStudent = students[bestStudentIndex].name
        console.log('El alumno/a con mejores notas es: ', bestStudent);

        break;

      case 17:
        const studentsMedias = Array.from(studentsScores, (scores => (scores.reduce((sum, n) => sum + n , 0))/scores.length));

        console.log('Students Medias',studentsMedias);

        const highMedia = Math.max(...studentsMedias);

        const highMediaStudentIndex = studentsMedias.indexOf(highMedia);

        const highMediaStudentName = students[highMediaStudentIndex].name;

        console.log( 'La nota media más alta es: ', highMedia, 'y pertenece al alumno/a: ', highMediaStudentName);

        break;

      case 18:
        console.log('Option in process')
        break
      
    }


  } while (numberFromConsole > 0 && num <= 18)

}

displayOptions()