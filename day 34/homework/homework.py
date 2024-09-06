def simple_calculator(num1, num2, operation):
    if operation == 'addition':
        return num1 + num2
    elif operation == 'subtraction':
        return num1 - num2
    elif operation == 'multiplication':
        return num1 * num2
    elif operation == 'division':
        if num2 != 0: 
            return num1 / num2
 

result = simple_calculator(10, 5, 'addition')
print(result) 