// ---------promises


let pr = new Promise((resolve, reject) => { //assign a new promise object to pr
    setTimeout(() => {
        console.log('Me first')
        resolve(1)
        // reject(1)
    }, 2000)
})
console.log('Me second')

pr.then(() => { console.log('Me second') }).catch(() => { console.log('promise rejected') }).finally(() => { console.log('runs in both cases') })

let pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('cook the pizza')
        // resolve('Here is your pizza')
        reject('No pizza')
    }, 2000)
})

console.log('Order the pizza')
pr.catch((data) => {
    console.log(data)
    console.log('no pizza, Im sad')
})

function printNum(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 == 0) {
            resolve("Condition satisfied, number even")
        }
        else {
            reject("number not even, reject")
        }
    })
}
printNum(24).then((result) => { console.log(result) }).catch((result) => { console.log(result) })
printNum(27).then((result) => { console.log(result) }).catch((result) => { console.log(result) })


let prA = new Promise((res, rej) => {
    setTimeout(() => {
        res('A')
    }, 1000)
})

let prB = new Promise((res, rej) => {
    setTimeout(() => {
        res('B')
    }, 2000)
})

prA.then((result) => { console.log(result) })
prB.then((result) => { console.log(result) })


function callPromise(alphabet) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(alphabet)
        }, 1000)
    })
}

callPromise("A").then((res) => {
    console.log(res)
    callPromise("B").then((res) => {
        console.log(res)
        callPromise("C").then((res) => {
            console.log(res)
        })
    })
})

-----------promise chaining
function callPromise(alphabet) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(alphabet)
            resolve('promise done')
        }, 1000)
    })
}
callPromise("A").then(() => callPromise("B"))
    .then(() => callPromise("C"))
    .then(() => callPromise("D"))
