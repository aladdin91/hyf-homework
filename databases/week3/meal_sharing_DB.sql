create database meal_sharing_DB;

use meal_sharing_DB;

CREATE TABLE
    Meal(
        `id` INT(10) PRIMARY KEY AUTO_INCREMENT,
        `title` VARCHAR(50) NOT NULL,
        `description` TEXT,
        `location` VARCHAR(50) NOT NULL,
        `when` DATETIME NOT NULL,
        `max_reservation` INT,
        `price` DECIMAL NOT NULL,
        `created_date` DATE NOT NULL
    ) ENGINE = INNODB DEFAULT CHARSET = UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE TABLE
    Reservation(
        `id` INT(10) UNIQUE NOT NULL PRIMARY KEY,
        `number_of_guests` INT NOT NULL,
        `meal_id` INT NOT NULL,
        `created_date` DATE NOT NULL,
        `contact_phonenumber` VARCHAR(20) NOT NULL,
        `contact_name` VARCHAR(50) NOT NULL,
        `contact_email` VARCHAR(50),
        CONSTRAINT meal_id FOREIGN KEY(meal_id) REFERENCES Meal(id) ON DELETE CASCADE ON UPDATE CASCADE
    ) ENGINE = INNODB DEFAULT CHARSET = UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE TABLE
    Review(
        `id` INT(10) UNIQUE NOT NULL PRIMARY KEY,
        `title` VARCHAR(50) NOT NULL,
        `description` TEXT,
        `meal_id` INT(10) NOT NULL,
        `stars` INT(1),
        `created_date` DATE NOT NULL,
        CONSTRAINT review_meal_id FOREIGN KEY(meal_id) REFERENCES Meal(id) ON DELETE CASCADE ON UPDATE CASCADE
    ) ENGINE = INNODB DEFAULT CHARSET = UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

INSERT INTO
    `meal` (
        id,
        title,
        description,
        location,
        `when`,
        max_reservation,
        price,
        created_date
    )
VALUES (
        1,
        'Lentil Chili',
        'This hearty vegetarian chili is both nutritious and satisfying',
        'copenhagen',
        '2023-01-01 14:00',
        3,
        90,
        '2023-01-01'
    );

INSERT INTO
    `meal` (
        id,
        title,
        description,
        location,
        `when`,
        max_reservation,
        price,
        created_date
    )
VALUES (
        2,
        'Black Bean, Lentil and Eggplant Chili',
        null,
        'copenhagen',
        '2023-01-02 10:00',
        5,
        150,
        '2023-01-02'
    );

INSERT INTO
    `meal` (
        id,
        title,
        description,
        location,
        `when`,
        max_reservation,
        price,
        created_date
    )
VALUES (
        3,
        'Fajita Stuffed Peppers',
        'Enjoy the flavors of sizzling fajitas (a Tex-Mex favorite) in a stuffed pepper, which replaces the flour tortillas commonly used.',
        'copenhagen',
        '2023-01-03 10:00',
        1,
        50,
        '2023-01-03'
    );

INSERT INTO
    `Reservation` (
        id,
        number_of_guests,
        meal_id,
        created_date,
        contact_phonenumber,
        contact_name,
        contact_email
    )
VALUES (
        1,
        3,
        2,
        '2023-01-20 18:00',
        '123456789',
        'Oliver',
        'ol@gmail.com'
    );

INSERT INTO
    `Reservation` (
        id,
        number_of_guests,
        meal_id,
        created_date,
        contact_phonenumber,
        contact_name,
        contact_email
    )
VALUES (
        2,
        4,
        1,
        '2023-01-05 08:00',
        '987654321',
        'Emma',
        'em@gmail.com'
    );

INSERT INTO
    `Reservation` (
        id,
        number_of_guests,
        meal_id,
        created_date,
        contact_phonenumber,
        contact_name,
        contact_email
    )
VALUES (
        3,
        2,
        3,
        '2023-02-01 00:00',
        '654321789',
        'William',
        'will@gmail.com'
    );

INSERT INTO
    `Review` (
        id,
        title,
        description,
        meal_id,
        stars,
        created_date
    )
VALUES (
        1,
        'good',
        null,
        3,
        6,
        '2023-01-05'
    );

INSERT INTO
    `Review` (
        id,
        title,
        description,
        meal_id,
        stars,
        created_date
    )
VALUES (
        2,
        'ok',
        ' The food was all right but seriously lacked presentation',
        2,
        5,
        '2023-01-30'
    );

INSERT INTO
    `Review` (
        id,
        title,
        description,
        meal_id,
        stars,
        created_date
    )
VALUES (
        3,
        'great',
        'It was much better than I expected',
        1,
        9,
        '2023-01-15'
    );