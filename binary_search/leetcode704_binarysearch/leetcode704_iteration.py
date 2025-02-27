# 704


def search(nums, target: int) -> int:
    left = 0
    right = len(nums) - 1

    while left <= right:
        mid = left + (right - left) // 2

        if nums[mid] < target:
            left = mid + 1
        elif target < nums[mid]:
            right = mid - 1
        else:
            return mid

    return -1
