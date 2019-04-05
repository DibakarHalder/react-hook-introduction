import React from 'react';
import { render } from 'react-dom';

const rootElement = document.getElementById('app');
function App() {
    return (
        <>
            <h1>News</h1>
        </>
    );
}

render(<App />, rootElement);

if (module.hot) {
    module.hot.accept();
}