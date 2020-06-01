export function* questionGenerator(questions, cb) {
    for (let i = 0; i < questions.length; i++) {
        cb(i + 1);
        yield questions[i];
    }
}
