# Inicio de primera aplicación con React

* **ReactDOM.Render**: Renderiza el contenido en el contenedor, se recomiendo enviarle un componente(*<Component>*)
```javascript
const saludo  = <h1>Hola Mundo</h1>;
const divRoot = document.querySelector('#root');

ReactDOM.render(saludo, divRoot);

// Better approach: 
const divRoot = document.querySelector('#root');

ReactDOM.render(<PrimeraApp />, divRoot)
```
* **Functional Component**: En React, todo funciona en base a componentes. En las primeras versiones los componentes se creaban como *classes*, pero ahora se trabajan como *funciones*.
```javascript
const PrimeraApp = () => {
    return <h1>Hola Mundo</h1>
}
``` 
* **High Order Component**: Para retornar multiples etiquetas habria que envolverlas en una etiqueta *<Fragment></Fragment>* o usando la forma corta *<></>*:
```javascript
    return (
        <>
            <h1>Hola Mundo</h1>
            <p>Mi primera aplicación</p>
        </>
    )
```
* **Props**: Las propiedades. Todos los componentes reciben argumentos. Pueden ser mandados a través del render: `ReactDOM.render(<PrimeraApp saludo="Hola, Soy Goku"/>, divRoot)` - El componente recibiria un objeto con la propiedad *saludo*.
* **propTypes**: Para ponerle un tipado a las propiedades de los componentes se debe importar **PropTypes** y escribirlo con **camelCase**. En la propiedad es con **OpenCamelCase** y `isRequired` seria opcional:
```javascript
import PropTypes from "prop-types";

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
```
* **defaultProps**: Envia los valores por defecto a las propiedades. `PrimeraApp.defaultProps = { subtitulo: 'Mi primera aplicación' }`
* **useState**: useState es un Hook, nos permite cambiar el valor de una propiedad pero sin mutar el estado. `const [counter, setCounter] = useState(0);` - Hay que desestructurarlo, la primera propiedad es el counter que es el valor que le estoy asignando entre parentesis en el `useState()`, el segundo se suele poner **setNombreDeVariable** y es una función. Para cambiar el valor del counter tan solo deberia llamar esa función: `setCounter(counter + 1)`. Alternativamente también se puede hacer asi en el caso de que no tuviera acceso a la primera propiedad `setCounter( (c) => c + 1 )`
  
  
# Unit tests and integration tests

## AAA Slang
* **Arrange**: Declaramos variables, Importaciones necesarias..
* **Act**: Llamar métodos, simulamos clicks, realizar acciones sobre el paso anterior
* **Assert**: Comprobar si los resultados son los esperados


## Basic testing
* **done**: Para ejecutar una prueba asincrona debemos enviar al test un argumento, **done**. El cuál nosotros completariamos manualmente llamandolo como un método: `done()` cuando acabe nuestra promesa, observable o cualquier tarea asíncrona.
```javascript
test('Should..'(done) => { })
```
* **async y await**: Se puede usar el *async* y el *await* para realizar pruebas. Por defecto el timeout de un await en una prueba es de 5 segundos.
* **Pruebas con React Testing Library**: Para realizar pruebas con el dom hay que importar lo siguiente en un archivo llamado **setupTests.js** y debe estar en el **src**. `import '@testing-library/jest-dom/extend-expect'`
```javascript
const saludo = 'Hola, soy Goku';
const { getByText } = render(<PrimeraApp saludo={saludo}/>); 
// render incluye un montón de funciones, una de ellas es el getByText
// Esto se puede hacer de igual forma declarando el render una constante y llamando el método. wrapper.getByText()

expect(getByText(saludo)).toBeInTheDocument();
```
## Enzyme
Paquete de pruebas creado por *airbnb*. Muy fácil de usar y práctico.

***NOTA***
Actualmente el paquete oficial de *Enzyme* no soporta la versión 17 de React. Se puede utilizar de forma no oficial esta adaptación: [@wojtekmaj/enzyme-adapter-react-17](https://github.com/wojtekmaj/enzyme-adapter-react-17)
```javascript
// Enzyme Configuration on src/setupTests.js
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

// Importation in test files
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
```

* *enzyme-to-json*: Paquete de Node para convertir el snapshot de un *Fragment* a algo parseable y poder realizar las pruebas posteriores con el `toMatchSnapshot()`
```javascript
// Se debe incluir lo siguiente en el src/setupTests.js
expect.addSnapshotSerializer( createSerializer({ mode: 'deep'}) )
```
## Enzyme testing

* **shallow**: Muy parecido al *render* de las pruebas, pero con otras opciones interesantes como simular clicks o trabajar con querySelector etc... `shallow()`
* **find**: Uso en conjunto con **shallow**. Seria lo más parecido a un querySelector. Busca en el **SHALLOW** (NO en el documento) si existe el elemento que estoy mandandole, puede ser por id, clase, tag, etc... igual que en un querySelector. El **find()** tiene métodos como `text()` que permitiria extraer el texto, `html()` entre otros...Su uso completo seria algo como: `shallow(...).find('p').text()`
* **at**: Uso en conjunto con **find**. Devuelve la posición del array. `find('button').at(0)` seria lo mismo que `querySelector('button')[0]`
* **simulate**: Uso en conjunto con el **find**. Simula un evento. *click*,*keyup*, etc.. Puede recibir argumentos. Pero aún no he llegado a esa parte del curso. Actualizar esta información cuando disponga de ella.
* **beforeEach, beforeAll..**: Tiene las mismas aplicaciones que para *Jasmine*. *beforeEach* para ejecutar una instrucción antes de cada prueba, *beforeAll* para ejecutar una acción antes de que todas las pruebas
