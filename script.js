// lab_6.4
// Гринчук Тарас
// Лабораторна робота № 6.4
// Опрацювання одновимірних масивів ітераційним способом
// Варіант №4

function generateArray(size, min, max, array = []) {
   if (array.length === size) {
      return array;
   }
   array.push(Math.floor(Math.random() * (max - min + 1)) + min);
   return generateArray(size, min, max, array);
}

function calcSumOfOdd(array, i = 0, sum = 0) {
   if (i >= array.length) {
      return sum;
   }
   if (i % 2 !== 0) {
      sum += array[i];
   }
   return calcSumOfOdd(array, i + 1, sum);
}

function calcFirstNegative(array, i = 0) {
   if (i >= array.length) {
      return -1;
   }
   if (array[i] < 0) {
      return i;
   }
   return calcFirstNegative(array, i + 1);
}

function calcLastNegative(array, i = 0, idxOfLastNeg = -1) {
   if (i >= array.length) {
      return idxOfLastNeg;
   }
   if (array[i] < 0) {
      idxOfLastNeg = i;
   }
   return calcLastNegative(array, i + 1, idxOfLastNeg);
}

function calcSumBetweenNeg(array, firstNegativeIdx, lastNegativeIdx, i = firstNegativeIdx, sum = 0) {
   if (i > lastNegativeIdx) {
      return sum;
   }
   sum += array[i];
   return calcSumBetweenNeg(array, firstNegativeIdx, lastNegativeIdx, i + 1, sum);
}

function compressArray(array, index = 0, i = 0) {
    if (i >= array.length) {
        return fillWithZeros(array,index);
    }
    if ((Math.abs(array[i]) > 1)) {
        array[index] = array[i];
        index++;
    }
    return compressArray(array,index,i+1);
}

function fillWithZeros(array,index,i=0){
    if(index+i>=array.length){
        return array;
    }
    array[index+i]=0;
    return fillWithZeros(array,index,i+1);
}

const n = Number(prompt("n = "));
const array = generateArray(n, -5, 5);
console.log(`Початковий масив: ${array}`);
console.log(`Сума елементів з непарними індексами: ${calcSumOfOdd(array)}`);
console.log(
    `Сума елементів між від'ємними елементами: ${calcSumBetweenNeg(
        array,
        calcFirstNegative(array),
        calcLastNegative(array)
    )}`
);
console.log(`Стиснутий масив ${compressArray(array)}`);
