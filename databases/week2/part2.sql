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

-- Part 3: More queries

-- Get all the tasks assigned to users whose email ends in @spotify.com

SELECT
    user.name,
    user.email,
    task.title,
    task.description
FROM task
    JOIN user_task ON task.id = user_task.task_id
    JOIN user ON user_task.user_id = user.id
WHERE
    user.email LIKE '%@spotify.com';

-- Get all the tasks for 'Donald Duck' with status 'Not started'

SELECT
    user.name,
    task.title,
    status.name
FROM task
    JOIN user_task ON task.id = user_task.task_id
    JOIN user ON user_task.user_id = user.id
    JOIN status ON task.status_id = status.id
WHERE
    user.name = 'Donald Duck'
    AND status.name = 'Not started';

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)

SELECT
    user.name,
    task.title,
    task.created
FROM task
    JOIN user_task ON task.id = user_task.task_id
    JOIN user ON user_task.user_id = user.id
WHERE
    user.name = 'Maryrose Meadows'
    AND MONTH(task.created) = 9;

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)

SELECT
    DATE_FORMAT(task.created, '%M') as 'Month',
    COUNT(task.id) as 'Tasks Created'
FROM task
GROUP BY
    MONTH(task.created),
    DATE_FORMAT(task.created, '%M');