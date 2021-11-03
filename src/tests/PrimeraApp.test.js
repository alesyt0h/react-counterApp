import { shallow } from 'enzyme';
import PrimeraApp from "../PrimeraApp";
// import React from 'react';
// import { render } from "@testing-library/react";

describe('Pruebas en <PrimeraApp />', () => {


    test('debe de mostrar <PrimeraApp /> correctamente', () => {
        
        const saludo = 'Hola, soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);

        expect(wrapper).toMatchSnapshot()

    })
    

    test('debe de mostrar el subtitulo enviado por props', () => {
        
        const saludo = 'Hola, soy Goku';
        const subtitulo = 'Soy un subtitulo';

        const wrapper = shallow(
            <PrimeraApp 
                saludo={saludo}
                subtitulo={subtitulo}
            />
        );

        const textoParrafo = wrapper.find('p').text();
        
        expect(textoParrafo).toBe(subtitulo);
    })
    















    // Using default React Testing Library 
    //
    // test('Debe de mostrar el mensaje Hola, Soy Goku', () => {
    
    //     const saludo = 'Hola, soy Goku'
    //     const { getByText } = render(<PrimeraApp saludo={saludo}/>)
    //     // wrapper.getByText() -- Esto se puede hacer de igual forma desestructurando el render

    //     expect(getByText(saludo)).toBeInTheDocument();
    // });
    
})
