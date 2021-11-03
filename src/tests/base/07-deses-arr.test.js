import { retornaArreglo } from "../../base/07-deses-arr"

describe('Pruebas en desestructuración', () => {
    
    test('should return and string and a number', () => {
        
        const [letras, numeros] = retornaArreglo(); // ['ABC', 123]

        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');

    })
    

})
