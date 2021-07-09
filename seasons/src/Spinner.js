import React from 'react';

const Spinner = props => {
    return (
        <div class="ui active inverted dimmer">
        <div class="ui big text loader">{props.text}</div>
      </div>
    );
};

// Podemos definir os props padrão de um componente, para quando não
// os passarmos, um texto continue ser mostrando na tela.
Spinner.defaultProps = {
    text: 'Loading...'
};

export default Spinner;