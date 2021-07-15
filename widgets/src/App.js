import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const itens = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS Library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]

const options = [
    {
        label: 'Red',
        value: 'red'
    },
    {
        label: 'Green',
        value: 'green'
    },
    {
        label: 'Blue',
        value: 'blue'
    },
]

const App = () => {
    const [selectedColor, setSelectedColor] = useState(options[0]);
    return (
        <div>
            <Dropdown 
                options={options} 
                selectedValue={selectedColor}
                setSelectedValue={setSelectedColor}
            />
        </div>
    );
};

export default App;