import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas en 05-funciones', () => {

    test('Debe de retornar un objeto', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'   
        }
        
        const user = getUser();

        expect(user).toEqual(userTest);
    })

    test('should return an object', () => {

        const nombre = 'Alejandro';
        const activeUser = getUsuarioActivo(nombre);

        expect(activeUser).toEqual({uid: 'ABC567', username: nombre})
        
    })
    
    
})
