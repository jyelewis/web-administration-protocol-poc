## Web administration protocol proof of concept


### The problem
For years I've complained about the state of web administration panels.
Once upon a time frameworks came bundled with web-admins (Rails-admin, Django-admin, Wordpress-admin, etc)

Now everything has to be built by hand, which leads to 1 of 3 unideal states
1. No admin panel is built, only engineers can access data either via APIs (Postman, insomnia, swagger UI) or direct database access (SQL clients, Dynamo explorer)
2. A scrappy little admin page is built into the projects frontend, custom APIs are added to perform admin actions - it's clunky, but works
3. An admin frontend project is built either from scratch, or using something like react-admin. Weeks if not months of development time is spent building and maintaining this system

### Proposed solution
We create an administration protocol, allowing any web service to be managed over the network

We create a client that consumes this protocol and provides an out of the box admin UI (anyone can create clients that speak the protocol)

We create a collection of backend plugins to server this admin protocol for different frameworks/databases etc (anyone can create servers that speak the protocol)

This repo is a very initial attempt at designing this protocol

