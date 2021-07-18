import React, { useState } from 'react';
import Route from './components/Route';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Header from './components/Header';
import Link from './components/Link';

import topics from './dropdownOptions/topics';
import colors from './dropdownOptions/colors';

const App = () => {
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    // o problema dessa abordagem para routes é que quando mudamos de rota
    // recarregamos todo index.html, recarregando o html, css e js. o ideal seria
    // que não fizessemos um reload completo da página.

    // o ideal é que, quando se clique na navegação, mudemos a url mas
    // não se faça o reload completo da página.

    // sendo assim, cada rota deve detectar que a url mudou e manter
    // o estado da rota com useState, então, cada rota renderiza
    // mostrando e escondendo os componentes apropriados.

    // faremos isso com um navigation event no app, passando para os componentes
    // filhos e decidindo se iremos ou não renderizar aquele componente a partir
    // desse evento
    
    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion itens={topics} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                    text="Select a color" 
                    options={colors} 
                    selectedValue={selectedColor}
                    setSelectedValue={setSelectedColor}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};

export default App;