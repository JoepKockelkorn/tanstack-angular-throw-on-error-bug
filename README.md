# TanstackAngularThrowOnErrorBug

How to reproduce:

- Install correct node version using `.nvmrc`
- Run `npm install`
- Run `npx ng serve --open`
- Don't see an alert
- Navigate to a different tab in the browser and come back
- See an alert
