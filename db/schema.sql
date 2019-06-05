### Schema

DROP DATABASE IF EXISTS tacos_db;

CREATE DATABASE tacos_db;

USE tacos_db;

CREATE TABLE tacos
(
	id int NOT NULL AUTO_INCREMENT,
	taco_name VARCHAR(255) NOT NULL,
	shell VARCHAR(255) NOT NULL DEFAULT 0,
	vegetarian BOOLEAN DEFAULT false,
	picked_up BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);