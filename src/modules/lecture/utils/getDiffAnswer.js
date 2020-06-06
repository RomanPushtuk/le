export function getDiff(variants, answer, correctAnswer) {
    const set2 = new Set([...correctAnswer]);
    const intersection = new Set([...answer].filter((x) => set2.has(x)));

    return intersection.map();

    answer.sort();
    correctAnswer.sort();
}
