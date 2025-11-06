/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    value = init
    reset_value = init
    return{
            increment: () =>{
                value ++
                return value;
            } ,
            reset: () => {
                let old = reset_value
                value = old
                return value
            },
            decrement: () =>{
                value --
                return value
            },
        }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
