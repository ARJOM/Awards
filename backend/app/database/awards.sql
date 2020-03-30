CREATE TABLE genders(
    id integer primary key autoincrement,
    gender varchar(20)
);

CREATE TABLE types(
    id integer primary key autoincrement,
    name varchar(40)
);

CREATE TABLE users(
    username varchar(20) primary key,
    email varchar(80) unique,
    password varchar(80),
    gender integer,
    FOREIGN KEY (gender) REFERENCES genders(id)
);

CREATE TABLE photos(
    id integer primary key autoincrement,
    username varchar(20),
    photo text,
    type integer,
    FOREIGN KEY (username) REFERENCES users(username),
    FOREIGN KEY (type) REFERENCES types(id)
);

CREATE TABLE ratings(
    appraiser varchar(20),
    photo integer,
    grade integer,
    CHECK (grade >= 0 AND grade <= 5),
    FOREIGN KEY (appraiser) REFERENCES users(username),
    FOREIGN KEY (photo) REFERENCES photos(id),
    PRIMARY KEY (appraiser, photo)
);

CREATE VIEW photo_info AS
    SELECT p.id, p.username, p.photo, p.type, count(*) as total, avg(r.grade) as grade
    FROM photos p, ratings r
    WHERE p.id=r.photo
    GROUP BY p.id, p.username, p.photo, p.type;

CREATE VIEW photo_most AS
    SELECT p.id, r.grade as evaluation, count(r.grade) as qt_evaluation
    FROM photos p, ratings r
    WHERE p.id=r.photo
    GROUP BY p.id, r.grade
    ORDER BY count(r.grade) DESC