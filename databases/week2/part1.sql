-- Part 1: Working with tasks

-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id

insert into
    task (
        title,
        created,
        updated,
        due_date,
        status_id,
        user_id
    )
values (
        'graduate from HYF',
        '2022-09-18 01:41:53',
        '2023-5-28 01:41:53',
        '2023-5-28 01:41:53',
        2,
        null
    );

-- Change the title of a task

UPDATE task SET title = 'title changed' WHERE id = 5;

-- Change a task due date

UPDATE task SET due_date = '2023-01-21' WHERE id = 1;

-- Change a task status

UPDATE task SET status_id = '1' WHERE id = 1;

-- Mark a task as complete

UPDATE task SET status_id = '3' WHERE id = 31;

-- Delete a task

DELETE FROM task WHERE id = '15';