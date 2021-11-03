import PropTypes from "prop-types";

// FC = Functional Component --- 
const PrimeraApp = ({saludo, subtitulo}) => {

    // const saludo = 'Hola Mundo';

    return (
        <>
            <h1>{saludo}!</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <p>{subtitulo}</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Mi primera aplicación'
}


export default PrimeraApp;
