function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
  
      if (arr[middle] === target) {
        return middle; // Нашли элемент, возвращаем его индекс
      } else if (arr[middle] < target) {
        left = middle + 1; // Искомый элемент справа от середины
      } else {
        right = middle - 1; // Искомый элемент слева от середины
      }
    }
  
    return -1; // Элемент не найден
  }
  
  // Пример использования
  const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
  const targetElement = 9;
  const result = binarySearch(sortedArray, targetElement);
  
  if (result !== -1) {
    console.log(`Элемент ${targetElement} найден по индексу ${result}`);
  } else {
    console.log(`Элемент ${targetElement} не найден в массиве`);
  }
  