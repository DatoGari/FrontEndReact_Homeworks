// usage with then/catch

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

console.log("Start");

delay(2000)
    .then(() => {
        console.log("After 2 seconds");
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });

// Usage with async/await

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
} 

async function example() {
    console.log("Start");
    await delay(2000); // Waits for 2 seconds
    console.log("After 2 seconds");
}

example();