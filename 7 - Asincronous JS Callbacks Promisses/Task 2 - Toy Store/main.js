// Toy Production - with Promises - resolve/reject

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
} 

function makeToys(){
    return delay(3000).then (() => {
        return new Promise((resolve, reject) => {
            if (Math.random() > 0.1){
                resolve('Good')
            }else{
                reject('Defected')
            }
        })
    })
}

function sellToys(status){
    return delay(1000).then (() => {
        return new Promise((resolve, reject) => {
            if (status === 'Good'){
                if (Math.random() > 0.3){
                    resolve('Sold')
                }else{
                    reject('Failed')
                }
            }else{
                reject('Not for sale')
            }            
        })
    })
}

function deliverToys(result){
    return delay(2000).then (() => {
        return new Promise((resolve, reject) => {
            if (result === 'Sold'){
                if (Math.random() > 0.1){
                    resolve('Delivered')
                }else{
                    reject('Undelivered')
                }
            }else{
                reject('Not for sale')
            }            
        })
    })
}

makeToys()
    .then((status) => sellToys(status))
    .then((result) => deliverToys(result))
    .then((delivered) => console.log(delivered))
    .catch((err) => console.log(err));


// Toy Production - with async/await - try/catch

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
} 

async function makeToys(){
    await delay(3000) // wait for 3 seconds
    return Math.random() > 0.1 ? 'Good' : 'Defected'; // Return the status
}

async function sellToys(status){
    await delay(1000)
    if (status === 'Good'){
        return Math.random() > 0.3 ? 'Sold' : 'Failed';
        }
    return 'Not for sale';
}

async function deliverToys(result){
    await delay(2000)
    if (result === 'Sold'){
        return Math.random() > 0.1 ? 'Delivered' : 'Undelivered';
        }
    return 'Not Applicable'
}

async function toyProduction() {
    try {
        const status = await makeToys();  // Waits for makeToys() to complete
        const result = await sellToys(status); // Uses the status
        const delivered = await deliverToys(result)
        console.log(`Production: ${status}, Sales: ${result}, Delivery: ${delivered}`);
    } catch (error) {
        console.log(error);
    }
}

toyProduction()

