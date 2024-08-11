const searchRange = function (nums, target) {
	let left = 0;
	let right = nums.length - 1;
	while (left <= right) {
		let mid = left + Math.floor((right - left) / 2);
		if (nums[mid] >= target) {
		}
	}
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
