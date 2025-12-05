print("hello world")

a = 5
b = 10
c = a + b
print("Sum:", c)
def greet(name):
    return f"Hello, {name}!"
print(greet("Alice"))

for i in range(3):
    print("Iteration:", i)
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

print("Factorial of 5:", factorial(5))
class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        return f"{self.name} says Woof!"
my_dog = Dog("Buddy")
print(my_dog.bark())


teller=0
for i in range(3,8):
    teller=teller+i
    print(teller)




for i in range(0,100, 2):
        if i % 2 == 1:
            print(i)

a=3
while(a<10):
    print(a)
    a=a+3

def f(x):
    return x**2

x=1

while f(x)<=400:
    print(f(x))
    x=x+1

for a in range(1,6):
    for b in range(1,6):
        print(a*b, end="\t")
    print()
