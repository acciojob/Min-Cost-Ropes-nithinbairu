function mincost(arr)
{ 
//write your code here
// return the min cost
	
  arr.sort((a,b)=>a-b);
	let sum=0;
	let total=0
	// let sum=arr[0]+arr[1];
	for(i=0;i<arr.length;i++){
		sum+=arr[i];
		if(i>0) total+=sum;
	}
	return total;
}

module.exports=mincost;
