# REA clone

## Tech-stack decisions

- Javascript, React, Node.js, GraphQL based on current team skills. Typescript would play nicely when it comes to GraphQL schema generation, but that's another story.

- React web app

  - standard CRA project. Would be nice to use Next.js in production, but server-side-rendering are not current concerns.
  - Prefer functional component over class component.
  - React Context will be used to manage state, with local storage as the client-side data persistence mechanism.
  - React Hooks will be used to execute GraphQL queries.
  - Practise container/smart component vs presentational/dumb component design pattern.
  - Use cypress.io for e2e testing

- Node.js back-end

  - standard express.js project, with Apollo express server configuration.
  - Would be nice to use type-graphql to define resolvers, queries, and mutations conveniently. Need to research the equivalent solution in plain Javascript.
  - The search GraphQL query should be agnostic to the underlying data system (database, cache, external web service, mock JSON file), therefore, a layer of abstraction is necessary to modularise searching functions.

## TODO

- CRA
- Node.js
- finalise README.md

## get started

```bash
// TODO
```

## testing

```bash
// TODO
```
