# Head First Design Patterns Notes

## Object Oriented (OO) Basics

- Abstraction
- Encapsulation
- Polymorphism
- Inheritance

## OO Principles

- Encapsulate what varies
- Favor composition over inheritance
- Program to interfaces, not implementations
- Strive for loosely coupled designs between objects that interact
- Classes should be open for extension, but closed for modification
- Depend upon abstractions. Do not depend upon concrete classes

## OO Patterns

1. **Strategy** - Defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.
2. **Observer** - Defines a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically.
3. **Decorator** - Attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.
4. **Factory Method** - Defines an interface for creating an object, but lets subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.

## Introduction to Design Patterns

- Good OO designs are reusable, extensible, and maintainable.
- Patterns show you how to build systems with good OO design qualities.
- Patterns are not code. Patterns give you general solutions to design problems. You apply patterns to your application.
- Most patterns and principles address issues of _change_ in software.
- Most patterns allow some part of a system to vary independently of all other parts.
- Take what varies in a system and encapsulate it.
- Patterns provide a shared language that can improve communication between developers.

## Observer Pattern Summary

- The Observer Pattern defines a one-to-many relationship between objects
- Subjects update Observers using a common interface
- Observers are loosely coupled in that the Observable knows nothing about them, other than that they implement the Observer interface
- You can push or pull data, with preference for pull
- Don't depend on a specific order of notifications from Observers

## Decorator Pattern Summary

- Inheritance is a form of extension but can limit flexibility in our designs
- We should allow behavior to be extended without the need to modify existing code
- Composition and delegation can be used to add new behaviors at runtime
- Decorator is an alternative to subclassing for extending behavior
- Decorator Pattern defines a set of decorator classes that are used to wrap concrete components
- Decorator classes mirror the type of components they decorate (same type)
- Decorators change the behavior of their components by adding new functionality before or after method calls to the component
- Decorators can result in many small objects and overuse can increase complexity
