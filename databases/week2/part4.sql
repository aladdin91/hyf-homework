create DATABASE lesson_2;

use lesson_2;

SET NAMES utf8mb4;

CREATE TABLE
    author (
        id int(10) unsigned NOT NULL AUTO_INCREMENT,
        first_name varchar(255) NOT NULL,
        last_name varchar(255) NOT NULL,
        PRIMARY KEY (id)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE
    publisher (
        id int(10) unsigned NOT NULL AUTO_INCREMENT,
        name varchar(255) NOT NULL,
        PRIMARY KEY (id)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE
    category (
        id int(10) unsigned NOT NULL AUTO_INCREMENT,
        name varchar(255) NOT NULL,
        PRIMARY KEY (id)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE
    rating (
        id int(10) unsigned NOT NULL AUTO_INCREMENT,
        name varchar(255) NOT NULL,
        PRIMARY KEY (id)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

create table
    book(
        id int(10) unsigned NOT NULL AUTO_INCREMENT,
        category_name varchar(255) NOT NULL,
        publish_date date,
        price int NOT NULL,
        description varchar(255),
        isbn int NOT NULL,
        author_id int(10) unsigned NOT NULL,
        category_id int(10) unsigned NOT NULL,
        rating_id int(10) unsigned NOT NULL,
        publisher_id int(10) unsigned NOT NULL,
        page_count int(10) unsigned NOT NULL,
        PRIMARY KEY (id),
        CONSTRAINT author FOREIGN KEY (author_id) REFERENCES author(id) ON DELETE CASCADE,
        CONSTRAINT category FOREIGN KEY (category_id) REFERENCES category(id) ON DELETE CASCADE,
        CONSTRAINT rating FOREIGN KEY (rating_id) REFERENCES rating(id) ON DELETE CASCADE,
        CONSTRAINT publish FOREIGN KEY (publisher_id) REFERENCES publisher(id) ON DELETE CASCADE
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

create table
    user(
        id int(10) unsigned NOT NULL AUTO_INCREMENT,
        username varchar(255) NOT NULL UNIQUE,
        password int(10) NOT NULL,
        email varchar(255) NOT NULL UNIQUE,
        favourite_book_id int(10) unsigned NOT NULL,
        favourite_author_id int(10) unsigned NOT NULL,
        PRIMARY KEY (id),
        CONSTRAINT book FOREIGN KEY (favourite_book_id) REFERENCES book(id) ON DELETE CASCADE,
        CONSTRAINT fav_author FOREIGN KEY (favourite_author_id) REFERENCES author(id) ON DELETE CASCADE
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

create table
    co_author(
        -- id int(10) unsigned NOT NULL AUTO_INCREMENT,
        author_id int(10) unsigned NOT NULL,
        book_id int(10) unsigned NOT NULL,
        PRIMARY KEY (author_id, book_id),
        CONSTRAINT author_id FOREIGN KEY (author_id) REFERENCES author(id) ON DELETE CASCADE,
        CONSTRAINT book_id FOREIGN KEY (book_id) REFERENCES book(id) ON DELETE CASCADE
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;