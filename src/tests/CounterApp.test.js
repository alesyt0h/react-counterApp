import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe('Pruebas en el counterApp', () => {
    
    let wrapper = shallow(<CounterApp/>); // Asi no se perdería el intellisense
    
    beforeEach( () => {
        wrapper = shallow(<CounterApp/>);
    });


    test('Debe de hacer match con un snapshot y sus valores por defecto.', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de mostrar el valor por defecto de 100', () => {
        const wrapper = shallow(<CounterApp value={100}/>);
        
        const matchedValue = wrapper.find('h2').text();
        
        expect(Number(matchedValue)).toBe(100);
    });

    test('Debe de incrementar con el botón de +1', () => {
        
        wrapper.find('button').at(0).simulate('click');
        const matchedValue = wrapper.find('h2').text().trim();

        expect(matchedValue).toBe('11')

    });

    test('Debe de decrementar con el botón de -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const matchedValue = wrapper.find('h2').text().trim();
        
        expect(matchedValue).toBe('9')
    });
    
    test('Debe de colocar el valor por defecto con el btn reset', () => {
        
        const wrapper = shallow(<CounterApp value={105}/>);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const matchedValue = wrapper.find('h2').text().trim();

        expect(matchedValue).toBe('105')

    });
    
    
})
