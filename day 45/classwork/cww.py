""""
თქვენ მუშაობთ ძებნის სისტემაზე. დაფიქრდით, Google!
მიცემული კოდი იღებს ტექსტსა და სიტყვას, და გადაცემს მათ ფუნქციას სახელწოდებით <b>search()</b>.
search() ფუნქცია უნდა დაბრუნოს "სიტყვა მოიძებნა", თუ სიტყვა არის ტექსტში, ან "სიტყვა ვერ მოიძებნა", თუ ის არ არის.
მაგალითი შესავალი
"This is awesome"
"awesome"
მაგალითი გამოსავალი
სიტყვა მოიძებნა
"""

def search(text, word):

    if word in text:
        return "Word found"
    else:
        return "Word not found"


text_input = "This is awesome"
word_input = "awesome"

result = search(text_input, word_input)
print(result) 

"""
შექმენი ფუნქცია, რომელიც მიიღებს ტექსტს და გამოითვლის, რამდენი სიტყვაა ამ ტექსტში.
"""
def count_words(text):
    words = text.split()  
    return len(words)     

text = "sityvebis gamoTvla"
print(count_words(text))  