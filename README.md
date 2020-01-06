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

## OO Patterns

1. **Strategy** - Defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.
2. **Observer** - Defines a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically.

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
