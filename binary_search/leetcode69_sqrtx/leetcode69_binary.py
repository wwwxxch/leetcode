# 69
def mySqrt(x: int) -> int:
    if x == 0 or x == 1:
        return x

    left = 1
    right = x

    while left <= right:
        mid = left + (right - left) // 2

        if mid * mid == x:
            return mid
        elif mid * mid > x:
            right = mid - 1  # too big, right border move to left
        else:
            left = mid + 1  # too small, left border move to right

    return right


print(mySqrt(8))
print(mySqrt(9))
