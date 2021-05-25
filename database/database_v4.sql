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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: files; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.files (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    path text NOT NULL,
    synonym_path text,
    upload_date timestamp without time zone NOT NULL
);


ALTER TABLE public.files OWNER TO postgres;

--
-- Name: files_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.files_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.files_id_seq OWNER TO postgres;

--
-- Name: files_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.files_id_seq OWNED BY public.files.id;


--
-- Name: user_data; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_data (
    email character varying(50) NOT NULL,
    data_id integer NOT NULL,
    admin boolean DEFAULT true NOT NULL
);


ALTER TABLE public.user_data OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    email character varying(50) NOT NULL,
    password character varying(100) NOT NULL,
    firstname character varying(50) NOT NULL,
    lastname character varying(50) NOT NULL,
    verified boolean DEFAULT false NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: files id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.files ALTER COLUMN id SET DEFAULT nextval('public.files_id_seq'::regclass);


--
-- Data for Name: files; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.files (id, name, path, synonym_path, upload_date) FROM stdin;
1	File	user/folder/filename	synonym	2021-03-02 11:27:59.418211
2	File	user/folder/filename	synonym	2021-03-02 11:31:44.150277
5	anon	q-PS4ayms.pdf	\N	2021-05-18 10:25:50.514094
6	anon	XXm57z2ef.pdf	\N	2021-05-18 10:27:03.228312
8	jkjkj	zPTTGdTr5.HEIC	\N	2021-05-18 11:48:38.697152
9	Name	MLXzRhijp.csv	\N	2021-05-25 08:27:13.057551
\.


--
-- Data for Name: user_data; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_data (email, data_id, admin) FROM stdin;
lang.s03@htlwienwest.at	1	t
palatin.d02@htlwienwest.at	2	t
palatin.d02@htlwienwest.at	1	t
lang.s03@htlwienwest.at	2	t
lang.s03@htlwienwest.at	8	t
lang.s03@htlwienwest.at	9	t
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (email, password, firstname, lastname, verified) FROM stdin;
palatin.d02@htlwienwest.at	hash	D	P	f
lang.s03@htlwienwest.at	$2b$10$JsU9YKEyF4ODlZSH7vZhZeUJtGfqutFQyD87pnnZPx0Yp.JFIDjPO	Sebastian	Lang	t
d.p@g.com	$2b$13$TD8JZw3P1DX8nA9RMCCr8ukEcwuCor7c3Omtx/ZPxOSJtGjobWvr.	Domini	PALATI	f
dom.pal@email.com	$2b$13$G7B6Er191qQ0BSlp.x8.kedIcLkb51u0IxaTeg8xjhQ6fCan9eJDe	Dominik	PALATIN	f
\.


--
-- Name: files_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.files_id_seq', 9, true);


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
    ADD CONSTRAINT "user_data_data-id_fk" FOREIGN KEY (data_id) REFERENCES public.files(id) ON DELETE CASCADE;


--
-- Name: user_data user_data_users_email_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_data
    ADD CONSTRAINT user_data_users_email_fk FOREIGN KEY (email) REFERENCES public.users(email) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

