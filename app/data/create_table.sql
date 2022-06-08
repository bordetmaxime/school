BEGIN;

-- Effacer les tables existantes qui auraient le même nom que celles qu'on veut ajouter
DROP TABLE IF EXISTS "list_argonaute";
CREATE TABLE "list_argonaute" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(12) NOT NULL UNIQUE
);

COMMIT;