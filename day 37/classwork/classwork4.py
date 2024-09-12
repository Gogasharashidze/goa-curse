
temperatures = [72, 68, 75, 70, 78, 74, 71]

highest_temperature = max(temperatures)

lowest_temperature = min(temperatures)

average_temperature = sum(temperatures) / len(temperatures)

above_70 = [temp for temp in temperatures if temp > 70]

print(f"Highest Temperature: {highest_temperature}")
print(f"Lowest Temperature: {lowest_temperature}")
print(f"Average Temperature: {average_temperature}")
print(f"Temperatures Above 70: {above_70}")
