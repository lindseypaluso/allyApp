CREATE DATABASE allyApp;

USE allyApp;

CREATE TABLE books(
  title VARCHAR(350) NOT NULL,
  author VARCHAR(250),
  genre VARCHAR(250),
  link1 VARCHAR(2000),
  link2 VARCHAR(2000),
  link3 VARCHAR(2000)
);
  
CREATE TABLE childrensBooks(
  title VARCHAR(350) NOT NULL,
  author VARCHAR(250),
  age_range VARCHAR(250),
  link1 VARCHAR(2000),
  link2 VARCHAR(2000),
  link3 VARCHAR(2000)
);
  
CREATE TABLE podcasts(
  title VARCHAR(350) NOT NULL,
  link1 VARCHAR(2000),
  link2 VARCHAR(2000)
);
  
CREATE TABLE articles(
  title VARCHAR(350) NOT NULL,
  author VARCHAR(250),
  link VARCHAR(2000),
  link2 VARCHAR(2000)
);
  
CREATE TABLE toWatch(
  title VARCHAR(350) NOT NULL,
  source VARCHAR(150),
  link VARCHAR(2000),
  link2 VARCHAR(2000)
);