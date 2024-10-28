/*********************
 * CallBack Hell -> 
 * 1.Nesting of cb -> pyramid of doom 
 * 2. Inversion of control ->  The async function has access to my cbs and it can call
 * it any no of times -> Trust issues ***********************/

fs.readFile('f1.txt', (err, file1) => {

    if (err)
        console.log(err);

    else {

        fs.readFile('f2.txt', (err, file2) => {

            if (err)
                console.log(err);

            else {

                fs.readFile('f3.txt', (err, file3) => {

                    if (err)
                        console.log(err);

                    else {
                        console.log(file1 + "\n" + file2 + "\n" + file3);

                    }
                })
            }
        })
    }
})