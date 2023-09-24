function printerError(s) {
   let valid = "abcdefghijklm";

   let arrayfied = s.split("");
   let errors = 0;

   arrayfied.forEach((char) => {
      if (!valid.includes(char)) {
         errors++;
      }
   });
   return `${errors}/${arrayfied.length + 1}`;
}

console.log(printerError("aaabbbcccddd"));
