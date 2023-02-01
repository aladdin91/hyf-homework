-- Meal Queries to write  --

-- Get all meals  --

SELECT * FROM Meal;

-- Add a new meal  --

INSERT INTO
    Meal (
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
        4,
        'Chicken and Rice',
        'Juicy chicken baked to perfection with a side of fluffy rice',
        'copenhagen',
        '2023-02-01 14:00',
        4,
        75,
        '2023-02-01'
    );

-- Get a meal with any id, fx 1 --

SELECT * FROM Meal WHERE id = 1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE meal
SET
    title = 'New meal',
    description = 'New Description for new meal',
    price = 45
WHERE id = 1;

-- Delete a meal with any id, fx 1

DELETE FROM meal WHERE id = 2;

--Reservation Queries to write--

--Get all reservations

SELECT * FROM Reservation;

--Add a new reservation

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
        4,
        4,
        1,
        '2023-01-05 08:00',
        '987654321',
        'Mia',
        'mia@gmail.com'
    );

--Get a reservation with any id, fx 1

SELECT * FROM Reservation WHERE id = 2;

--Update a reservation with any id, fx 1.

UPDATE Reservation SET number_of_guests = 2 WHERE id = 2;

--Update any attribute fx the title or multiple attributes

UPDATE Reservation
SET
    number_of_guests = 5,
    contact_email = 'xy@gmail.com'
WHERE id = 4;

--Delete a reservation with any id, fx 1

DELETE FROM Reservation WHERE id = 3;

-- Review Queries to write --

--Get all reviews

SELECT * FROM Review;

--Add a new review

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
        4,
        'bad',
        null,
        4,
        1,
        '2023-01-05'
    );

--Get a review with any id, fx 1

SELECT * FROM Review WHERE id = 4;

-- Update a review with any id, fx 1.

UPDATE Review SET title = 'not bad' WHERE id = 4;

--Update any attribute fx the title or multiple attributes

UPDATE Review
SET
    stars = 5,
    created_date = '2023-01-01'
WHERE id = 4;

--Delete a review with any id, fx 1

DELETE FROM Review WHERE id = 3;

-- Additional queries --

-- Get meals that has a price smaller than a specific price fx 90

SELECT * FROM meal WHERE price < 90;

-- Get meals that still has available reservations

SELECT meal.title
FROM meal
WHERE meal.id NOT IN (
        SELECT
            reservation.meal_id
        FROM reservation
    );

-- Get meals that partially match a title.Rød grød med will match the meal with the title Rød grød med fløde

SELECT * FROM meal WHERE title LIKE '%Rød grød med%';

--Get meals that has been created between two dates

SELECT
    meal.title,
    meal.created_date
FROM meal
WHERE
    created_date BETWEEN '2023-01-01' AND '2023-01-03';

--Get only specific number of meals fx return only 5 meals

SELECT * FROM Meal LIMIT 2;

--Get the meals that have good reviews

SELECT
    Meal.title,
    Review.stars
FROM Meal
    JOIN Review ON Meal.id = Review.id
WHERE Review.stars >= 6;

--Get reservations for a specific meal sorted by created_date

SELECT
    title,
    reservation.created_date
FROM meal
    JOIN reservation ON meal.id = reservation.id
WHERE
    title LIKE 'Chicken and Rice'
ORDER BY
    reservation.created_date;

--Sort all meals by average number of stars in the reviews

SELECT
    meal.title,
    AVG(review.stars) as avg_stars
FROM meal
    JOIN review ON meal.id = review.meal_id
GROUP BY meal.id
ORDER BY avg_stars DESC;