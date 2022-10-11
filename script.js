// Criação de promessa

const myPromise = new Promise((resolve, reject) => {
    const nome = 'Matheus';

    if (nome === 'Matheus') {
        resolve('Usuário Matheus encontrado!');
    } else {
        reject('Usuário Matheus nao encontrado!');
    }

});

myPromise.then((data) => {
    console.log(data);
});


// Encadeamento de then's

const myPromise2 = new Promise((resolve, reject) => {
    const nome = 'Matheus';

    if (nome === 'Matheus') {
        resolve('Usuário Matheus encontrado!');
    } else {
        reject('Usuário Matheus nao encontrado!');
    }

});

myPromise2.then((data) => {
    return data.toLowerCase();
}).then((stringModificada) => {
    console.log(stringModificada);
})

// Retorno do catch


const myPromise3 = new Promise((resolve, reject) => {
    const nome = 'Pedro';

    if (nome === 'Matheus') {
        resolve('Usuário Matheus encontrado!');
    } else {
        reject('Usuário Matheus nao encontrado!');
    }

});


myPromise3.then((data) => {
    comsole.log(data);
}).catch((err) => {
    console.log("Aconteceu algum erro! \n" + err);
})


// Resolver varias promessas com all

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1 Ok! setTimeout')
    }, 2000);
});

const p2 = new Promise((resolve, reject) => {
    resolve("p2 Ok!");
});

const p3 = new Promise((resolve, reject) => {
    resolve("p3 Ok!");
});

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log("Erro!" + err);
})

console.log("Depois do all");




// Varias promessas com race

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p4 Ok! setTimeout')
    }, 2000);
});

const p5 = new Promise((resolve, reject) => {
    resolve("p5 Ok!");
});

const p6 = new Promise((resolve, reject) => {
    resolve("p6 Ok!");
});

const resolveAllRace = Promise.race([p4, p5, p6]).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log("Erro!" + err);
})


// Fetch request na API do github
// Fetch API

const userName = "pedroohmf";

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    }
}).then((response) => {
    console.log(typeof response);
    console.log(response);
    return response.json();
}).then((data) => {
    console.log(`O nome do usuário é: ${data.name}`);
}).catch((err) => {
    console.log("Erro no catch!" + err)
});