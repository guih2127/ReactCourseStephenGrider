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
  // o constructor é uma função especial da linguagem do javascript (e não do react)
  // e ela é sempre a primeira função a ser chamada dentro de um componente.
  // por isso, devemos iniciar nosso state dentro do nosso construtor.
  // dentro dele, temos que chamar a função super(props), para certificarmos
  // que a função implementada na classe Component (que extendemos) seja chamada,
  // e só após isso inicializemos o nosso state.
  constructor(props) {
    super(props); // super é uma referência a função do parente (pai)
    this.state = { latitude: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // o react diz que SEMPRE temos que definir nossa função render().
  render() {
    // OBS: NUNCA devemos fazer isso de chamar um metódo desse tipo no render(),
    // porque o metódo render() é chamado diversas vezes no componente. ainda vamos
    // aprender sobre lifecycles.
    // window.navigator.geolocation.getCurrentPosition(
    //   (position) => this.setState({latitude: position.coords.latitude}),
    //   (err) => console.log(err)
    // );

    // renderização condicional! renderizamos o componente de acordo com o state
    // ou de acordo com o props.
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.latitude) {
      return <div>Latitude: {this.state.latitude}</div>;
    }

    return <div>Loading...</div>;
  }

  // quando o componente é renderizado, essa função é chamada
  componentDidMount() {
    console.log("component did mount")
  }

  // quando o componente é atualizado (renderizado novamente), essa função
  // é chamada
  componentDidUpdate() {
    console.log("component did update")
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