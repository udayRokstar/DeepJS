function oneTime() {
    let test = 0;

    return function(...arg) {
        if(test>0) {
            console.log('Already its called this is ',arg);
            test++;

        } else {
            console.log('First Time called here', arg);
            test++;
        }
    }
}

let one = oneTime();
one(1,2,3)
one()
one()
one()
one()
one()
one()