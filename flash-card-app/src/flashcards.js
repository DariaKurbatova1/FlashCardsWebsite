export const flashcards = [
    {
      "question": "What is Object-Oriented Programming (OOP)?",
      "answer": "OOP is a programming paradigm based on objects and classes that encapsulate data and behavior."
    },
    {
      "question": "What are the four main principles of OOP?",
      "answer": "Encapsulation, Abstraction, Inheritance, and Polymorphism."
    },
    {
      "question": "What is Encapsulation?",
      "answer": "Encapsulation is the bundling of data and methods that operate on the data into a single unit (class) and restricting direct access to some components."
    },
    {
      "question": "Give an example of Encapsulation in Python.",
      "answer": "class Car:\n    def __init__(self, brand):\n        self.__brand = brand  # Private attribute\n\n    def get_brand(self):\n        return self.__brand\n\ncar = Car('Toyota')\nprint(car.get_brand())"
    },
    {
      "question": "What is Abstraction?",
      "answer": "Abstraction is the concept of hiding complex implementation details and exposing only the necessary parts of an object."
    },
    {
      "question": "What is an example of Abstraction in Python?",
      "answer": "from abc import ABC, abstractmethod\n\nclass Animal(ABC):\n    @abstractmethod\n    def make_sound(self):\n        pass\n\nclass Dog(Animal):\n    def make_sound(self):\n        return 'Bark'\n\nd = Dog()\nprint(d.make_sound())"
    },
    {
      "question": "What is Inheritance?",
      "answer": "Inheritance is a mechanism in which one class acquires the properties and behaviors of another class."
    },
    {
      "question": "Provide an example of Inheritance in Python.",
      "answer": "class Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def speak(self):\n        return '...'\n\nclass Dog(Animal):\n    def speak(self):\n        return 'Woof!'\n\ndog = Dog('Buddy')\nprint(dog.speak())"
    },
    {
      "question": "What is Polymorphism?",
      "answer": "Polymorphism allows objects of different classes to be treated as objects of a common superclass, enabling method overriding and method overloading."
    },
    {
      "question": "Give an example of Polymorphism.",
      "answer": "class Bird:\n    def sound(self):\n        return 'Chirp'\n\nclass Cat:\n    def sound(self):\n        return 'Meow'\n\ndef make_sound(animal):\n    return animal.sound()\n\nb = Bird()\nc = Cat()\nprint(make_sound(b))  # Chirp\nprint(make_sound(c))  # Meow"
    },
    {
      "question": "What is a Class in Python?",
      "answer": "A class is a blueprint for creating objects, defining attributes and methods that describe the behavior of the object."
    },
    {
      "question": "What is an Object in Python?",
      "answer": "An object is an instance of a class that contains real values for the attributes defined in the class."
    },
    {
      "question": "What is Method Overriding?",
      "answer": "Method overriding occurs when a subclass provides a specific implementation for a method that is already defined in its superclass."
    },
    {
      "question": "What is Method Overloading?",
      "answer": "Method overloading allows multiple methods in the same class to have the same name but different parameters (not natively supported in Python)."
    },
    {
      "question": "What is a Constructor in Python?",
      "answer": "A constructor is a special method (__init__) that is automatically called when an object is created."
    },
    {
      "question": "What is a Destructor in Python?",
      "answer": "A destructor is a special method (__del__) that is called when an object is deleted."
    },
    {
      "question": "What is a Static Method in Python?",
      "answer": "A static method is a method that belongs to a class but does not require an instance to be called. Defined using @staticmethod."
    },
    {
      "question": "What is a Class Method in Python?",
      "answer": "A class method is a method that operates on the class rather than instances, defined using @classmethod."
    },
    {
      "question": "What is the difference between Class Variables and Instance Variables?",
      "answer": "Class variables are shared across all instances, while instance variables are unique to each object."
    }
  ];