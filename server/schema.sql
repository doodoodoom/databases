CREATE DATABASE chat;

USE chat;

CREATE TABLE usernames (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name TEXT
);

CREATE TABLE messages (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  text TEXT,
  roomname TEXT,
  username INTEGER
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

