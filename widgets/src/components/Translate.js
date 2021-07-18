import React, { useState } from 'react';
import languages from '../dropdownOptions/languages';
import Convert from './Convert';
import Dropdown from './Dropdown';

const Translate = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    const [text , setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
                    <input value={text} onChange={e => setText(e.target.value)} />
                </div>
            </div>

            <Dropdown 
                options={languages} 
                selectedValue={selectedLanguage} 
                setSelectedValue={setSelectedLanguage}
                text={'Select a language'} 
            />

            <Convert 
                language={selectedLanguage}
                text={text}
            />
        </div>
    );
}

export default Translate;