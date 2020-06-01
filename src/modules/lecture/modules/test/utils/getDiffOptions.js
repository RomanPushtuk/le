import React from 'react';
import { path } from "ramda";

export function getDiffOptions(testOptions, userOptions) {
    console.log(testOptions, userOptions);
    let count = 0;

    testOptions.forEach((testOption, index) => {
        const userOption = userOptions[index];

        const que = String(testOption.correct);
        const ans = String(path(['correct'], userOption));

        if (que === 'true' && ans === 'true') {
            count++;
        }
    });

    return count;
}
