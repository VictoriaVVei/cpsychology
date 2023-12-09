import { useEffect, useState } from 'react';
import { Navigation } from '../components/Navigation.js';
import { Navigation2 } from '../components/Navigation2.js';

export function Q2_3() {
    const [language, setLanguage] = useState('Chinese');
    const handleLanguageChange = (language) => {
        setLanguage(language);
    };

    const [htmlContent, setHtmlContent] = useState('');
    useEffect(() => {
        async function fetchData() {
            const urlParams = new URLSearchParams(window.location.search);
            const session_id = urlParams.get('session_id');
            const finalCartItem = urlParams.get('buy');
            try {
                const response = await fetch('/Q2_3', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ content: language, session_id: session_id, cartItem: finalCartItem }),
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