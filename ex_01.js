function promiseMe(promise) {
    return new Promise((resolve) => {
        resolve(`I promise you to ${promise}`);
    });
}
