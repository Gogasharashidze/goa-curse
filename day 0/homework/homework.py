import turtle


screen = turtle.Screen()
screen.bgcolor("white")


house = turtle.Turtle()
house.speed(3)


def draw_rectangle(width, height, color):
    house.fillcolor(color)
    house.begin_fill()
    for _ in range(2):
        house.forward(width)
        house.left(90)
        house.forward(height)
        house.left(90)
    house.end_fill()

def draw_square(side_length, color):
    draw_rectangle(side_length, side_length, color)


house.penup()
house.goto(-100, -100)
house.pendown()
draw_rectangle(200, 150, "lightblue") 

house.goto(-120, 50)
house.fillcolor("brown")
house.begin_fill()
for _ in range(3): 
    house.forward(240)
    house.left(120)
house.end_fill()

house.penup()
house.goto(-30, -100)
house.pendown()
draw_rectangle(40, 70, "brown")  

# Draw the first window
house.penup()
house.goto(-80, -30)
house.pendown()
draw_square(30, "white")  # Window 1

# Draw the second window
house.penup()
house.goto(30, -30)
house.pendown()
draw_square(30, "white")  # Window 2


house.hideturtle()
turtle.done()
