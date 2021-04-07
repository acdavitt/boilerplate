-- Schema! --
DROP DATABASE IF EXISTS nasa;

CREATE DATABASE nasa;

USE nasa;

-- Finish the rest of the pieces for storing our information -- 

CREATE TABLE photos (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  explanation VARCHAR(1000),
  title VARCHAR(255),
  photo_url VARCHAR(255)
);
