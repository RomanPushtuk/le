export function compare(answer, correctAnswer) {
    const mapCorrectAnswers = {};
    const mapUserAnswers = {};

    correctAnswer.forEach((answer) => {
        mapCorrectAnswers[answer] = answer;
    });

    answer.forEach((answer) => {
        mapUserAnswers[answer] = answer;
    });

    for (const answer in mapCorrectAnswers) {
        if (mapCorrectAnswers[answer] !== mapUserAnswers[answer]) return false;
    }

    return true;
}
