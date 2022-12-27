CREATE DATABASE IF NOT EXISTS express_numbersBDD;
USE express_numbersBDD;

DROP TABLE IF EXISTS numbers;

CREATE TABLE numbers (
  id int primary key NOT NULL AUTO_INCREMENT,
  number INTEGER NOT NULL UNIQUE
);

