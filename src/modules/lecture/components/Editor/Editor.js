import React from "react";

export function Editor() {
    return (
        <div>
            <iframe src="http://localhost:8080/?startCircuit=null" style={{width:500, height:500, border:0}}/>
        </div>
    );
}
