
export const students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'edu'
    },
    {
    age: 37,
    examScores: [],
    gender: 'female',
    name: 'silvia'
    },

]

export const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos', 'edu'];
export const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
export const availableGenders = ['male', 'female'];




const optionsText = '\n\nEscribe un número de la siguiente lista para acceder a su funcionalidad correspondiente:\nPara salir de la aplicación:\n- Escoge 0 o cualquier número distinto al de las opciones.\n\n1 - Tabla  de todos los alumnos.\n2 - Número de alumnos que hay en clase.\n3 - Nombres de todos los alumnos.\n4 - Elimina al último alumno de la lista.\n5 - Elimina a un alumno aleatoriamente.\n6 - Datos de las alumnas.\n7 - Número de chicos y chicas que hay en la clase.\n8 - ¿Todos los alumnos son chicas?(true/false).\n9 - Nombres de los alumnos entre 20 y 25 años.\n10 -Añade un alumno nuevo con los siguientes datos:\n   - Nombre aleatorio.\n   - Edad aleatoria entre 20 y 50 años.\n   - Género aleatorio (consecuente con nombre).\n   - Calificaciones - vacío.\n11 - Nombre de la persona más joven de la clase.\n12 - Edad media de todos los alumnos de la clase.\n13 - Edad media de las chicas de la clase.\n14 - Añade nueva nota aleatoria al listado de cada alumno(entre 0 y 10).\n15 - Ordena alfabéticamente a los alumnos según su nombre.\n16 - Alumno de la clase con mayor sumatorio de notas.\n17 - Nota media más alta de la clase y alumno al que pertenece.\n18 - Añade un punto extra a cada nota existente de todos los alumnos.\n(nota máxima posible: 10. Si aún no hay registro, primera nota: 10.)\n\n'




// FUNCTIONS

// Muestra el texto con las opciones al usuario antes de cada input.
export const showOptions = () => {
    console.log(optionsText)
}

// Comprueba si el input es un número.
export const isInt = (num) => {
    return !Number.isNaN(num)
}

// Calcula un número aleatorio 
export function calculateRandomNumber(min, max) {
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
return randomNumber;
}

// Suma un punto extra a cada alumno en cada una de sus notas. 
    // Si no tiene ninguna nota, le añade  un 10
    // Maxima puntuación: 10
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


