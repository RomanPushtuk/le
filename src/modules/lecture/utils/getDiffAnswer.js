export function getDiff(questions, answers) {
    let attempt = {};

    Object.keys(questions).forEach(key => {
        if (questions[key] === true) {
            attempt[key] = true;
        }
    });

    let complete = 0;
    Object.keys(attempt).forEach(key => {
        if(questions[key] === answers[key] === true) {
            complete++;
        }
    });

    return [Object.keys(attempt).length, complete];
}