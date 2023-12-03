import { useEffect, useState } from 'react';
import { Navigation } from '../components/Navigation.js';
import { Navigation2 } from '../components/Navigation2.js';

export function Q3_1() {
    const [language, setLanguage] = useState('Chinese');
    const handleLanguageChange = (language) => {
        setLanguage(language);
    };

    const [htmlContent, setHtmlContent] = useState('');
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/Q3_1', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ content: language }),
                });

                if (!response.ok) {
                    return;
                }

                const data = await response.json();
                setHtmlContent(data);
            } catch (error) {
            }
        }
        fetchData();
    }, [language]);

    return (
        <div id='News'>
            <Navigation onLanguageChange={handleLanguageChange} />
            <Navigation2 onLanguageChange={handleLanguageChange} />
            <div className='for_bg'></div>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div >
    );
}