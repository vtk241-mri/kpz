<<<<<<< HEAD
# Діаграма Абстрактна фабрика

```mermaid
classDiagram
    direction TB

    class Laptop {
        +string brand
    }

    class Smartphone {
        +string brand
    }

    class DeviceFactory {
        +createLaptop()
        +createSmartphone()
    }

    class IProneFactory {
        +createLaptop()
        +createSmartphone()
    }

    class KiaomiFactory {
        +createLaptop()
        +createSmartphone()
    }

    class BalaxyFactory {
        +createLaptop()
        +createSmartphone()
    }

    DeviceFactory <|-- IProneFactory
    DeviceFactory <|-- KiaomiFactory
    DeviceFactory <|-- BalaxyFactory

    IProneFactory ..> Laptop : creates
    IProneFactory ..> Smartphone : creates
    KiaomiFactory ..> Laptop : creates
    KiaomiFactory ..> Smartphone : creates
    BalaxyFactory ..> Laptop : creates
    BalaxyFactory ..> Smartphone : creates
```
=======
# Діаграма Абстрактна фабрика

```mermaid
classDiagram
    direction TB

    class Laptop {
        +string brand
    }

    class Smartphone {
        +string brand
    }

    class DeviceFactory {
        +createLaptop()
        +createSmartphone()
    }

    class IProneFactory {
        +createLaptop()
        +createSmartphone()
    }

    class KiaomiFactory {
        +createLaptop()
        +createSmartphone()
    }

    class BalaxyFactory {
        +createLaptop()
        +createSmartphone()
    }

    DeviceFactory <|-- IProneFactory
    DeviceFactory <|-- KiaomiFactory
    DeviceFactory <|-- BalaxyFactory

    IProneFactory ..> Laptop : creates
    IProneFactory ..> Smartphone : creates
    KiaomiFactory ..> Laptop : creates
    KiaomiFactory ..> Smartphone : creates
    BalaxyFactory ..> Laptop : creates
    BalaxyFactory ..> Smartphone : creates
```
>>>>>>> e41b6d9577a8c4db68d123b822620929baf263b7
