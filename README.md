# The Ally App

## Description
The Ally App is a place where people can go to learn more about how to combat racial inequalities, view media resources that aid in combatting those inequalities, get assistance from people seeking to be allies, give assistance, and start petitions. 

This full-stack, MVC (Model-View-Controller) application allows you to create help posts and petitions (POST), update those help posts and petitions (PUT), delete them as needed (DELETE), and view hundreds of resources from different tables (GET).

## Mission Statement
Promote the well-being of communities by connecting organizations and individuals in combating racial inequalities and prejudice by providing resources to protect themselves and their loved ones.

## Deployed App
You can view our deployed project by clicking [here](PASTE LIVE LINK HERE).

To set up this application locally on your computer, perform the following steps:

## Getting Set Up
1. **Clone the repository**
The first step is to clone the project repository to a local directory on your computer. To clone the repository, run the following commands:

        $ git clone https://github.com/lindseypaluso/allyApp.git
        $ cd allyApp

2. **Install Node.js**
If you don't already have Node.js installed on your computer, you can install the latest version here: https://nodejs.org/en/.

3. **Install the dependencies**
After you clone the repository to a local directory, run the following command to install the required npm packages:

        npm install

4. **Install MySQL Workbench**
If you don't already have MySQL Workbench installed on your computer, you can install the latest version [here](https://www.mysql.com/products/workbench/)

5. **Set up a development database**
To set up a development database that you can use with this application, perform the following steps:

    Open the database/schema.sql file and paste the contents of this file into MySQL Workbench.

    Execute the following statements:

        CREATE DATABASE allyApp;

        USE allyApp;
  
    Running these statements creates a database called allyApp and sets it as the current database being used.

    Execute the remaining statements to create tables for the app. The first one looks like this:

        CREATE TABLE books(
        title VARCHAR(350) NOT NULL,
        author VARCHAR(250),
        genre VARCHAR(250),
        link1 VARCHAR(2000),
        link2 VARCHAR(2000),
        link3 VARCHAR(2000)
        );
  
    To populate the tables with some starting data, open up the db/seeds.sql file and paste some of the contents into MySQL Workbench. Execute the code in seeds.sql from MySQL Workbench. For example:

        INSERT INTO books (title, author, genre, link1, link2, link3, createdAt, updatedAt) 
        VALUES ("The Bluest Eye", "Toni Morrison", "Fiction", "https://www.esowonbookstore.com/book/9780307278449,https://amzn.to/2XOk3Xi");
        
6. **Create a .env file to store your MySQL Password**
If you set up MySQL to use a password to connect to your database, you need to provide your own .env file. If you did not set up MySQL with a password, you can skip this step.

    Create a file named .env in the project root directory (allyApp) with the following contents. Replace mysql_password with your actual MySQL password.

        # MySQL Password

        MYSQL_PASSWORD='mysql_password'

    This file will be used by the dotenv npm package, which will pass the password value as an environment variable to the global process.env object in node. Because .env is specified in the .gitignore file, the password is kept private.

7. **Verify database connection information**
Open the config/config.json file and verify that the database connection information (host, user, port, password, and database) reflects the database you just created.

    Modify the connection properties as needed to reflect your database instance.

    For example:

        "username": "root",
        "password": "root",
        "database": "allyApp",
        "host": "localhost",
        "dialect": "mysql"

8. **Start the server**
After performing all of the setup steps, navigate to the project root directory (allyApp) and run the following command to start the server:

        $ node server

    To verify that the server has started and the application is working locally on your computer, open Chrome and go to http://localhost:8080.

    This will bring you to the home page of the Ally App, where you can navigate through the app.

## Navigating the App
**Home Page** <br>
The home page is where you will find our mission statement and a carousel of information about becoming an ally.

![Home page](IMAGE LINK HERE)

**Library** <br>
The library page is where you will be able to view media resources that educate about racial inequalities and filter them by category based on what kind of media you'd like to consume.

![Library page](IMAGE LINK HERE)

**Get Involved** <br>
The Get Involved page is where allies can find ways to help those affected by racial inequalities.

![Get Involved page](IMAGE LINK HERE)

**Petitions** <br>
The Petitions page is where you can start your own petition or sign someone else's petition.

![Petition page](IMAGE LINK HERE)

**Need Help?** <br>
The Need Help page lets users struggling due to racial inequality post help requests for anyone willing to help. Once the users connect, they are able to message each other via their accounts to arrange for help.

![Need Help page](IMAGE LINK HERE)

**Login System** <br>
If you'd like to create an account (which is necessary for posting and messaging on the Need Help page), you can do so by clicking....... THIS NEEDS TO BE FINISHED

![Login system](IMAGE LINK HERE)

## Technologies Used
### Front-end Technologies 
* HTML
* CSS
* Handlebars
* Bootstrap
* Javascript
* jQuery

### Back-end Technologies
* Nose.js
* MySQL
* Sequelize
* Express
* Passport

## Creators
[Abby Nielson](https://github.com/aanielson) <br>
[Chiafong](https://github.com/cftgithub) <br>
[Lindsey Paluso](https://github.com/lindseypaluso) <br>
[Megan Swenson](https://github.com/megswen) <br>
[Riley Chatwin](https://github.com/Rileychatwin)
