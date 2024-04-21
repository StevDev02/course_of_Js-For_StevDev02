
let youtuber = {

    name : 'mouredev',
    userName : 'Canal de Mouredev',
    age : 18,
    ubicacion : {
        principal : 'Leonidas',
        numberHome : 'E392Rf'
    },
    genero : 'Masculino',
    activo : false

}

console.log('Este la informacion del youtuber: ', youtuber)

const nameYoutuber = youtuber.name
console.log('Solo el nombre del youtuber: ', nameYoutuber)

//Modificar los datos de un objeto
youtuber.name = null
console.log('Este la informacion actualizada del youtuber: ', youtuber)

//Eliminar un datos
delete youtuber.userName
console.log('Este la informacion elimina el userName del youtuber: ', youtuber)
