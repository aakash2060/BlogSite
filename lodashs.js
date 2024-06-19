const _ = require('lodash');

// lodash used to give a random number in the console
    const num = _.random(0, 20);
    console.log(num)

    const num2 = _.once(()=> {
        console.log('hello');
    });

    num2();
    num2();
    // even if the function  was called two times, it plays it just once

