import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import heroes from "../../data/heroes";

describe('Pruebas en funciones de Héroes', () => {
    
    test('should return a hero by id', () => {
        
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);

    })

    test('should return undefined if heroe not exists', () => {
        
        const id = 10;
        const heroe = getHeroeById(id);

        // const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toBe(undefined);

    })

    test('should return an array with DC heroes', () => {
        
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter(h => h.owner === owner)

        expect(heroes).toEqual(heroesData);

    })

    test('should return an array with Marvel heroes', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter(h => h.owner === owner)

        expect(heroesData.length).toBe(2);
    })
    
    
    

})
