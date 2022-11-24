
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


export const showOptions = () => {
    console.log(optionsText)
}


const optionsText = '\n\n\nPulsa cualquiera de los números para acceder\na su funcionalidad correspondiente:\nPara salir de la aplicación pulse cualquier número distinto al de las opciones.\n\n1- Tabla  de todos los alumnos.\n2- Número de alumnos que hay en clase.\n3- Nombres de todos los alumnos.\n4- Elimina al último alumno de la lista.\n5- Elimina a un alumno aleatoriamente.\n6- Datos de las alumnas.\n7- Número de chicos y chicas que hay en la clase.\n8- ¿Todos los alumnos son chicas?(true/false).\n9- Nombres de los alumnos entre 20 y 25 años.\n10-Añade un alumno nuevo con los siguientes datos:\n - Nombre aleatorio.\n - Edad aleatoria entre 20 y 50 años.\n - Género aleatorio (consecuente con nombre).\n - Calificaciones - vacío.\n11- Nombre de la persona más joven de la clase.\n12- Edad media de todos los alumnos de la clase.\n13- Edad media de las chicas de la clase.\n14- Añade nueva nota aleatoria al listado de cada alumno(entre 0 y 10).\n15- Ordena alfabéticamente a los alumnos según su nombre.\n16- Alumno de la clase con mayor sumatorio de notas.\n17- Nota media más alta de la clase y alumno al que pertenece.\n18- Añade un punto extra a cada nota existente de todos los alumnos.\n(nota máxima posible: 10. Si aún no hay registro, primera nota: 10.)\n\n'


export const isInt = (num) => {
    return !Number.isNaN(num)
}


export function calculateRandomNumber(min, max) {
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
return randomNumber;
}


export const sumExtraPoints = () => {
    
    for (let i = 0; i < students.length; i++) {
        const student = students[i]
        
        if (student.examScores.length !== 0) {

            student.examScores = student.examScores.map(score => score < 10 ? ++score : score);
            debugger;

        } else if (student.examScores.length === 0) {
            student.examScores.push(10);
            
        }
        
    } console.table(students);
        
}

