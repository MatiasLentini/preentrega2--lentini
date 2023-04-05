class Pacientes {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

}

alert("Bienvenido al registro de Pacientes.\nPresione Enter para continuar")

const listaPacientes = [];

let rta = ""

do {
    let pacientes = new Pacientes(prompt("Ingrese un nombre"), Number(prompt("Ingrese edad")));
    listaPacientes.push(pacientes);

    rta = prompt("Desea ingresar otro paciente? Caso contrario ingrese ESC").toLocaleUpperCase()
}

while (rta != "ESC");

let acumulador = ""

listaPacientes.forEach(pacientes => {
    acumulador += "Nombre: " + pacientes.nombre + "\nEdad: " + pacientes.edad + "\n"
})

alert(acumulador)

alert("Presione Enter para filtrar los pacientes menores de 18")

function filtrarPorEdad(edad) {
    return listaPacientes.filter(propiedad => propiedad.edad <= Number(edad));
}

console.log(filtrarPorEdad(18))

