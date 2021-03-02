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