// basic matching using an alpha numeric character between foward slashes / /:

// let str = 'cast';

// if (str.match(/s/)) {
//   console.log('ahi esta la s!');
// }

// let num = 903334;

// if (String(num).match(/9/)) {
//   console.log('ahi esta el 9!');
// }

// meta characthers: $ ^ * + ? . ( ) { } [ ] | \ / 

// matching a ? meta-character

// let str1 = 'hablaaa que? todo bien?';
// let str2 = 'cole!';
// let str3 = 'eche que?!';

// [str1, str2, str3].forEach(str => {
// 	if (str.match(/\?/)) {
// 			console.log('ahi esta!')
// 	} else {
//     console.log('nada cuadro!');
//   }
// });

// concatenation:

// let arr = ['cat', 'catalog', 'scatter', 'CAT', 'cast'];

// arr.forEach(word => {
//   if (word.match(/cat/)) {
//     console.log('ahi esta')
//   } else {
//     console.log('nada mi llave')
//   }
// });

// // alternation:

// let strings = ['The lazy cat.', 'The dog barks.', 'Down the rabbit hole.', 'The Yellow Dog', 'Robert the Rabit', 'Cat the Cat']

// strings.forEach(word => {
//   if (word.match(/(cat|dog|rabbit)/)) {
//     console.log('ahi esta')
//   } else {
//     console.log('nada mi llave')
//   }
// });

// let str1 = 'hola';
// let str2 = 'Hola';
// let str3 = 'HOLA';

// // [str1, str2, str3].forEach(str => {
// // 	if (str.match(/hola/)) {
// // 		console.log('ahi esta');
// // 	}
// // });

// [str1, str2, str3].forEach(str => {
// 	if (str.match(/hola/i)) {
// 		console.log('ahi esta');
// 	}
// });

if ('Four score'.match(/\s/)) {
  console.log('matched 1');
}
if ("Four\tscore".match(/\s/)) {
  console.log('matched 2');
}
if ("Four-score\n".match(/\s/)) {
  console.log('matched 3');
}
if ("Four-score".match(/\s/)) {
  console.log('matched 4');
}