/****************
 * If a promise is resolved & a catch is chained then it will be ignored.
 ****************/
Promise.resolve(100)
    .catch(err => {
        console.log(err);
    }).then(data => {
        console.log(data);
    })

/****************
 * If a promise is rejected & a then is chained then it will be ignored.
 ****************/
Promise.reject("Rejected value")
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })

/************* 
 * UseCase: 
 * All the then will be ignored once a promise is rejected.
 * */
fetch(req)
    .then(res1 => res1)
    .then(res2 => res2)
    .catch(err => {
        console.log(err);
    })