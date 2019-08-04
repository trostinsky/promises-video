// Example 1
console.log("Начать отжимания");
wringOut(10).then(() => {
    console.log("Отжался 10 раз");
});

// Example 2
console.log("Начать тренировку");
wringOut(10)
    .then(() => {
        console.log("Отжался 10 раз");
        return squatting(20);
    }).then(() => {
    console.log("Присел 20 раз!");
});

// Example 3
console.log("Начать сложную тренировку");
wringOut(10)
    .then(() => {
        console.log("Отжался 10 раз");
        return squatting(25);
    }).then(() => {
    console.log("Присел 20 раз!");
}).catch(() => {
    console.log("Устал... Не могу дальше!");
});

// Example 4
async function myTraining() {
    try {
        console.log("Начать сложную тренировку");
        await wringOut(10);
        console.log("Отжался 10 раз");
        await squatting(10);
        console.log("Присел 20 раз!");
        return true;
    } catch(err) {
        console.log(err.toString());
        return false;
    };
}

myTraining().then((result) => {
    console.log(result);
})