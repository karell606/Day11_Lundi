function initializeMachine(machineName, timeRequired) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${machineName} initialized`);
        }, timeRequired * 1000);
    });
}
