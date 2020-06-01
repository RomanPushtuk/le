export function getCorrectOptions(testOptions) {
    let count = 0;

    testOptions.forEach((testOption) => {
        if (testOption.correct) {
            count++;
        }
    });

    return count;
}
