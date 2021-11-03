import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.js', () => {

    test('getSaludo debe de retornar hola + nombre', ()=> {

        const nombre = 'Alejandro';

        expect(getSaludo(nombre)).toBe(`Hola ${nombre}`)

    })

    test('getSaludo debe de retornar Hola Carlos si no hay argumento en el nombre', () =>{

        expect(getSaludo()).toBe('Hola Carlos');

    })

})