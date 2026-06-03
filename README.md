# dakhla_backend
***Yet another backend for the dakhla corp***

## So much to do so little time:

.Get the gist of all the things to be done in the **tasks.md** file  
.Be elaborate about any changes you make no mattter how **MINUTE**, in  **Changelog.md**.

## Technologies to be/are being used used:

. **Express**: For all the routing, middleware and controller shenanigans.(Suggestions are welcomed).  

. **Prism**: ORM that handles data between server and db. (non-negotiable).  

. **Postgresql**: Good database currently hosted on supabase(changes will be due inevitably).


## Precautionary Measures:

. Please refrain from editing multiple files at once.  

. Please only work on one thing at a time so as to not overcomplicate things.

. Look up docs and quick start guides of things you are going to be working on.


## AI Workflow:
Since we are all going to be using ai for development, it is important to create a workflow that ensures that the the main codebase does not get polluted, so the workflow across the different branches is going to be like this:

ai-develop --> develop --> main

all llm generated must be pushed to changed to ai-develop from there on the code will be tested and will be then be pushed to develop where some other changes will be made to the code and then finally the code will be merged with main.


## Prerequisites:

. As node_modules are not included in source so you will have to set up them yourself.

For now install only these:

```
npm install typescript tsx @types/node --save-dev
npx tsc --init

npm install prisma @types/pg --save-dev
npm install @prisma/client @prisma/adapter-pg pg dotenv
```

This is going to be changed a lot though.






