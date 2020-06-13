import React from 'react';

import './index.scss';

export function Editor() {
    return (
        <div className="editor">
            <iframe src="http://localhost:8080/?startCircuit=null" />
        </div>
    );
}
