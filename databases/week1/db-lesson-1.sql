
-- Find out how many tasks are in the task table
SELECT count(id)
AS 'number of tasks'
FROM task;

-- Find out how many tasks in the task table do not have a valid due date
SELECT count(id)
FROM task
WHERE due_date
is NULL;

-- Find all the tasks that are marked as done
SELECT count(id)
AS 'number of completed tasks'
FROM task;

-- Find all the tasks that are not marked as done
SELECT count(id)
FROM task
WHERE status_id = 3;

-- Get all the tasks, sorted with the most recently created first
SELECT *
FROM task
ORDER BY created DESC;

-- Get the single most recently created task
SELECT * FROM task
ORDER BY created DESC
LIMIT 1;

-- Get the title and due date of all tasks where the title or description contains database
SELECT title, due_date
FROM task
WHERE 
(title LIKE '%database%')
OR
(description like '%database%');

-- Get the title and status (as text) of all tasks
select t.title, s.name
 from task t
join status s 
on t.status_id = s.id;

-- Get the name of each status, along with a count of how many tasks have that status
SELECT s.name, COUNT(*) as 'task count'
FROM status s
JOIN task t ON status.id = t.status_id
GROUP BY s.id;

-- Get the names of all statuses, sorted by the status with most tasks first
SELECT s.name
FROM status s
LEFT JOIN task t ON s.id = t.status_id
GROUP BY s.id
ORDER BY COUNT(t.id) DESC