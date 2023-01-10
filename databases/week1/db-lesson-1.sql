
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
SELECT task.id,title,due_date, status.name 
FROM task
JOIN status ON task.status_id = status.id
WHERE status.name  = "Done";

-- Find all the tasks that are not marked as done
SELECT task.id,title,due_date, status.name 
FROM task
JOIN status ON task.status_id = status.id
WHERE status.name != "Done";

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
SELECT task.title, status.name
FROM task
JOIN status 
ON task.status_id = status.id;

-- Get the name of each status, along with a count of how many tasks have that status
SELECT status.name, COUNT(task.id) as 'task count'
FROM status 
JOIN task ON status.id = task.status_id
GROUP BY status.id;

-- Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name, count(task.id) as 'status count'
FROM status 
JOIN task ON status.id = task.status_id
GROUP BY status.id
ORDER BY COUNT(task.id) DESC;