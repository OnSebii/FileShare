--
-- PostgreSQL database dump
--

-- Dumped from database version 13.0
-- Dumped by pg_dump version 13.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: fileshare; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE fileshare WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';


ALTER DATABASE fileshare OWNER TO postgres;

\connect fileshare

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: files; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.files (
    id integer NOT NULL,
    name character varying(50),
    path text,
    synonym_path text,
    upload_date timestamp without time zone
);


ALTER TABLE public.files OWNER TO postgres;

--
-- Name: user_data; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_data (
    email character varying(50),
    data_id integer,
    admin boolean
);


ALTER TABLE public.user_data OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    email character varying(50) NOT NULL,
    password character varying(100),
    firstname character varying(50),
    lastname character varying(50)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Data for Name: files; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.files VALUES (1, 'File', 'user/folder/filename', 'synonym', '2021-03-02 11:27:59.418211');
INSERT INTO public.files VALUES (2, 'File', 'user/folder/filename', 'synonym', '2021-03-02 11:31:44.150277');


--
-- Data for Name: user_data; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.user_data VALUES ('lang.s03@htlwienwest.at', 1, true);
INSERT INTO public.user_data VALUES ('palatin.d02@htlwienwest.at', 2, true);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.users VALUES ('lang.s03@htlwienwest.at', 'hash', 'Sebastian', 'Lang');
INSERT INTO public.users VALUES ('palatin.d02@htlwienwest.at', 'hash', 'D', 'P');


--
-- Name: files files_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.files
    ADD CONSTRAINT files_pk PRIMARY KEY (id);


--
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (email);


--
-- Name: user_data user_data_data-id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_data
    ADD CONSTRAINT "user_data_data-id_fk" FOREIGN KEY (data_id) REFERENCES public.files(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_data user_data_users_email_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_data
    ADD CONSTRAINT user_data_users_email_fk FOREIGN KEY (email) REFERENCES public.users(email) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

