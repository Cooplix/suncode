--
-- PostgreSQL database dump
--

SET client_encoding = 'UTF8';
SET check_function_bodies = false;
SET client_min_messages = warning;

SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 2083 (class 1259 OID 392707)
-- Dependencies: 5
-- Name: tabela_testowa; Type: TABLE; Schema: public; Owner: postgres; Tablespace:
--

CREATE TABLE tabela_testowa
(
    id       bigint NOT NULL,
    kolumna1 character varying(256),
    kolumna2 character varying(256),
    kolumna3 character varying(256),
    kolumna4 bigint
);


ALTER TABLE public.tabela_testowa
    OWNER TO postgres;

--
-- TOC entry 2407 (class 0 OID 392707)
-- Dependencies: 2083
-- Data for Name: tabela_testowa; Type: TABLE DATA; Schema: public; Owner: postgres
--

insert into tabela_testowa
VALUES ('1', 'wartosc1', 'wartosc2', 'wartosc3', '1');
insert into tabela_testowa
VALUES ('2', 'wartosc21', 'wartosc22', 'wartosc23', '5');
insert into tabela_testowa
VALUES ('3', 'wartosc31', 'wartosc22', 'wartosc32', '6');
insert into tabela_testowa
VALUES ('4', 'wartosc54', 'wartosc43', 'wartosc45', '4');
insert into tabela_testowa
VALUES ('5', 'wartosc43', 'wartosc23', 'wartosc34', '4');
insert into tabela_testowa
VALUES ('6', 'wartosc43', 'wartosc54', 'wartosc43', '2');
insert into tabela_testowa
VALUES ('7', 'wartosc54', 'wartosc52', 'wartosc53', '8');
insert into tabela_testowa
VALUES ('8', 'wartosc21', 'wartosc2211', 'wartosc43', '4');
insert into tabela_testowa
VALUES ('9', 'wartosc43', 'wartosc33', 'wartosc45', '9');
insert into tabela_testowa
VALUES ('10', 'wartosc87', 'wartosc62', 'wartosc11', '3');



--
-- TOC entry 2406 (class 2606 OID 392713)
-- Dependencies: 2083 2083
-- Name: i1_constr; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace:
--

ALTER TABLE ONLY tabela_testowa
    ADD CONSTRAINT i1_constr PRIMARY KEY (id);