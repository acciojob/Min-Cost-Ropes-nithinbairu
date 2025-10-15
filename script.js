function mincost(arr) {
  let total = 0;
  arr.sort((a, b) => a - b);

  while (arr.length > 1) {
    // Take two smallest
    let sum = arr[0] + arr[1];
    total += sum;

    // Remove them
    arr.splice(0, 2);

    // Insert new rope length and sort again
    arr.push(sum);
    arr.sort((a, b) => a - b);
  }

  return total;
}
module.exports=mincost;
