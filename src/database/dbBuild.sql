BEGIN;

DROP TABLE IF EXISTS users ,images;

create TABLE users(
    id serial primary key,
    username varchar(30),
    name varchar(50),
    password varchar
);
create TABLE images(
    id serial primary key,
    url text,
    user_id INTEGER REFERENCES users(id)
);
insert into users (username, name, password)
values
    ('dena', 'dena', '123' );
     
COMMIT;