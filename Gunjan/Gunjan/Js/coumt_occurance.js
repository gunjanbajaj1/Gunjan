function searchCount(arr, num) {
  let count = 0;
  if (num == "" || typeof (num) != "number" || Array.isArray(arr) == false) {
    return "Enter Valid Input";
  } else {
    for (let i = 0; i <= arr.length; i++) {
      if (num == arr[i]) {
        count += 1;
      }
    }
    if (count != 0) {
      return count;
    } else {
      return -1;
    }
  }
}
console.log(searchCount([1,2,1,2,3,4,5,5,5,6], 1));
