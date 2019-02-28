BEGIN;

DROP TABLE IF EXISTS users ,images;

create TABLE users(
    id serial primary key,
    username varchar(250),
    name varchar(250),
    password text
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