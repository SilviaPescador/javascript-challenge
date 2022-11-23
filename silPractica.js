
export const students = [{
    age: 20,
    examScores: [],
    gender: 'male',
    name: 'edu'
    },
    {
    age: 23,
    examScores: [],
    gender: 'female',
    name: 'silvia'
    },
    {
    age: 25,
    examScores: [],
    gender: 'male',
    name: 'pepe'
    },
    {
    age: 38,
    examScores: [],
    gender: 'male',
    name: 'juan'
    },
    {
    age: 37,
    examScores: [],
    gender: 'male',
    name: 'victor'
    },
    {
    age: 26,
    examScores: [],
    gender: 'male',
    name: 'leo'
    },
    {
    age: 22,
    examScores: [],
    gender: 'female',
    name: 'cecilia'
    },
    {
    age: 30,
    examScores: [],
    gender: 'female',
    name: 'virginia'
    },
    {
    age: 24,
    examScores: [],
    gender: 'male',
    name: 'francisco'
    },
    {
    age: 33,
    examScores: [],
    gender: 'male',
    name: 'carlos'
    },
    {
    age: 34,
    examScores: [],
    gender: 'female',
    name: 'isabel'
    },
    {
    age: 34,
    examScores: [],
    gender: 'female',
    name: 'luisa'
    },
    {
    age: 27,
    examScores: [],
    gender: 'female',
    name: 'ana'
    },
    ]

export const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos', 'edu'];
export const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
export const availableGenders = ['male', 'female'];



/* REQUISITOS INDISPENSABLES */

// 1- Mostrar en formato de tabla todos los alumnos. 
console.table(students)

// 2- Mostrar por consola la cantidad de alumnos que hay en clase.
console.log(students.length);

// 3- Mostrar por consola todos los nombres de los alumnos.
const namesList = students.map(student => student.name);
namesList.forEach(name => console.log(name));

// 4- Eliminar el último alumno de la clase.
students.pop()
console.log('Students after pop: ', students)

// 5- Eliminar un alumno aleatoriamente de la clase.
students.splice(calculateRandomNumber(0, students.length), 1)
console.log('Students after splice: ', students)
// 6- Mostrar por consola todos los datos de los alumnos que son chicas.

const femalesList =  students.filter(student => student.gender ==='female');
console.log('Females List: ', femalesList);

// 7- Mostrar por consola el número de chicos y chicas que hay en la clase.
const malesList = students.filter(student => student.gender === 'male');

console.log('Number of females: ', femalesList.length);
console.log ('Number of males: ', malesList.length);

// 8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.
const allFemales = students.every(student => student.gender === 'female');
console.log('Students are all females?: ',allFemales);

// 9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
const youngList = students.filter(student => student.age >= 20 && student.age <= 25 );

const youngListNames = youngList.map(student => student.name)
console.log('Students between 20-25: ',youngListNames);

// 10- Añadir un alumno nuevo con los siguientes datos:
//   - nombre aleatorio.
//   - edad aleatoria entre 20 y 50 años.
//   - género aleatorio.
//   - listado de calificaciones vacío.
// ¡OJO!, el nombre y el género tienen que ir acordes.

    //1º Género random.
const randomGender = availableGenders[Math.floor(Math.random()*availableGenders.length)];

    //2º Nombre random según género; si es female, nombre aleatorio de mujer, si no, de hombre (con valor ternario)
const randomName = randomGender === 'female'? availableFemaleNames[Math.floor(Math.random()*availableFemaleNames.length)] : availableMaleNames[Math.floor(Math.random()*availableFemaleNames.length)];

    //3º Edad random.
function calculateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

let randomAge = calculateRandomNumber(20, 50);

    // 4º Adhesión de alumno aleatorio a students.
students.push({ age: randomAge, examScores: [], gender: randomGender, name: randomName });

console.log('Students después del new random student: ',students);

/* 11- Mostrar por consola el nombre de la persona más joven de la clase.
¡OJO!, si varias personas de la clase comparten la edad más baja, cualquiera de ellos es una respuesta válida.*/

    // 1º Mapeo la lista de students, para obtener otra array con las edades.
const studentAges = students.map(student => student.age);

    // 2º Cálculo de la edad mínima de la lista de edades.(se obtine un valor, no un array). Se hace sobre la copia de studentAges para no modificarla(con spread operator)
const minYoungerAge = Math.min(...studentAges);

    // 3º Búsqueda en la array students el primer valor que coincida con la mínima edad hallada, en la seleccion de edades.
const youngerStudent = students[studentAges.indexOf(minYoungerAge)];

const youngerName = youngerStudent.name;

console.log('Youngest student is: ', youngerName);

// 12- Mostrar por consola la edad media de todos los alumnos de la clase.
    // 1º Creación de una  variable con una nueva array de la suma de todos las edades de los students.
const sumStudentsAges = studentAges.reduce((sum, n) => sum + n, 0);
    // 2º Cálculo de average (media). Valor suma edades, entre el número total de alumnos.
const avgStudetsAges = Math.round(sumStudentsAges/ students.length);

console.log('Students ages average: ',avgStudetsAges);

// 13- Mostrar por consola la edad media de las chicas de la clase.
    // 1º Nueva lista con las edades de la lista de females.
const femalesAges = femalesList.map(female => female.age);
    // 2º Sumatorio de las edades de las chicas.
const sumFemalesAges = femalesAges.reduce((sum, n) => sum + n, 0);
    // 3º Cálculo de average (media). Suma edades entre numero total de chicas.
const avgFemalesages = Math.round(sumFemalesAges / femalesList.length);
console.log('Females ages average: ', avgFemalesages);

// 14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.

// students.forEach(student => student.examScores = [calculateRandomNumber(0, 10)]); ---> incorrecto ya que no suma notas al array. 

students.forEach(student => student.examScores.push(calculateRandomNumber(0, 10))); // correcto
students.forEach(student => student.examScores.push(calculateRandomNumber(0, 10)));
console.log('Students´s new exam Scores: ', students)

// 15- Ordenar el array de alumnos alfabéticamente según su nombre.

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

console.log('Students sorted alphabetically: ', students)

/* REQUISITOS OPCIONALES */

// 16- Mostrar por consola el alumno de la clase con las mejores notas.

    // 1º Nueva lista de listas solo con los examScores.
const studentsScores = students.map(student => student.examScores)
console.log('Students Scores', studentsScores)

    // 2º Nueva lista con los sumatorios de notas de cada alumno
const sumStudentsScores = Array.from(studentsScores, (scores => scores.reduce((sum, n) => sum + n , 0)))
console.log('Sumatorio Students Scores ', sumStudentsScores)

    // 3º index del alumno con la suma mayor.
const bestStudentIndex = sumStudentsScores.indexOf(Math.max(...sumStudentsScores));
console.log('Best student Index is: ',bestStudentIndex)

    // 4º Comparación de su index con el array inicial students y revelo propiedad name.
const bestStudent = students[bestStudentIndex].name
console.log('El alumno/a con mejores notas es: ', bestStudent)

// 17- Mostrar por consola la nota media más alta de la clase y el nombre del alumno al que pertenece.

    // 1º Lista con la nota media individual de cada alumno

const studentsMedias = Array.from(studentsScores, (scores => (scores.reduce((sum, n) => sum + n , 0))/scores.length))
console.log('Students Medias',studentsMedias) // 

    // 2º mostrar la nota media más alta y el nombre del alumno que la tiene
const highMedia = Math.max(...studentsMedias)
const highMediaStudentIndex = studentsMedias.indexOf(highMedia)
const highMediaStudentName = students[highMediaStudentIndex].name   

console.log( 'La nota media más alta es: ', highMedia, 'y pertenece al alumno/a: ', highMediaStudentName)

// 18- Añadir un punto extra a cada nota existente de todos los alumnos. Recordad que la nota máxima posible es 10. Si los alumnos aún no tienen registrada ninguna nota, les pondremos un 10.

const sumExtraPoints = () => {
    // para cada estudiante de students
    for (let i = 0; i < students.length; i++) {
        const student = students[i] 
        for ( let index2 = 0; index2 < student.length; index2++){
            student[index2].examScores = student[index2].examScores.map(score => (score < 10) ? score++ : score);
        }
        
    }
    
}



console.log('students scores: ', studentsScores)

sumExtraPoints()
console.table(students)
// const newList = students.forEach(student => [student.examScores].map(score => score.map(calif => calif + 1))) // NOT WORKING 
