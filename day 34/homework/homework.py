def simple_calculator(num1, num2, operation):
    if operation == 'addition':
        return num1 + num2
    elif operation == 'subtraction':
        return num1 - num2
    elif operation == 'multiplication':
        return num1 * num2
    elif operation == 'division':
        if num2 == 0:
            return "Error: Cannot divide by zero"
        else:
            return num1 / num2
    else:
        return "Error: Invalid operation"


print(simple_calculator(10, 5, 'addition'))      
print(simple_calculator(10, 5, 'subtraction'))    
print(simple_calculator(10, 5, 'multiplication')) 
print(simple_calculator(10, 5, 'division'))     
print(simple_calculator(10, 0, 'division'))       
print(simple_calculator(10, 5, 'modulus')) 