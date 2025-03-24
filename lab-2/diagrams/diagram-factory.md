<<<<<<< HEAD
# Діаграма Фабричний метод

```mermaid
classDiagram
    direction TB

    class Subscription {
        +int price
        +int minPeriod
        +list channels
    }

    class DomesticSubscription
    class EducationalSubscription
    class PremiumSubscription
    class SubscriptionFactory {
        +createSubscription(type)
    }
    class WebSite
    class MobileApp
    class ManagerCall

    Subscription <|-- DomesticSubscription
    Subscription <|-- EducationalSubscription
    Subscription <|-- PremiumSubscription

    SubscriptionFactory <|-- WebSite
    SubscriptionFactory <|-- MobileApp
    SubscriptionFactory <|-- ManagerCall

    WebSite ..> DomesticSubscription : creates
    WebSite ..> EducationalSubscription : creates
    WebSite ..> PremiumSubscription : creates

    MobileApp ..> WebSite : depends on
    ManagerCall ..> WebSite : depends on
```
=======
# Діаграма Фабричний метод

```mermaid
classDiagram
    direction TB

    class Subscription {
        +int price
        +int minPeriod
        +list channels
    }

    class DomesticSubscription
    class EducationalSubscription
    class PremiumSubscription
    class SubscriptionFactory {
        +createSubscription(type)
    }
    class WebSite
    class MobileApp
    class ManagerCall

    Subscription <|-- DomesticSubscription
    Subscription <|-- EducationalSubscription
    Subscription <|-- PremiumSubscription

    SubscriptionFactory <|-- WebSite
    SubscriptionFactory <|-- MobileApp
    SubscriptionFactory <|-- ManagerCall

    WebSite ..> DomesticSubscription : creates
    WebSite ..> EducationalSubscription : creates
    WebSite ..> PremiumSubscription : creates

    MobileApp ..> WebSite : depends on
    ManagerCall ..> WebSite : depends on
```
>>>>>>> e41b6d9577a8c4db68d123b822620929baf263b7
