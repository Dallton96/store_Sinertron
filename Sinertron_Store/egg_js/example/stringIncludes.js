function stringIncludes(cad1, cad2) {
  if (cad2.includes(cad1) == true) {
    return true;
  } else {
    return false;
  }
}

console.log(stringIncludes("he", "Hello"));
console.log(stringIncludes("he", "hello word"));
