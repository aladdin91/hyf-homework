-- Part 2: School database

create database school;

use school;

SET NAMES utf8mb4;

CREATE TABLE
    Class (
        id INT(10) unsigned NOT NULL AUTO_INCREMENT,
        name VARCHAR(255),
        begins DATE,
        ends DATE,
        PRIMARY KEY (id)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE
    Student (
        id INT(10) unsigned NOT NULL AUTO_INCREMENT,
        name VARCHAR(255),
        email VARCHAR(255),
        phone VARCHAR(255),
        class_id INT unsigned NOT NULL,
        PRIMARY KEY (id),
        CONSTRAINT class FOREIGN KEY (class_id) REFERENCES Class(id) ON DELETE CASCADE
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;