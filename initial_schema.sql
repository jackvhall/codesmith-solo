DROP TABLE IF EXISTS "public"."menu_item_option";
DROP TABLE IF EXISTS "public"."menu_item";
DROP TABLE IF EXISTS "public"."menu_section";
DROP TABLE IF EXISTS "public"."menu";
DROP TABLE IF EXISTS "public"."page";
DROP TABLE IF EXISTS "public"."location";
DROP TABLE IF EXISTS "public"."business";

CREATE TABLE "public"."menu" (
  id SERIAL PRIMARY KEY NOT NULL,
  "business_id" INTEGER NOT NULL,
  title VARCHAR(255),
  description TEXT,
  "created_at" TIMESTAMP NOT NULL DEFAULT now(),
  published BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE "public"."menu_section" (
  id SERIAL PRIMARY KEY NOT NULL,
  menu_id INTEGER NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  metadata JSON,
  "created_at" TIMESTAMP NOT NULL DEFAULT now(),
  FOREIGN KEY ("menu_id") REFERENCES "public"."menu"(id)
);

CREATE TABLE "public"."menu_item" (
  id SERIAL PRIMARY KEY NOT NULL,
  menu_section_id INTEGER NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  price INTEGER NOT NULL,
  metadata JSON,
  "created_at" TIMESTAMP NOT NULL DEFAULT now(),
  FOREIGN KEY ("menu_section_id") REFERENCES "public"."menu_section"(id)
);


CREATE TABLE "public"."menu_item_option" (
  id SERIAL PRIMARY KEY NOT NULL,
  menu_item_id INTEGER NOT NULL,
  title VARCHAR(255) NOT NULL,
  price INTEGER, -- options may be free
  description TEXT,
  "created_at" TIMESTAMP NOT NULL DEFAULT now(),
  FOREIGN KEY ("menu_item_id") REFERENCES "public"."menu_item"(id)
);

CREATE TABLE "public"."page" (
  id SERIAL PRIMARY KEY NOT NULL,
  active_menu INTEGER NOT NULL,
  title VARCHAR(255) NOT NULL,
  price INTEGER,
  published BOOLEAN DEFAULT false, 
  description TEXT,
  "created_at" TIMESTAMP NOT NULL DEFAULT now(),
  FOREIGN KEY ("active_menu") REFERENCES "public"."menu"(id)
);

CREATE TABLE "public"."business" (
  id SERIAL PRIMARY KEY NOT NULL,
  "user_id" INTEGER NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  "created_at" TIMESTAMP NOT NULL DEFAULT now()
);

CREATE TABLE "public"."location" (
  id SERIAL PRIMARY KEY NOT NULL,
  "business_id" INTEGER NOT NULL,
  address VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  state VARCHAR(2) NOT NULL,
  postcode VARCHAR(10) NOT NULL,
  avatar TEXT,
  images JSON,
  "phone_numbers" JSON,
  "created_at" TIMESTAMP NOT NULL DEFAULT now(),
  FOREIGN KEY ("business_id") REFERENCES "public"."business"(id)
)
