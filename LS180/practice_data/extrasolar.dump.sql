--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Homebrew)
-- Dumped by pg_dump version 15.1 (Homebrew)

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
-- Name: valid_spectral_type; Type: TYPE; Schema: public; Owner: haroldcamacho
--

CREATE TYPE public.valid_spectral_type AS ENUM (
    'O',
    'B',
    'A',
    'F',
    'G',
    'K',
    'M'
);


ALTER TYPE public.valid_spectral_type OWNER TO haroldcamacho;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: moon; Type: TABLE; Schema: public; Owner: haroldcamacho
--

CREATE TABLE public.moon (
    id integer NOT NULL,
    designation integer NOT NULL,
    semi_major_axis numeric,
    mass numeric,
    planet_id integer NOT NULL,
    CONSTRAINT moon_designation_check CHECK ((designation > 0)),
    CONSTRAINT moon_mass_check CHECK ((mass > 0.0)),
    CONSTRAINT moon_semi_major_axis_check CHECK ((semi_major_axis > 0.0))
);


ALTER TABLE public.moon OWNER TO haroldcamacho;

--
-- Name: moon_id_seq; Type: SEQUENCE; Schema: public; Owner: haroldcamacho
--

CREATE SEQUENCE public.moon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.moon_id_seq OWNER TO haroldcamacho;

--
-- Name: moon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: haroldcamacho
--

ALTER SEQUENCE public.moon_id_seq OWNED BY public.moon.id;


--
-- Name: planets; Type: TABLE; Schema: public; Owner: haroldcamacho
--

CREATE TABLE public.planets (
    id integer NOT NULL,
    designation character varying(1) NOT NULL,
    mass numeric NOT NULL,
    star_id integer NOT NULL,
    semi_major_axis numeric,
    CONSTRAINT planets_mass_check CHECK ((mass > 0.0))
);


ALTER TABLE public.planets OWNER TO haroldcamacho;

--
-- Name: planets_id_seq; Type: SEQUENCE; Schema: public; Owner: haroldcamacho
--

CREATE SEQUENCE public.planets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planets_id_seq OWNER TO haroldcamacho;

--
-- Name: planets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: haroldcamacho
--

ALTER SEQUENCE public.planets_id_seq OWNED BY public.planets.id;


--
-- Name: stars; Type: TABLE; Schema: public; Owner: haroldcamacho
--

CREATE TABLE public.stars (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    distance numeric NOT NULL,
    spectral_type public.valid_spectral_type NOT NULL,
    companions integer NOT NULL,
    CONSTRAINT stars_companions_check CHECK ((companions >= 0)),
    CONSTRAINT stars_distance_check CHECK ((distance > (0)::numeric))
);


ALTER TABLE public.stars OWNER TO haroldcamacho;

--
-- Name: stars_id_seq; Type: SEQUENCE; Schema: public; Owner: haroldcamacho
--

CREATE SEQUENCE public.stars_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.stars_id_seq OWNER TO haroldcamacho;

--
-- Name: stars_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: haroldcamacho
--

ALTER SEQUENCE public.stars_id_seq OWNED BY public.stars.id;


--
-- Name: moon id; Type: DEFAULT; Schema: public; Owner: haroldcamacho
--

ALTER TABLE ONLY public.moon ALTER COLUMN id SET DEFAULT nextval('public.moon_id_seq'::regclass);


--
-- Name: planets id; Type: DEFAULT; Schema: public; Owner: haroldcamacho
--

ALTER TABLE ONLY public.planets ALTER COLUMN id SET DEFAULT nextval('public.planets_id_seq'::regclass);


--
-- Name: stars id; Type: DEFAULT; Schema: public; Owner: haroldcamacho
--

ALTER TABLE ONLY public.stars ALTER COLUMN id SET DEFAULT nextval('public.stars_id_seq'::regclass);


--
-- Data for Name: moon; Type: TABLE DATA; Schema: public; Owner: haroldcamacho
--



--
-- Data for Name: planets; Type: TABLE DATA; Schema: public; Owner: haroldcamacho
--

INSERT INTO public.planets VALUES (2, 'b', 0.0036, 6, 0.4);
INSERT INTO public.planets VALUES (3, 'c', 0.1, 7, 40);


--
-- Data for Name: stars; Type: TABLE DATA; Schema: public; Owner: haroldcamacho
--

INSERT INTO public.stars VALUES (6, 'Alpha Centauri B', 4.37, 'K', 3);
INSERT INTO public.stars VALUES (7, 'Epsilon Eridani', 10.5, 'K', 0);


--
-- Name: moon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: haroldcamacho
--

SELECT pg_catalog.setval('public.moon_id_seq', 1, false);


--
-- Name: planets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: haroldcamacho
--

SELECT pg_catalog.setval('public.planets_id_seq', 3, true);


--
-- Name: stars_id_seq; Type: SEQUENCE SET; Schema: public; Owner: haroldcamacho
--

SELECT pg_catalog.setval('public.stars_id_seq', 7, true);


--
-- Name: moon moon_pkey; Type: CONSTRAINT; Schema: public; Owner: haroldcamacho
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_pkey PRIMARY KEY (id);


--
-- Name: planets planets_pkey; Type: CONSTRAINT; Schema: public; Owner: haroldcamacho
--

ALTER TABLE ONLY public.planets
    ADD CONSTRAINT planets_pkey PRIMARY KEY (id);


--
-- Name: stars stars_name_key; Type: CONSTRAINT; Schema: public; Owner: haroldcamacho
--

ALTER TABLE ONLY public.stars
    ADD CONSTRAINT stars_name_key UNIQUE (name);


--
-- Name: stars stars_pkey; Type: CONSTRAINT; Schema: public; Owner: haroldcamacho
--

ALTER TABLE ONLY public.stars
    ADD CONSTRAINT stars_pkey PRIMARY KEY (id);


--
-- Name: planets unique_val; Type: CONSTRAINT; Schema: public; Owner: haroldcamacho
--

ALTER TABLE ONLY public.planets
    ADD CONSTRAINT unique_val UNIQUE (designation);


--
-- Name: moon moon_planet_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: haroldcamacho
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_planet_id_fkey FOREIGN KEY (planet_id) REFERENCES public.planets(id);


--
-- Name: planets planets_star_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: haroldcamacho
--

ALTER TABLE ONLY public.planets
    ADD CONSTRAINT planets_star_id_fkey FOREIGN KEY (star_id) REFERENCES public.stars(id);


--
-- PostgreSQL database dump complete
--

