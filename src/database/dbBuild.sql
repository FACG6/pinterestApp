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
    link text,
    user_id INTEGER REFERENCES users(id)
);
insert into users (username, name, password)
values
    ('dena', 'dena', '$2a$05$lKh/EC5Pk9l2MmoAW7glu.TF6MqyBgZag2AlKC69vHxd2d9zBLPZu' ); 
COMMIT;