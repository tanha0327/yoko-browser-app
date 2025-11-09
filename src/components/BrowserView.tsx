import React, { useState } from 'react';

const BrowserView: React.FC = () => {
    const [url, setUrl] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value);
    };

    const handleNavigate = () => {
        // Navigation logic to load the URL
        window.location.href = url;
    };

    return (
        <div className="browser-view">
            <input
                type="text"
                value={url}
                onChange={handleInputChange}
                placeholder="Enter URL"
                className="url-input"
            />
            <button onClick={handleNavigate} className="navigate-button">
                Go
            </button>
            <iframe
                src={url}
                title="Browser Frame"
                className="browser-frame"
                sandbox="allow-same-origin allow-scripts"
            />
        </div>
    );
};

export default BrowserView;