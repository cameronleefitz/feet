

SET statement_timeout
= 0;
SET lock_timeout
= 0;
SET idle_in_transaction_session_timeout
= 0;
SET client_encoding
= 'UTF8';
SET standard_conforming_strings
= on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies
= false;
SET xmloption
= content;
SET client_min_messages
= warning;
SET row_security
= off;

CREATE TABLE public.feet
(
  "_id" serial NOT NULL,
  "image" varchar,
  CONSTRAINT "feet_pk" PRIMARY KEY ("_id")
)
WITH (
  OIDS=FALSE
);


INSERT INTO public.feet
VALUES
  (1, 'https://blog.vagaro.com/wp-content/uploads/2015/09/woman-feet-red-toes.jpg');
INSERT INTO public.feet
VALUES
  (2, 'https://qph.fs.quoracdn.net/main-qimg-4bc6e01b53826e9489e0baf5a63b6ded');
INSERT INTO public.feet
VALUES
  (3, 'https://www.fixflatfeet.com/wp-content/uploads/2016/03/Flat-Foot-Arch-Before.jpg');
INSERT INTO public.feet
VALUES
  (4, 'https://i.pinimg.com/originals/93/a6/18/93a618f002079c6eae1d8b08898646cf.jpg');
INSERT INTO public.feet
VALUES
  (5, 'https://images-prod.healthline.com/hlcmsresource/images/Image-Galleries/Athletes-Foot/athletes_foot_severe.JPG');
INSERT INTO public.feet
VALUES


-- select setval('public.people__id_seq', 89, false);
-- select setval('public.planets__id_seq', 62, false);
-- select setval('public.vessels__id_seq', 78, false);
-- select setval('public.species__id_seq', 38, false);