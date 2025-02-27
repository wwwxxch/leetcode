# 69
def mySqrt(x: int) -> int:
    if x == 0 or x == 1:
        return x

    for i in range(1, x // 2 + 1):
        if i * i == x:
            return i
        elif i * i < x and (i + 1) * (i + 1) > x:
            return i


print(mySqrt(8))
print(mySqrt(9))
