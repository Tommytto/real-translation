export default function shuffleArray(array) {
    let counter = array.length;
    const newArr = [...array];
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        const index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter -= 1;
        // And swap the last element with it
        const temp = newArr[counter];

        newArr[counter] = newArr[index];
        newArr[index] = temp;
    }

    return newArr;
}
