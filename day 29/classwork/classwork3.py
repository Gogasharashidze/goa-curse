weight =(float(input))
height =(float(input()))
bmi=weight/(height)**2
if bmi<18.5:
    print("underweight")
elif bmi>=18.5 and bmi<25:
    print("normal")
elif bmi>25 and bmi<30:
    print("overweight")
else:
    print("obese")