# Task to do:

## Database:

 ### Data:

 Currently db is hosted on supabase but that can easily be changed to connect database to the server you will need the connection string which is :

 ``` "postgresql://postgres.rupbbqutjlkvdvqnochv:Zy1bBmVNpQBiJbCu@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres" ```
 
 This has the password embedded into it, I know, op security

 To anyone wanting to add data, you just need to put the universities and programs into a json file according to the conventions of the prisma model schema and run seed.ts, but just commiting the json files 
 will be a big help too.

 For testing purposes you can try it on a local db too.

 ### Data model:

 This section concerns the actual model on which the data is being stored, it will countless improvements with time but for now anyone wanting to work on it, the program model and tags need some work,
 For the program model, The relation between the program model and the uni model should be a one-to-many relation such that each program is unique links to multiple universitys but the problem with that now
 is that multiple universites have varying aggregates but I guess to fix that we need to make a column  in both of them for this or a new table model that relates to both and can also function as average 
 merit calculator but each uni also has different formulas. 


 ## Controllers:

 These are the files that contain the actual logic of the backend like calculations and other fucntions or what now.

 ## Middleware:

 This runs everytime a route is called to like authenticate stuff and make sure no funky business

 ## Routing:

 This links functions through the different files and also handles the connections between the frontend and backend.


 ## Admin Panel:

 where users can be managed and an easier way to add universitys and add stuff about them

 ## Mini CMS???

 work in progress.
