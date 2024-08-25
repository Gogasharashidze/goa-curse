# + , - , * , / .

print(5+2)
print(5-2)
print(5*2)
print(5/2)

#input ფუნქცია
num1 = int(input("Enter number 1: "))
num2 = int(input("Enter number 2: "))
print(num1 * num2)
print(num1 / num2)
print(num1 - num2)
print(num1 + num2)

#True და False
print(20 > 9)
print(5 < 7)
print(8 <= 5)

#while ციკლი

while i > 0:
    print(i)
    i = i - 1
    i = 0
while i < 102:
    print(i)
    i = i + 2

#for ციკლი
for i in range(0, 10):
    print(i)

for i in range(10, -1, -1):
    print(i)

for i in range(0, 100,  2):
    print(i)

#else , if, eliif.
num21 = 12
if num21 < 18:
 print("you can't go at bars") 
if num21 > 18:
 print("you can go at bars")
else:
   print("you can go at ")

money = 200
if money > 150:
    print("you can buy phone")
elif money == 150:
    print("you can buy phone ")
else:
    print("you can't buy phone")
