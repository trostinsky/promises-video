const WRING_OUT_TIME = 500;
const SQUATTING_TIME = 200;
function wringOut(count){
    return new Promise((resolve, reject) => {
        if(count > 15){
            reject();
        };
        setTimeout(() => {
            resolve();
        }, count * WRING_OUT_TIME);
    });
}
function squatting(count){
    return new Promise((resolve, reject) => {
        if(count > 20){
            reject();
        };
        setTimeout(() => {
            resolve();
        }, count * SQUATTING_TIME);
    });
}