# FileShare

This project was developed by Dominik and Sebastian. Share your files on our [website](123.123) or host it on your own. If you want to set up our project on your own server, download our project from Github. Check out our installation guide for more informations.

## Getting started

### Installing NodeJs

You will need NodeJs ( > version 14.0 ) and npm. To check whether it's already installed on your system, open up a terminal window and type `node -v` or `npm -v` at the command prompt. For example, you should see something similar to the following:

```
node -v
v14.10.0

npm -v
6.14.10
```

### Installing PostgreSQL

You also need PostgreSQL as Database. Download [PostgreSQL](https://www.postgresql.org/download/) for your operating system. After downloading PostgreSQL, follow the next steps to import the database. Here you can [download](database) the database.

If you have downloaded [PostgreSQL](https://www.postgresql.org/download/) and our [SQL File](database) you can start to import the database. Type this into your console:

```

psql -U username dbname < database_v1.sql
```

### Installing FileShare

To create your own FileShare and serve it locally just follow the next steps below.

```
git clone https://github.com/OnSebii/FileShare MY-OWN-FILESHARE
cd MY-OWN-FILESHARE
npm run serve
```

If everything worked you should see the website when you type localhost:8080 in your browser.

### Build FileShare

ToDo

```
cd MY-OWN-FILESHARE
npm run build
```

### Github ToDo

- [ ] Rework readme links
