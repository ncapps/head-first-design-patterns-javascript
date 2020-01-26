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
- Principle of Least Knowledge: talk only to your immediate friends

## OO Patterns

1. **Strategy** - Defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.
2. **Observer** - Defines a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically.
3. **Decorator** - Attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.
4. **Factory Method** - Defines an interface for creating an object, but lets subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.
5. **Abstract Factory** - Provides an interface for creating families of related or dependent objects without specifiying their concrete classes.
6. **Singleton** - Ensures a class has only one instance, and provides a global point of access to it.
7. **Command** - Encapsulates a request as an object, thereby letting you parameterize other objects with different requests, queue or log requests, and support undoable operations
8. **Adapter** - Converts the interface of a class into another interface the clients expect. Adapter lets clases work together that couldn't otherwise because of incompatible interfaces.
9. **Facade** - Provides a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use.

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

## Factory Pattern Summary

- Factories encapsulate object creation
- Factory Method relies on inheritance: object creation is delegated to subclasses, which implement the factory method to create objects
- Abstract Factory relies on object composition: object creation is implemented in methods exposed in the factory interface
- Factory patterns promote loose coupling by reducing the dependency of your application on concrete classes
- Factory Method allows a class to defer instantiation to its subclasses
- Abstract Factory creates families of related objects without having to depend on their concrete classes
- Dependency Inversion Principle guides us to avoid dependencies on concrete types and strive for abstractions

## Singleton Summary

- Singleton ensures you have at most one instane of a class in your application
- Provides a global access point to that instance
- Makes use of a private constructor and a static method combined with a static variable
- Take care when implementing a Singleton for multithreaded applications

## Command Summary

- Command pattern decouples an object making a request from the one that knows how to perform it
- A Command object enables this decoupling and encapsulates a receiver with an action
- An invoker makes a request of a Command object by calling its execute() method, which invokes those actions on the receive
- Invokers can be parameterized with Commands at runtime
- Commands can support undo by implementing an undo method that restores the object to its previous state before the execute() method was last called
- Macro commands are a simple extension of Command that allow multiple commands to be invoked
- Commands are typically "dumb" and delegate implementation to a receiver
- Command can be used to implement logging systems

## Adapter and Facade Summary

- Use an Adapter when you need to use an existing class and it's interface is not the one you need
- Use a facade when you need to simplify and unify a large interface or complex set of interfaces
- An Adapter changes an interface into one a client expects
- A facade decouples a client from a complex subsystem
- An Adapter wraps an object to change its interface, a Decorator wraps an object to add new behaviors and responsibilities, and a Facade wraps a set of objects to simplify
