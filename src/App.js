import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const baseUrl = `http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b75da00e12d54774a2d362adddcc9bef`
    const [data, setData] = useState({ docs: [] });
    const [searchQuery, setSearchQuery] = useState('');
    const [url, updateUrl] = useState(baseUrl);
    

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `${url}`,
            );
            setData(result.data.response);
        };
        fetchData();
    }, [url]);

    return (
        <>
            <h1>News</h1>
            <input
                type="text"
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
            />
            <button 
                onClick={()=>{updateUrl(`${baseUrl}&q=${searchQuery}`)}}
            >Search</button>
            <ul>
                {data.docs.map(item => (
                    <li key={item.objectID}>
                        <p>{item.source}</p>
                        <a href={item.web_url}>{item.headline.main}</a>
                        <p>{item.lead_paragraph}</p>
                    </li>
                ))}</ul>
        </>
    );
}

export default App