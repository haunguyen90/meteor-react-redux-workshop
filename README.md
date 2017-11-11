## Get started:
 - `yarn install`: Install all dependencies
 - `yarn dev`: Start the project for development
 - Updated continuously

## Project structure & architecture:
 **Dependencies:**

  - [x] Meteor
  - [x] React
  - [x] Redux
  - [x] Styled-components v2
  - [x] React-router v4
  - [x] Redux Saga

**Files & Folders structure:**

```markdown
  ROOT
   |
   |-client                     * contains main js file and head html
   |  |-main.js                 * Client entry point, imports all client code
   |  |-main.html               * Default html file
   |
   |-imports
   |  |-api                     * Contains methods and publications for each modules
   |  |
   |  |-startup                 * Import modules used by client, server or both through a single index entry point
   |  |                         * Where we import the methods, publications from `api`
   |  |
   |  |-ui                      * React components, container, redux here
   |  |  |-components           * Hi-order/Global components such as MainLayout, Button, Input,...
   |  |  |  |                   * Each component should have its own folder
   |  |  |  |-index.js          * Should export all components here for further using
   |  |  |-containers           * Hi-order/Global container which wrap for global components above
   |  |  |  |                   * Each container should have its own folder
   |  |  |  |-index.js          * Should export all containers here for further using
   |  |  |
   |  |  |-reducers             * Root reducers
   |  |  |-sagas                * Root saga
   |  |  |-stylesheets          * Global styles
   |  |  |
   |-server                     * Where we import the entry points, code for server side from imports folder
   |  |-main.js                 * Import here.
```