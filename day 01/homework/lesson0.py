from turtle import*
#we want to paint a house 

#step 1:draw a square
#start of square
width(10)
color("purple")
speed(30)
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
forward(200)
#end of square

#start of door
left(90)
forward(70)
color("yellow")
left(90)
forward(120)
right(90)
forward(70)
right(90)
forward(120)
#end of doors
#start of roof
penup()
goto(200,200)
pendown()
begin_fill()
right(150)
color("red")
forward(200)
left(120)
forward(200)
end_fill()








exitonclick()
