CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (

  -- TABLE CODE TO GO HERE
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  author VARCHAR(50),
  chirp VARCHAR(150),
  time_created TIME

);