// function myBind(func, context) {
//   return function() {
//     func.apply(context);
//   }
// }


// part 2 implementing myBind using PFA

function myBind(func, context,...partArgs) {
  return function(...args) {
    const fullArgs = partArgs.concat(args)
    return func.apply(context, fullArgs);
  }
}

