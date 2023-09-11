let arr = [1, 2, 3, 0,3,2];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      arr[j] = "undefined";
    }
  }
}
for (i = 0; i < arr.length; i++) {
  if (arr[i] != "undefined") {
    console.log(arr[i]);
  }
}