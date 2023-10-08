Hello, it is Mehdi,

This is a simple Next.js app built with TypeScript For "DIOR Secret Collection"

## Live demo

https://main.ds8lkanha4tdu.amplifyapp.com/

## Test Users

| Email         | Password |
| ------------- | -------- |
| eva@mail.com  | 23dd56TY |
| lola@mail.com | 09Zs76YU |
| ben@mail.com  | 23Z30ssd |

## Link test/design by DIOR

Test link : https://www.figma.com/file/rw5ynf0ydAAJkcSErcJSt0/Dior-Technical-Test?type=design&node-id=0-1&mode=design&t=wq6Sy5mMhlhN816C-0

## Prerequisites

You need to have docker and docker-compose installed on your machine.

## Installation

```zsh
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build
```

## Dev

```zsh
docker-compose up
```

<!-- ℹ️ what was done but not existant in the maquette  -->

- some styles adapted or interpreted because they were in absolute values
- error messages, loading states and messages, 'cart is empty' message etc.
- page titles

<!--👉  Possible improvements  -->

I gave this test some parts of the weekend, can't give more in the week I am still in a current mission.

- unit tests ?
- make the carousel in a way to accept any number of articles, now I made a sort of POC that accepts only 3 articles due to lack of time, but the solution can be generalized

<!-- -------------------------- -->
