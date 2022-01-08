//top level import  // like write code(static)
import { add, sub } from './index.js'
console.log(add(1, 2), sub(5, 3));

const k = 10;

// conditional import //like optional use part(dynamic)
if (k < 20) {
    import ('./index.js').then(({ add, sub }) => {
        console.log(add, sub);
    });
}

//baldau
