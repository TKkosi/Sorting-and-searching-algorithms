function analyseSentence(sentence) {
    let vowelCount = 0;
    let wordCount = 0;
    let sentenceLength = 0;
    let i = 0;

    while (sentence[i] != ".") {
        if (sentence[i] == " ") {
            wordCount++
        }
    }
    switch (sentence[i]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
            vowelCount++
            break;
        default:
            break;
    }
    i++;
}
return { charCount, wordCount, vowelCount };

