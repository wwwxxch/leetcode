# 33
def search(nums, target: int) -> int:
    left = 0
    right = len(nums) - 1

    while left <= right:
        if nums[left] == target:
            return left
        elif nums[right] == target:
            return right
        else:
            left += 1
            right -= 1

    return -1


print(search(nums=[4, 5, 6, 7, 0, 1, 2], target=0))
print(search(nums=[4, 5, 6, 7, 0, 1, 2], target=3))
