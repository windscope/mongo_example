Example of using MongoDB
======================
Used in discussion 9: intro to MongoDB

Import data
----------
To import the json file into the MongoDB server, run the following command with <variable> replaced
```
mongoimport --db <uniquename> -u <uniquename> --password <password> --host eecs484.eecs.umich.edu --collection orders --file orders.json --jsonArray --drop
```

Run commands
------------
Login to mongo shell as instructed in the discussion, and you should be able to run the queries in .js files by copy and paste
