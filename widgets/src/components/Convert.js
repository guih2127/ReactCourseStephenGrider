import React, { useEffect, useState } from 'react';
import axios from 'axios';

const googleTranslateUrl = 'https://translation.googleapis.com/language/translate/v2';

const Convert = ({ language, text }) => {
    const [translatedText, setTranslatedText] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);

        // função de limpeza que reseta o timeOut
        return () => {
            clearTimeout(timerId);
        };
    }, [text]);

    useEffect(() => {
        const getTranslatedText = async () => {
            const {data} = await axios.post(googleTranslateUrl, {}, {params: {
                q: debouncedText,
                target: language.value,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            }});
    
            setTranslatedText(data.data.translations[0].translatedText);
        }
        
        getTranslatedText();

    }, [debouncedText, language]);

    return (
        <h3>
            Converted text: {translatedText}
        </h3>
    );
};

export default Convert;