# 33
def search(nums, target: int) -> int:
    left = 0
    right = len(nums) - 1

    while left <= right:
        mid = left + (right - left) // 2
        if nums[mid] == target:
            return mid

        if nums[left] <= nums[mid]:
            # left to mid is sorted
            if nums[left] <= target and target <= nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        elif nums[mid] <= nums[right]:
            # mid to right is sorted
            if nums[mid] <= target and target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1

    return -1


print(search(nums=[4, 5, 6, 7, 0, 1, 2], target=0))
print(search(nums=[4, 5, 6, 7, 0, 1, 2], target=3))
