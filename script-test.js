function generateArray(size, min, max) {
   const array = [];
   for (let i = 0; i < size; i++) {
      array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
   }
   return array;
}

module.exports = generateArray;
