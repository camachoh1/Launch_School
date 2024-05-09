function alphanumeric(string){
  return /^[a-z0-9]+$/i.test(string)
}

console.log(alphanumeric("Mazinkaiser")); //true)
console.log(alphanumeric("hello world_")); //false)
console.log(alphanumeric("PassW0rd")); //true)
console.log(alphanumeric("     ")); //false)
console.log(alphanumeric("8qxwUONgl!Ate Zx9h cUDd6")); //false)