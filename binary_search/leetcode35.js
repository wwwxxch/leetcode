const searchInsert = function (nums, target) {
	let left = 0;
	let right = nums.length - 1;
	while (left <= right) {
		let mid = left + Math.floor((right - left) / 2);
		console.log("----");
		console.log("left: ", left, "; nums[left]: ", nums[left]);
		console.log("right: ", right, "; nums[right]: ", nums[right]);
		console.log("mid: ", mid, "; nums[mid]: ", nums[mid]);

		if (nums[mid] < target) {
			left++;
		} else if (nums[mid] > target) {
			right--;
		} else {
			return mid;
		}
	}
	return left;
};

// console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
// console.log(searchInsert([1, 3, 5, 6], 7));
