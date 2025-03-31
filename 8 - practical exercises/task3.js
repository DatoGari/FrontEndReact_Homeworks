async function deepCopyAsync(obj) {
    return new Promise((resolve, reject) => {
        if (typeof obj !== 'object' || obj === null) {
            reject(new Error('Argument must be a non-null object'));
        } else {
            try {
                const copiedObject = JSON.parse(JSON.stringify(obj));
                resolve(copiedObject);
            } catch (error) {
                reject(new Error('Failed to deep copy object'));
            }
        }
    });
}

deepCopyAsync({ a: 1, b: { c: 2 } })
    .then(copy => console.log('Copied Object:', copy))
    .catch(error => console.error('Error:', error.message));