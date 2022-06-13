--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

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
-- Name: session; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.session (
    sid text NOT NULL,
    sess json NOT NULL,
    expire timestamp without time zone NOT NULL
);


ALTER TABLE public.session OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    uid integer NOT NULL,
    name character varying(30),
    email character varying(40),
    password text,
    secret text,
    userstocks character varying(6)[]
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_uid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_uid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_uid_seq OWNER TO postgres;

--
-- Name: users_uid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_uid_seq OWNED BY public.users.uid;


--
-- Name: users uid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN uid SET DEFAULT nextval('public.users_uid_seq'::regclass);


--
-- Data for Name: session; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.session (sid, sess, expire) FROM stdin;
pgjYLLRv8tcfECvLrZSNsD2m4STcRwhN	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-13T19:29:01.529Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":13}	2022-06-13 21:29:02
gn37XtEBJJLQWrGV-me6KlH74TpCDI4J	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-13T19:32:00.917Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":14}	2022-06-13 21:32:01
TMWfn5xy1hEAr0mPBrspyFriVf7Hd1xf	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-13T19:34:23.293Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":15}	2022-06-13 21:34:24
BzL_Mdd6b8kxwSHj3lzIYPxnPMpWCt66	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-13T19:34:26.140Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":15}	2022-06-13 21:34:27
I39KicNl8Uykrj0aG2Ux2WUXP4KZFFM5	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-13T19:34:31.844Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":15}	2022-06-13 21:34:32
O1I4o1ZE-28-dXtFRf5whZTEkkb8_984	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-13T19:34:33.131Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":15}	2022-06-13 21:34:34
9KaeFkZM83qLckuhVrQKTVhfntkndJ7M	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-13T19:34:33.776Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":15}	2022-06-13 21:34:34
PMCwVrYM2lS_RbB27LaKKhklQd7oq0t_	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-13T19:34:34.428Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":15}	2022-06-13 21:34:35
9KZBFUdWPCPAp5lzBWQtGcmCEQlGJGkj	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-13T19:35:10.523Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":15}	2022-06-13 21:35:11
fyuoqFsUSKWvWR3Q8k9Ij07kI860LOiX	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-13T20:00:15.019Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":16}	2022-06-13 22:00:16
l7LIo4BlvI3W6zuh5BUJCuUnhO3vEPDO	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-13T21:06:28.458Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":17}	2022-06-13 23:06:29
txEm0pS9dMTmtISQHJhXnv-OTNQ2wBMV	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-13T21:09:55.563Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":18}	2022-06-13 23:09:56
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (uid, name, email, password, secret, userstocks) FROM stdin;
18	Jaber__Dani	jaber.d03@htlwienwest.at	$2b$10$U2g35PkVJ.La3JpVWGG2Y.X3de/4Pf3M8wVaqE79DUaMYYp81Cphe	Dani Jaber	{AAPL,TSlA}
\.


--
-- Name: users_uid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_uid_seq', 18, true);


--
-- Name: session session_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_pkey PRIMARY KEY (sid);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (uid);


--
-- Name: idx_session_expire; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_session_expire ON public.session USING btree (expire);


--
-- PostgreSQL database dump complete
--

