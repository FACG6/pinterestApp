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
    ('dena', 'dena', '$2b$10$bdltXPJZEX.u9jyPCEqY9eVmg6.z8Pqc.TdyBAeoPDpRWKpiUV7bG' ); 
COMMIT;