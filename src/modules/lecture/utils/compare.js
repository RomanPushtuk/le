export function compare(answer, correctAnswer) {
    const mapCorrectAnswers = {};

    correctAnswer.forEach((answer) => {
        mapCorrectAnswers[answer] = answer;
    });

    for (const value of answer) {
        if (mapCorrectAnswers[value] !== value) return false;
    }

    return true;
}
