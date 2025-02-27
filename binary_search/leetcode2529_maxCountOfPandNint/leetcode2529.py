# 2529
def maximumCount(nums) -> int:
    # Find the first positive
    l1 = 0
    r1 = len(nums) - 1

    while l1 <= r1:
        mid = l1 + (r1 - l1) // 2

        if nums[mid] > 0:
            r1 = mid - 1
        else:
            l1 = mid + 1

    # Find the last negative
    l2 = 0
    r2 = len(nums) - 1

    while l2 <= r2:
        mid = l2 + (r2 - l2) // 2

        if nums[mid] < 0:
            l2 = mid + 1
        else:
            r2 = mid - 1

    posCount = len(nums) - l1
    negCount = r2 + 1

    return max(posCount, negCount)


print(maximumCount([-3, -2, -1, 0, 0, 1, 2]))
