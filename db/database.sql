CREATE DATABASE IF NOT EXIST companydb;

USE companydb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT DEFAULT NULL,
    PRIMARY KEY(id)
)

INSERT INTO employee VALUES
(1, 'Jose', 1000),
(2, 'Juan', 2000),
(3, 'Pedro', 2500),
(4, 'Felix', 1500);