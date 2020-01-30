import React, {Fragment, useState} from 'react';

const useMoneda = () => {

    const [state, actualizarState] = useState('');

    const Seleccionar = () => (
        <Fragment>
            <label>Moneda</label>
            <select>
                <option value="CO">Peso Colombiano</option>
            </select>
        </Fragment>
    );
    // Retornar el state
    return [state, Seleccionar, actualizarState];
};

export default useMoneda;