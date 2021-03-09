-- Test Data
INSERT INTO users(email, password, firstname, lastname)
VALUES ('lang.s03@htlwienwest.at', 'hash', 'S', 'L');
SELECT *
FROM users;

INSERT INTO files(id, name, path, synonym_path, upload_date)
VALUES (1, 'File', 'user/folder/filename', 'synonym', now());
SELECT *
FROM files;

INSERT INTO user_data(email, data_id, admin)
VALUES ('lang.s03@htlwienwest.at', 1, true);
SELECT *
FROM user_data;
--
INSERT INTO users(email, password, firstname, lastname)
VALUES ('palatin.d02@htlwienwest.at', 'hash', 'D', 'P');
SELECT *
FROM users;

INSERT INTO files(id, name, path, synonym_path, upload_date)
VALUES (2, 'File', 'user/folder/filename', 'synonym', now());
SELECT *
FROM files;

INSERT INTO user_data(email, data_id, admin)
VALUES ('palatin.d02@htlwienwest.at', 2, true);
SELECT *
FROM user_data;

-- Join
SELECT *
FROM users
         JOIN user_data USING (email)
         JOIN files ON id = data_id;

-- Delete
DELETE
FROM users
WHERE email = 'lang.s03@htlwienwest.at';
--
DELETE
FROM files
WHERE id = 1;

--- --- USEFUL QUERIES --- --- --- --- --- --- --- --- --- --- # User

-- Login Process
SELECT *
FROM users
WHERE email = 'lang.s03@htlwienwest.at'
  AND password = 'hash';
-- Login GET User Data
SELECT id, name, path, synonym_path, upload_date
FROM users
         JOIN user_data USING (email)
         JOIN files ON id = data_id
WHERE email = 'lang.s03@htlwienwest.at';

-- Verification Check
SELECT 1
FROM users
WHERE email = 'email'
  AND password = 'password';

-- Register Process
INSERT INTO users(email, password, firstname, lastname)
VALUES ('lang.s03@htlwienwest.at', 'hash', 'S', 'L');
--> Login Queries

-- Update User Data
UPDATE users
SET firstname='',
    lastname=''
WHERE email = 'lang.s03@htlwienwest.at';
-- Update User Password
UPDATE users
SET password=''
WHERE email = 'lang.s03@htlwienwest.at';

-- Delete User
DELETE
FROM files
WHERE id = (SELECT DISTINCT id
            FROM users
                     JOIN user_data USING (email)
                     JOIN files ON id = data_id
            WHERE email = 'email');
--
DELETE
FROM users
WHERE email = 'email';

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- -- # Files

-- GET User Files
SELECT id, name, path, synonym_path, upload_date, admin
FROM users
         JOIN user_data USING (email)
         JOIN files ON id = data_id
WHERE email = 'lang.s03@htlwienwest.at';

-- Insert User Files
INSERT INTO files(id, name, path, upload_date)
VALUES (2, 'File', 'user/folder/filename', now());
--
INSERT INTO user_data(email, data_id, admin)
VALUES ('palatin.d02@htlwienwest.at', 2, true);
-- SET File Synonym Path
UPDATE files
SET synonym_path = 'xxx'
WHERE id = 1;

-- Update User File
UPDATE files
SET name=''
WHERE id = (SELECT DISTINCT id
            FROM users
                     JOIN user_data USING (email)
                     JOIN files ON id = data_id
            WHERE email = 'email');

-- Delete User File
DELETE
FROM files
WHERE id = 1;