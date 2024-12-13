# Sentisis Challenge

### Tech stack

- **React + Typescript**: mandatory for the project
- **Vite and create-vite-app**: for creating the webapp
- **Tankstack Query** for data fetching: since we hit a Rest API, setting up Tankstack query felt more comfortable than setting up Apollo Rest API adapters
- **Tailwind, Shadcn/UI and Tankstack Table** for styling: Tailwind and Shadcn for generic css styling and already configured UI elements such as Button, Dialog and Input. Tankstack Table was mainly used because I was curious about this teck for a long time and decided to give it a try for this test case. After doing it, probably seems a little overkill, and using the Table element from Shadcn would have given the same results.
- **Vitest and Cypress** for unit and e2e testing

### How to run

1. Fork this repository
2. cd into your local repo and run `npm install`
3. Run `npm run dev`, the app should run in `http://localhost:5173/`

### How to test
**For unit testing**: `npm run test`

**For e2e testing**:
 1. first run the app locally with `npm run dev`
 2. on another terminal, run `npx cypress open` or `npx cypress run`