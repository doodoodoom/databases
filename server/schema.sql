CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE usernames (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE texts (
  id INTEGER PRIMARY KEY,
  message TEXT NOT NULL,
  username INTEGER,
  room INTEGER,
  FOREIGN KEY(username) REFERENCES usernames(id),
  FOREIGN KEY(room) REFERENCES rooms(id)
);

CREATE TABLE rooms_usernames (
  id INTEGER PRIMARY KEY,
  room_id INTEGER,
  username_id INTEGER,
  FOREIGN KEY(username_id) REFERENCES usernames(id),
  FOREIGN KEY(room_id) REFERENCES rooms(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

