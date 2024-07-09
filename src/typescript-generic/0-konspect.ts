// let arr: Array<string | number> = [];
// arr = ['str', 0, 25, true]; //error true
// export{};

const promise: Promise<string> = new Promise((resolve) => {
    setInterval(() => {
        resolve('Done!');
    }, 1000);
});

promise.then((data) => {
    console.log(data);
});

export {};