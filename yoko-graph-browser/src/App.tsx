import React from 'react';
import './styles/graphZero.css';
import GoogleSearchBar from './components/GoogleSearchBar';
import GraphZeroDesign from './components/GraphZeroDesign';
import useOrientation from './hooks/useOrientation';

const App: React.FC = () => {
    const isLandscape = useOrientation();

    return (
        <div className={`app-container ${isLandscape ? 'landscape' : 'portrait'}`}>
            <h1>横画面専用ブラウザ</h1>
            <GoogleSearchBar />
            <GraphZeroDesign />
        </div>
    );
};

export default App;