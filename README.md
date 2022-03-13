# SunCode | 2022

# Technical side

## Tech stack

- Backend
    - Java 11 - core backend
    - Spring - core backend framework
    - Lombok - boiler-plate reducing annotation framework
    - Mapstruct - automapper to reduce mapping overhead
    - Hibernate - ORM for easy(but not simple) data access
    - Flyweight - migration tool
- Database
  - Postgresql
- Frontend
  - TypeScript (and JavaScript) - primary SPA implementation
  - React - SPA library
  - Redux - state management
  - Redux-toolkit - async interactions, effect management

## License

Licensed under the [MIT](LICENSE.txt) license.

## Miscellaneous

Project does not use git flow

# Run

In root folder:

```
cd backend
mvn clean install
cd ..
docker-compose up -d --build
```