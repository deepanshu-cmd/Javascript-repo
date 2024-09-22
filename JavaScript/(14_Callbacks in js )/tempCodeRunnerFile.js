let promise = new Promise(resolve => {
    setTimeout(function () {
        resolve("done");
    }, 3000)
})