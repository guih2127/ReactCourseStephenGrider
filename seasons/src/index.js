import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );

//   return <div>Latitude: </div>
// };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {latitude: ''};
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({latitude: position.coords.latitude}),
      (err) => console.log(err)
    );

    return (
      <div> Latitude: {this.state.latitude}</div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
);

// Um componente de função não irá servir pra nós nesse caso, mas por quê?
// A função getCurrentPosition() demora um tempo para ser executada, digamos,
// alguns segundos. Ou seja, a renderização do JSX acontece ANTES da função
// de geoLocation ser concluída. Com um componente de função, não temos uma
// boa maneira de esperar o callback para mostrá-lo na tela para o usuário.
// A solução, então é utilizar um componente baseado em classe.

// Com um componente baseado em classe, o fluxo permanecerá o mesmo, ou seja,
// nosso JSX será renderizado antes da chamada ser concluída. A grande diferença
// é que APÓS a chamada ser concluída, o componente será renderizado novamente.