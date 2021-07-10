import React, { Component } from 'react';

class SearchBar extends Component {
    state = { term: '' }

    onFormSubmit = event => {
        event.preventDefault(); // impede com que o form atualize a pagina no submit

        this.props.onSubmit(this.state.term);
    }
    // para passarmos informações do objeto filho para o objeto pai, criamos uma função
    // no pai, que será passada por props para o componente filho e, no evento, no nosso
    // caso, no onSubmit do form, chamamos uma função que irá chamar essa função passada
    // por props

    // o this no javascript faz uma referência à própria instância da classe (componente)
    // na qual estamos trabalhando. mas por que estamos obtendo undefined ao colocar
    // this.state.term na função onFormSubmit()?
    // no javascript, para termos o valor do this, temos que chamar a função com um "."
    // antes. ou seja, classe.metodo(), para que ela saiba o valor do metodo.
    // chamando de outra forma, o js não consegue saber o valor do this, e faz com que
    // o state seja realmente undefined.
    // para corrigirmos isso, fazemos o bind no construtor, fazendo com o que o valor
    // do this passado para a função seja sempre o correto
    // MAS HÁ UMA OUTRA MANEIRA de resolver esse problema, onde tornamos a função
    // em uma arrow function. uma das funções das arrow functions é automaticamente
    // fazer o bind correto do valor this.

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={(e) => this.setState({term: e.target.value})}>    
                        </input>
                    </div>
                </form>
            </div>
        );
    }
}

// componentes controlados x componentes não controlados:
// ao desenvolver com react, preferimos trabalhar com componentes controlados
// invés de não controlados:
// para criar um componente controlado, colocamos value como o state que queremos
// e no nosso evento, por exemplo, on change, chamamos set state no state que queremos
// o ciclo de vida de um componente controlado é:
// 1 - renderização -> 2 - usuário altera o valor do input -> 3 - componente rerenderiza
// -> 4 - componente é renderizado com valor inicial = state definido anteriormente, devido
// à prop value.
// a PRINCIPAL DIFERENÇA de um componente controlado para um não controlado é que, com ele
// deixamos de armazenar uma informação na DOM e passamos a armazená-la em nosso componente
// na nossa propriedade de state.

export default SearchBar;