def odd_even_split(numbers):
    evens = []
    odds = []
    
    for num in numbers:
        if num % 2 == 0:
            evens.append(num)
        else:
            odds.append(num)
    
    return evens, odds


numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
evens, odds = odd_even_split(numbers)

print("Even numbers:", evens)
print("Odd numbers:", odds)
