-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-03-2024 a las 23:51:57
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `coelstoi`
--
CREATE DATABASE IF NOT EXISTS `coelstoi` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `coelstoi`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `autor`
--

CREATE TABLE `autor` (
  `ID_AUTOR` int(11) NOT NULL,
  `NOMBRE` varchar(255) NOT NULL,
  `APELLIDO` varchar(255) NOT NULL,
  `EDAD` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `autor`
--

INSERT INTO `autor` (`ID_AUTOR`, `NOMBRE`, `APELLIDO`, `EDAD`) VALUES
(1, 'Autor1', 'apellidos1', 56),
(2, 'Autor2', 'app2', 34);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genero`
--

CREATE TABLE `genero` (
  `ID_GENERO` int(11) NOT NULL,
  `DESCRIPCION` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `genero`
--

INSERT INTO `genero` (`ID_GENERO`, `DESCRIPCION`) VALUES
(1, 'Terror');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genero_foraneo`
--

CREATE TABLE `genero_foraneo` (
  `ID_GENERO_FORANEO` int(11) NOT NULL,
  `ID_GENERO` int(11) NOT NULL,
  `ID_LIBRO` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `genero_foraneo`
--

INSERT INTO `genero_foraneo` (`ID_GENERO_FORANEO`, `ID_GENERO`, `ID_LIBRO`) VALUES
(1, 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagen`
--

CREATE TABLE `imagen` (
  `ID_IMA` int(11) NOT NULL,
  `ID_USUARIO` int(11) NOT NULL,
  `IMAGEN` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libro`
--

CREATE TABLE `libro` (
  `ID_LIBRO` int(11) NOT NULL,
  `TITULO` varchar(255) NOT NULL,
  `EDICION` int(11) NOT NULL,
  `ID_AUTOR` int(11) NOT NULL,
  `PAGINAS` int(11) NOT NULL,
  `AÑO_PUBLICACION` date NOT NULL,
  `SINOPSIS` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `libro`
--

INSERT INTO `libro` (`ID_LIBRO`, `TITULO`, `EDICION`, `ID_AUTOR`, `PAGINAS`, `AÑO_PUBLICACION`, `SINOPSIS`) VALUES
(1, 'El Principito', 1, 1, 300, '0000-00-00', ''),
(2, 'El Principito2', 2, 2, 213, '2009-02-25', 'sinopsis chida');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lista_foranea`
--

CREATE TABLE `lista_foranea` (
  `ID_LISTA_FORANEA` int(11) NOT NULL,
  `ID_LIBRO` int(11) NOT NULL,
  `ID_USUARIO` int(11) NOT NULL,
  `RESEÑA` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `ID_ROL` int(11) NOT NULL,
  `DESDCRIPCION` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`ID_ROL`, `DESDCRIPCION`) VALUES
(1, 'ADMINISTRADOR'),
(2, 'LECTOR');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `ID_USUARIO` int(11) NOT NULL,
  `NOMBRES` varchar(255) NOT NULL,
  `APELLIDOS` varchar(255) NOT NULL,
  `FOTO` longtext DEFAULT NULL,
  `CORREO` varchar(255) NOT NULL,
  `CONTRASEÑA` varchar(255) NOT NULL,
  `GENERO` varchar(255) NOT NULL,
  `ROL` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`ID_USUARIO`, `NOMBRES`, `APELLIDOS`, `FOTO`, `CORREO`, `CONTRASEÑA`, `GENERO`, `ROL`) VALUES
(3, 'Dario', 'Tirado', '', 'dario@gmail.com', 'dario1.', 'Masculino', 2),
(4, 'Pepe', 'Perez', '', 'pepe@gmail.com', 'Pepe123.', 'Otro', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `autor`
--
ALTER TABLE `autor`
  ADD PRIMARY KEY (`ID_AUTOR`);

--
-- Indices de la tabla `genero`
--
ALTER TABLE `genero`
  ADD PRIMARY KEY (`ID_GENERO`);

--
-- Indices de la tabla `genero_foraneo`
--
ALTER TABLE `genero_foraneo`
  ADD PRIMARY KEY (`ID_GENERO_FORANEO`),
  ADD KEY `FORANEO_GENERO` (`ID_GENERO`),
  ADD KEY `FORANEO_LIBRO` (`ID_LIBRO`);

--
-- Indices de la tabla `imagen`
--
ALTER TABLE `imagen`
  ADD PRIMARY KEY (`ID_IMA`);

--
-- Indices de la tabla `libro`
--
ALTER TABLE `libro`
  ADD PRIMARY KEY (`ID_LIBRO`),
  ADD KEY `LIBRO_AUTOR` (`ID_AUTOR`);

--
-- Indices de la tabla `lista_foranea`
--
ALTER TABLE `lista_foranea`
  ADD PRIMARY KEY (`ID_LISTA_FORANEA`),
  ADD KEY `LISTA_USUARIO` (`ID_USUARIO`),
  ADD KEY `LISTA_LIBRO` (`ID_LIBRO`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`ID_ROL`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`ID_USUARIO`),
  ADD KEY `USUARIO_ROL` (`ROL`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `autor`
--
ALTER TABLE `autor`
  MODIFY `ID_AUTOR` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `genero`
--
ALTER TABLE `genero`
  MODIFY `ID_GENERO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `genero_foraneo`
--
ALTER TABLE `genero_foraneo`
  MODIFY `ID_GENERO_FORANEO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `imagen`
--
ALTER TABLE `imagen`
  MODIFY `ID_IMA` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `libro`
--
ALTER TABLE `libro`
  MODIFY `ID_LIBRO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `lista_foranea`
--
ALTER TABLE `lista_foranea`
  MODIFY `ID_LISTA_FORANEA` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `ID_ROL` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `ID_USUARIO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `genero_foraneo`
--
ALTER TABLE `genero_foraneo`
  ADD CONSTRAINT `FORANEO_GENERO` FOREIGN KEY (`ID_GENERO`) REFERENCES `genero` (`ID_GENERO`),
  ADD CONSTRAINT `FORANEO_LIBRO` FOREIGN KEY (`ID_LIBRO`) REFERENCES `libro` (`ID_LIBRO`);

--
-- Filtros para la tabla `libro`
--
ALTER TABLE `libro`
  ADD CONSTRAINT `LIBRO_AUTOR` FOREIGN KEY (`ID_AUTOR`) REFERENCES `autor` (`ID_AUTOR`);

--
-- Filtros para la tabla `lista_foranea`
--
ALTER TABLE `lista_foranea`
  ADD CONSTRAINT `LISTA_LIBRO` FOREIGN KEY (`ID_LIBRO`) REFERENCES `libro` (`ID_LIBRO`),
  ADD CONSTRAINT `LISTA_USUARIO` FOREIGN KEY (`ID_USUARIO`) REFERENCES `usuario` (`ID_USUARIO`);

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `USUARIO_ROL` FOREIGN KEY (`ROL`) REFERENCES `rol` (`ID_ROL`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
