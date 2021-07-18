import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selectedValue, setSelectedValue, text }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    const renderedOptions = options.map(option => {
        if (option.value === selectedValue.value) {
            return null;
        }

        return (
            <div className="item" key={option.value} onClick={() => setSelectedValue(option)}>
                {option.label}
            </div>
        );
    });

    // useEffect() => sempre que nosso componente for renderizado, o metódo será chamado.
    // podemos fazer com que useEffect seja chamado apenas quando alguma variável específica
    // for mudada, acrescentando-a no array que useEffect recebe.
    // se declararmos uma função com return () => dentro de useEffect, essa função será a função
    // de limpeza, ou seja, podemos utilizá-la para removermos algo que precisamos na desmontagem
    // do componente.
    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            };
        
            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick, {capture: true});

        return () => {
            console.log('função de limpeza')
            document.body.removeEventListener('click', onBodyClick, {capture: true});
        };

    }, []);

    // PROBLEMA: os event handlers do react, como o onClick, só te deixam ouvir os eventos
    // DENTRO dos elementos que estão dentro da <div> implementada. Para detectarmos um clique
    // fora do dropdown.

    // EVENT-BUBBLING: quando o browser detecta o clique, ele envia um evento para o react,
    // que podemos obter na função onClick. esse evento passa para cada um dos pais na árvore
    // do DOM e, caso ela tenha um onClick, este também será chamado automaticamente.

    // OBS: no event-bubbling, os eventos adicionados através de addEventListener são sempre
    // chamados ANTES dos nossos eventos de react. então, os eventos do react são chamados
    // na ordem crescente de filhos -> parentes.

    // SOLUÇÃO: se o usuario clicar em um dos elementos de DENTRO do dropdown, nos NÃO queremos
    // que o event listener do body faça algo. mas se ele clicar em um elemento de FORA, queremos
    // que o event listener execute normalmente. iremos inserir um código DENTRO do eventListener
    // para definir se iremos ou não fechar o dropdown, baseado no elemento que foi clicado.

    // utilizaremos o USEREF: USEREF nos permite dar uma referência direta para algum elemento da DOM,
    // que, no caso, seria a div com a className ui form. podemos então utilizar o contains() para
    // verificar se o elemento que foi clicado está contido no ref atual.

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{text}</label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selectedValue.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''} `}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;