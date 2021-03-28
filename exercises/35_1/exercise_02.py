def find_the_mean(numbers):
    sum = 0
    for number in numbers:
        sum += number
    return sum/len(numbers)


print(find_the_mean([1, 2, 3, 5, 8, 13, 21]))
