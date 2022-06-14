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
Ywm1qhMqJYceXo-s-Oi_3uBO5JWZDPSW	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-14T00:23:28.129Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":18}	2022-06-14 02:23:29
rgWTgDSLN4p_MF9kvB2_cSn2k4xo4mXj	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-14T00:23:59.673Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":18}	2022-06-14 02:24:00
e2OeK8T1bcGlfzi2vPI9-J0tRG5-hIfF	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-14T00:24:40.777Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":18}	2022-06-14 02:24:41
_l0Xy6KTg_DQ92c5XDx6_LdAswsoi296	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-14T00:25:23.350Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":18}	2022-06-14 02:25:24
0rbpaVJN9ATuA8tAwmPzbBqt-L5XnFTn	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-14T00:26:18.765Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":18}	2022-06-14 02:26:19
q8WtwSk8W4OM5oObdxXrpK4RyJda7W9G	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-14T00:27:09.294Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":18}	2022-06-14 02:27:10
X9ZiYPe1fPDx9Z6L-5td46-hm2tkkIEt	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-14T00:30:54.804Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":18}	2022-06-14 02:30:55
m5iRwRCabQwN4yGu8CYjMA8Rl0enigJp	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-14T00:34:22.224Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":18}	2022-06-14 02:34:23
b0Mb2YOab7l2rc-j5R9zxcAykccCfsEZ	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-14T00:34:53.774Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":18}	2022-06-14 02:34:54
R0OK5Fi3XRJ84Gsof4OfdORCyAobxk-G	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-14T00:35:55.535Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":18}	2022-06-14 02:35:56
hFjeUWuyfT_8gcFES9X56_Lb6FB-zyWL	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-14T00:36:15.215Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":18}	2022-06-14 02:36:16
0XA_G6oxTZWbAZvWIPNcSsBtagy6ZuJv	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-14T00:38:15.488Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":18}	2022-06-14 02:38:16
zqYu2_1uIm1B-Vumf0gQzWTjIHg76-wT	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-14T00:38:25.736Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":18}	2022-06-14 02:38:26
Y2Fn-yAwohNSTShC8DzWjMESM3l-2zk5	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-14T00:45:30.441Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":18}	2022-06-14 02:45:31
CeEjDJQzFNs5uX9PuaNjhTqDajpWuGgS	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-14T00:49:19.636Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":18}	2022-06-14 02:49:20
7CB543GPXqDmoPIMgHA5f9CqKB1Rhw7f	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-14T00:49:52.279Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":18}	2022-06-14 02:49:53
WKwMkCn0kG6Ll_IOI3f-NDMMigOhG3wv	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-14T00:54:56.496Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":18}	2022-06-14 02:54:57
qi1DpECG8qljHFGC_zhRa49NeVG5wq_h	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-14T01:45:32.934Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":18}	2022-06-14 03:45:33
M420sf5q2EM9Dbj6ktau-TG_r3mS5bu9	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-14T01:55:21.869Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":18}	2022-06-14 03:55:22
cRuMhpEDgwn62rK-yDr_g3sgLLK435fu	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-14T01:55:45.639Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":18}	2022-06-14 03:55:46
upKx7GlXRkmSvNgTQ4o5aLch3CD1z0pW	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-14T02:04:14.232Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":18}	2022-06-14 04:04:15
Y1a06-gY_yRRBhv9EUH5VQbO5oLJszTn	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-14T02:04:51.440Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":18}	2022-06-14 04:04:52
hktlfu7Rgfof5Mwkkft41FD76rZeBYoi	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-14T02:05:30.300Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":18}	2022-06-14 04:05:31
XqSrGW2ZcBfyiavSKYb30Z5snrY66wxs	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-14T02:07:37.827Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":18}	2022-06-14 04:07:38
0G_X3xbbNtW9j12HIztRs4K_IWATFKP0	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-14T02:10:26.627Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":18}	2022-06-14 04:10:27
5xl2d0-KNQXp_DKDu2KL7nq9nMRf6JAZ	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-14T02:10:55.636Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":18}	2022-06-14 04:10:56
A7whBH9h5iiP8C5_sLIahHdaAI0LCELo	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-14T02:11:41.185Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":18}	2022-06-14 04:11:42
eLicLOcB_nmauvZD6uv44Z6FcWvkYUqn	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-14T02:12:46.160Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":18}	2022-06-14 04:12:47
jGNLesbMyKZaZhZp8v2YpAHE7U2bHlDg	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-14T02:17:43.359Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":18}	2022-06-14 04:17:44
1IMeJHWKGUQHwC12QvjWLQgL3LXiuQji	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-14T02:21:21.191Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":18}	2022-06-14 04:21:22
PQ8Pm1ddoemhe5jD6am_2wc3FMPrvhN6	{"cookie":{"originalMaxAge":7200000,"expires":"2022-06-14T02:21:58.743Z","secure":false,"httpOnly":false,"path":"/","sameSite":false},"userId":18}	2022-06-14 04:21:59
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (uid, name, email, password, secret, userstocks) FROM stdin;
19	Philipp_Laura	philipp@gmail.com	$2b$10$3tuM5AlUIX8QoaPZf.z5u.44xCcRE6pOm34DBrbUgLVftvSSyXzjS	Philipp Hager	\N
20	Kristof	kristof@gmail.com	$2b$10$2L4/ETJqUYr.fMdvX21IUuYMPIzT5ypxoFCL86/Vp0QyM6G7tIB92	Likes Ju	\N
18	Jaber__Dani	jaber.d03@htlwienwest.at	$2b$10$U2g35PkVJ.La3JpVWGG2Y.X3de/4Pf3M8wVaqE79DUaMYYp81Cphe	Dani Jaber	{TSLA}
\.


--
-- Name: users_uid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_uid_seq', 20, true);


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

