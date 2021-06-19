CREATE TABLE "public"."resource" (
  id SERIAL PRIMARY KEY NOT NULL,
  "user_id" INTEGER NOT NULL,
  title VARCHAR(255),
  description TEXT,
  "created_at" TIMESTAMP NOT NULL DEFAULT now(),
  published BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE "public"."resource_child" (
  id SERIAL PRIMARY KEY NOT NULL,
  resource_id INTEGER NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  metadata JSON,
  "created_at" TIMESTAMP NOT NULL DEFAULT now(),
  FOREIGN KEY ("resource_id") REFERENCES "public"."resource"(id)
);

