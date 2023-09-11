-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-09-2023 a las 21:31:21
-- Versión del servidor: 10.4.16-MariaDB
-- Versión de PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dialisisperitoneal3`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alergia`
--

CREATE TABLE `alergia` (
  `id_alergia` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chequeomensual`
--

CREATE TABLE `chequeomensual` (
  `id_chequeo_mensual` int(11) NOT NULL,
  `colesterol_total` double NOT NULL,
  `fosforo` double NOT NULL,
  `glicemia` double NOT NULL,
  `hdl` double NOT NULL,
  `hemoglobina` double NOT NULL,
  `ldh` double NOT NULL,
  `nitrogeno_ureico` double NOT NULL,
  `potasio` double NOT NULL,
  `tension_arterial` double NOT NULL,
  `trigliceridos` double NOT NULL,
  `cita` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cita`
--

CREATE TABLE `cita` (
  `id_cita` int(11) NOT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `hora` datetime DEFAULT NULL,
  `medico` varchar(255) NOT NULL,
  `paciente` varchar(255) NOT NULL,
  `orificio_Salida` varchar(15) NOT NULL,
  `noche_Seca` tinyint(1) NOT NULL,
  `fecha_fin` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clinica`
--

CREATE TABLE `clinica` (
  `id_clinica` int(11) NOT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cormobilidad`
--

CREATE TABLE `cormobilidad` (
  `id_cormobilidad` int(11) NOT NULL,
  `activo` bit(1) NOT NULL,
  `enfermedad` int(11) DEFAULT NULL,
  `paciente` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuidador`
--

CREATE TABLE `cuidador` (
  `cedula_cuidador` varchar(255) NOT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `parentesco` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuidador_paciente`
--

CREATE TABLE `cuidador_paciente` (
  `id_cuidador_paciente` int(11) NOT NULL,
  `activo` bit(1) NOT NULL,
  `fecha_fin` date DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `cuidador` varchar(255) DEFAULT NULL,
  `paciente` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `enfermedad`
--

CREATE TABLE `enfermedad` (
  `id_enfermedad` int(11) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eps`
--

CREATE TABLE `eps` (
  `id_eps` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `eps`
--

INSERT INTO `eps` (`id_eps`, `nombre`) VALUES
(1, 'Aliansalud Entidad Promotora de Salud S.A.'),
(2, 'Capital Salud'),
(3, 'Capresoca  E.P.S.'),
(4, 'Compensar E.P.S.'),
(5, 'Cooperativa de Salud y Desarrollo Ietegral Zona Sur Oriental de Cartagena'),
(6, 'E.P.S. Famisanar Ltda. '),
(7, 'E.P.S. Sanitas S.A.'),
(8, 'E.P.S. Servicio Occidental de Salud S.A.'),
(9, 'E.P.S. y Medicina Prepagada Suramericana S.A'),
(10, 'Fundación Salud Mia E.P.S.'),
(11, 'Mallamas'),
(12, 'Nueva Eps S.A.'),
(13, 'Salud Ttotal S.A. E.P.S.'),
(14, 'Saludvida S.A. E.P.S'),
(15, 'Savia Salud E.P.S.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especialidad`
--

CREATE TABLE `especialidad` (
  `id_especialidad` int(11) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `especialidad`
--

INSERT INTO `especialidad` (`id_especialidad`, `descripcion`) VALUES
(1, 'nefrologo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formula_medicamento`
--

CREATE TABLE `formula_medicamento` (
  `id_formula_medicamento` int(11) NOT NULL,
  `dosis` int(11) NOT NULL,
  `intervalo_tiempo` int(11) NOT NULL,
  `tomas` int(11) NOT NULL,
  `concentracion` varchar(50) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) NOT NULL,
  `via_administracion` int(11) NOT NULL,
  `paciente` varchar(255) DEFAULT NULL,
  `fecha_ini` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `recetado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medico`
--

CREATE TABLE `medico` (
  `anios_experiencia` int(11) NOT NULL,
  `cedula` varchar(255) NOT NULL,
  `especialidad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

CREATE TABLE `paciente` (
  `altura` int(11) NOT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `eps` varchar(255) DEFAULT NULL,
  `fecha_nacimiento` datetime DEFAULT NULL,
  `ocupacion` varchar(255) DEFAULT NULL,
  `peso` float NOT NULL,
  `peso_seco` float NOT NULL,
  `rh` char(1) NOT NULL,
  `tipo_sangre` varchar(255) DEFAULT NULL,
  `cedula` varchar(255) NOT NULL,
  `diabetes` tinyint(1) NOT NULL,
  `hipertension` tinyint(1) NOT NULL,
  `activo` tinyint(1) NOT NULL,
  `cambio_contrasenia` tinyint(1) NOT NULL,
  `tipo_documento` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente_alergia`
--

CREATE TABLE `paciente_alergia` (
  `id_paciente_alergia` int(11) NOT NULL,
  `activo` bit(1) NOT NULL,
  `alergia` int(11) DEFAULT NULL,
  `paciente` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `parentesco`
--

CREATE TABLE `parentesco` (
  `id_parentesco` int(11) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `parentesco`
--

INSERT INTO `parentesco` (`id_parentesco`, `descripcion`) VALUES
(1, 'Padre-Madre'),
(2, 'Hijo-Hija'),
(3, 'Tia-Tio'),
(4, 'Abuelo-Abuela'),
(5, 'Sobrino-Sobrina');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prescripcion`
--

CREATE TABLE `prescripcion` (
  `id_prescripcion` int(11) NOT NULL,
  `noche_seca` bit(1) NOT NULL,
  `orificio_salida` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `prescripcion`
--

INSERT INTO `prescripcion` (`id_prescripcion`, `noche_seca`, `orificio_salida`) VALUES
(1, b'0', 'perfecto'),
(2, b'0', 'perfecto'),
(3, b'0', 'perfecto'),
(4, b'0', 'bueno'),
(5, b'0', 'perfecto'),
(6, b'0', 'infeccionCronica'),
(7, b'0', 'infeccionAguda'),
(8, b'0', 'infeccionAguda'),
(9, b'0', 'infeccionAguda'),
(10, b'0', 'infeccionAguda'),
(11, b'0', 'infeccionAguda'),
(12, b'0', 'infeccionAguda'),
(13, b'0', 'infeccionAguda'),
(14, b'0', 'infeccionAguda'),
(15, b'0', 'infeccionAguda'),
(16, b'0', 'infeccionAguda'),
(17, b'0', 'infeccionCronica'),
(18, b'0', 'perfecto'),
(19, b'0', 'bueno'),
(20, b'0', 'bueno'),
(21, b'0', 'bueno'),
(22, b'0', 'bueno'),
(23, b'0', 'equivoco'),
(24, b'0', 'equivoco'),
(25, b'0', 'perfecto');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prescripcion_dia`
--

CREATE TABLE `prescripcion_dia` (
  `id_prescripcion_dia` int(11) NOT NULL,
  `lunes` tinyint(1) NOT NULL DEFAULT 0,
  `martes` tinyint(1) NOT NULL DEFAULT 0,
  `miercoles` tinyint(1) NOT NULL DEFAULT 0,
  `jueves` tinyint(1) NOT NULL DEFAULT 0,
  `viernes` tinyint(1) NOT NULL DEFAULT 0,
  `sabado` tinyint(1) NOT NULL DEFAULT 0,
  `domingo` tinyint(1) NOT NULL DEFAULT 0,
  `cita` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `programar_medicamento`
--

CREATE TABLE `programar_medicamento` (
  `id_programar_medicamento` int(11) NOT NULL,
  `fecha_fin` datetime DEFAULT NULL,
  `fecha_inicio` datetime DEFAULT NULL,
  `id_formula_medicamento` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recambio`
--

CREATE TABLE `recambio` (
  `id_recambio` int(11) NOT NULL,
  `concentracion` double NOT NULL,
  `drenaje_dialisis` double DEFAULT 0,
  `intervalo_tiempo` tinyint(100) DEFAULT 0,
  `fecha` datetime DEFAULT NULL,
  `hora` datetime DEFAULT NULL,
  `realizada` bit(1) NOT NULL DEFAULT b'0',
  `prescripcion_dia` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recambio_hecho`
--

CREATE TABLE `recambio_hecho` (
  `id_recambio_hecho` int(11) NOT NULL,
  `recambio` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `hora_ini` datetime NOT NULL,
  `drenaje_dialisis` varchar(255) NOT NULL,
  `orificio_salida` varchar(255) NOT NULL,
  `caracteristica_liquido` varchar(255) NOT NULL,
  `hora_fin` datetime NOT NULL,
  `fecha_real` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tomamedicamento`
--

CREATE TABLE `tomamedicamento` (
  `id_toma_medicamento` int(11) NOT NULL,
  `hora` datetime DEFAULT NULL,
  `tomado` bit(1) NOT NULL,
  `programar_medicamento` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `cedula` varchar(255) NOT NULL,
  `celular` varchar(255) DEFAULT NULL,
  `contrasenia` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `foto` longblob DEFAULT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `tipo_usuario` varchar(20) NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`cedula`, `celular`, `contrasenia`, `nombre`, `foto`, `correo`, `tipo_usuario`) VALUES
('U2FsdGVkX1+WtowPCLxfg3j46OXnOrv+JlaeF12xcK4=', 'U2FsdGVkX1/tWHfK+iIM+HeLAIJdcaHyO17vQtnUXqw=', 'U2FsdGVkX1+WtowPCLxfg3j46OXnOrv+JlaeF12xcK4=', 'U2FsdGVkX18WlNT5yxZEL1+4XiA6XsqqDg0wAHzsTggwAfG/AUQeBRVBiAEnolPy', NULL, 'U2FsdGVkX18IkPYNLAfbs4Gi8zbjaXUw/CMnzPjY/hKIzZl6tPAhsJBF+2nhVPFr', 'admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `via_administracion`
--

CREATE TABLE `via_administracion` (
  `id_via_administracion` int(11) NOT NULL,
  `descripcion` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `via_administracion`
--

INSERT INTO `via_administracion` (`id_via_administracion`, `descripcion`) VALUES
(1, 'Oral'),
(2, 'Nasal');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `visita_especialista`
--

CREATE TABLE `visita_especialista` (
  `id_vista_especialista` int(11) NOT NULL,
  `auxiliar_admisiones` bit(1) NOT NULL,
  `enfermeria` bit(1) NOT NULL,
  `farmacia` bit(1) NOT NULL,
  `nefrologia` bit(1) NOT NULL,
  `nutricion` bit(1) NOT NULL,
  `psicologia` bit(1) NOT NULL,
  `trabajo_social` bit(1) NOT NULL,
  `cita` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alergia`
--
ALTER TABLE `alergia`
  ADD PRIMARY KEY (`id_alergia`);

--
-- Indices de la tabla `chequeomensual`
--
ALTER TABLE `chequeomensual`
  ADD PRIMARY KEY (`id_chequeo_mensual`),
  ADD KEY `FK_chequeo_cita` (`cita`) USING BTREE;

--
-- Indices de la tabla `cita`
--
ALTER TABLE `cita`
  ADD PRIMARY KEY (`id_cita`),
  ADD KEY `FKgs8wo7s3vo89t9u3a5teggm9w` (`medico`),
  ADD KEY `FKfmrrim6y83msalmsuxpl1cp64` (`paciente`);

--
-- Indices de la tabla `clinica`
--
ALTER TABLE `clinica`
  ADD PRIMARY KEY (`id_clinica`);

--
-- Indices de la tabla `cormobilidad`
--
ALTER TABLE `cormobilidad`
  ADD PRIMARY KEY (`id_cormobilidad`),
  ADD KEY `FKa7rxbjsxc7dhk7s2x3md40vyw` (`enfermedad`),
  ADD KEY `FKqqwjbr89ukffvx9rm1j3wpm91` (`paciente`);

--
-- Indices de la tabla `cuidador`
--
ALTER TABLE `cuidador`
  ADD PRIMARY KEY (`cedula_cuidador`),
  ADD KEY `FK56kn4wdic30s0n96fd8696kml` (`parentesco`);

--
-- Indices de la tabla `cuidador_paciente`
--
ALTER TABLE `cuidador_paciente`
  ADD PRIMARY KEY (`id_cuidador_paciente`),
  ADD KEY `FKlwytl0pksb0dr23rdpql4xwq1` (`cuidador`),
  ADD KEY `FKreml6o4u3bgfxy32y0kiwot4g` (`paciente`);

--
-- Indices de la tabla `enfermedad`
--
ALTER TABLE `enfermedad`
  ADD PRIMARY KEY (`id_enfermedad`);

--
-- Indices de la tabla `eps`
--
ALTER TABLE `eps`
  ADD PRIMARY KEY (`id_eps`);

--
-- Indices de la tabla `especialidad`
--
ALTER TABLE `especialidad`
  ADD PRIMARY KEY (`id_especialidad`);

--
-- Indices de la tabla `formula_medicamento`
--
ALTER TABLE `formula_medicamento`
  ADD PRIMARY KEY (`id_formula_medicamento`),
  ADD KEY `FK1athkyx1plysca3tho0d0vp8q` (`paciente`),
  ADD KEY `FK_via_administracion` (`via_administracion`);

--
-- Indices de la tabla `medico`
--
ALTER TABLE `medico`
  ADD PRIMARY KEY (`cedula`),
  ADD KEY `FK5hlhe25vpur7idm70f0pt14ud` (`especialidad`);

--
-- Indices de la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`cedula`);

--
-- Indices de la tabla `paciente_alergia`
--
ALTER TABLE `paciente_alergia`
  ADD PRIMARY KEY (`id_paciente_alergia`),
  ADD KEY `FKjujae20eauk1dx77fkwjfdi3s` (`alergia`),
  ADD KEY `FK2wdyqp7r35g1jm130e6b5ly6e` (`paciente`);

--
-- Indices de la tabla `parentesco`
--
ALTER TABLE `parentesco`
  ADD PRIMARY KEY (`id_parentesco`);

--
-- Indices de la tabla `prescripcion`
--
ALTER TABLE `prescripcion`
  ADD PRIMARY KEY (`id_prescripcion`);

--
-- Indices de la tabla `prescripcion_dia`
--
ALTER TABLE `prescripcion_dia`
  ADD PRIMARY KEY (`id_prescripcion_dia`),
  ADD KEY `FK_prescripcionDia_cita` (`cita`) USING BTREE;

--
-- Indices de la tabla `programar_medicamento`
--
ALTER TABLE `programar_medicamento`
  ADD PRIMARY KEY (`id_programar_medicamento`),
  ADD KEY `FKhp1mtabora7samc4hlhmwc5cr` (`id_formula_medicamento`);

--
-- Indices de la tabla `recambio`
--
ALTER TABLE `recambio`
  ADD PRIMARY KEY (`id_recambio`),
  ADD KEY `FK_recambio_prescripcion_dia` (`prescripcion_dia`) USING BTREE;

--
-- Indices de la tabla `recambio_hecho`
--
ALTER TABLE `recambio_hecho`
  ADD PRIMARY KEY (`id_recambio_hecho`),
  ADD KEY `FK_recambio_hecho_recambio` (`recambio`);

--
-- Indices de la tabla `tomamedicamento`
--
ALTER TABLE `tomamedicamento`
  ADD PRIMARY KEY (`id_toma_medicamento`),
  ADD KEY `FKddugmghmxciukoglqr3r9vgp3` (`programar_medicamento`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`cedula`);

--
-- Indices de la tabla `via_administracion`
--
ALTER TABLE `via_administracion`
  ADD PRIMARY KEY (`id_via_administracion`);

--
-- Indices de la tabla `visita_especialista`
--
ALTER TABLE `visita_especialista`
  ADD PRIMARY KEY (`id_vista_especialista`),
  ADD KEY `FK3ix74qotkin7viv90f5p8kyuq` (`cita`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alergia`
--
ALTER TABLE `alergia`
  MODIFY `id_alergia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `cita`
--
ALTER TABLE `cita`
  MODIFY `id_cita` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `clinica`
--
ALTER TABLE `clinica`
  MODIFY `id_clinica` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cormobilidad`
--
ALTER TABLE `cormobilidad`
  MODIFY `id_cormobilidad` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cuidador_paciente`
--
ALTER TABLE `cuidador_paciente`
  MODIFY `id_cuidador_paciente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `enfermedad`
--
ALTER TABLE `enfermedad`
  MODIFY `id_enfermedad` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `eps`
--
ALTER TABLE `eps`
  MODIFY `id_eps` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `especialidad`
--
ALTER TABLE `especialidad`
  MODIFY `id_especialidad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `formula_medicamento`
--
ALTER TABLE `formula_medicamento`
  MODIFY `id_formula_medicamento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `paciente_alergia`
--
ALTER TABLE `paciente_alergia`
  MODIFY `id_paciente_alergia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `parentesco`
--
ALTER TABLE `parentesco`
  MODIFY `id_parentesco` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `prescripcion`
--
ALTER TABLE `prescripcion`
  MODIFY `id_prescripcion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `prescripcion_dia`
--
ALTER TABLE `prescripcion_dia`
  MODIFY `id_prescripcion_dia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `programar_medicamento`
--
ALTER TABLE `programar_medicamento`
  MODIFY `id_programar_medicamento` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `recambio`
--
ALTER TABLE `recambio`
  MODIFY `id_recambio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `recambio_hecho`
--
ALTER TABLE `recambio_hecho`
  MODIFY `id_recambio_hecho` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT de la tabla `tomamedicamento`
--
ALTER TABLE `tomamedicamento`
  MODIFY `id_toma_medicamento` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `via_administracion`
--
ALTER TABLE `via_administracion`
  MODIFY `id_via_administracion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `visita_especialista`
--
ALTER TABLE `visita_especialista`
  MODIFY `id_vista_especialista` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `chequeomensual`
--
ALTER TABLE `chequeomensual`
  ADD CONSTRAINT `FKqydk5jipybax3irrofwr0h5hy` FOREIGN KEY (`cita`) REFERENCES `cita` (`id_cita`);

--
-- Filtros para la tabla `cita`
--
ALTER TABLE `cita`
  ADD CONSTRAINT `FKfmrrim6y83msalmsuxpl1cp64` FOREIGN KEY (`paciente`) REFERENCES `paciente` (`cedula`),
  ADD CONSTRAINT `FKgs8wo7s3vo89t9u3a5teggm9w` FOREIGN KEY (`medico`) REFERENCES `medico` (`cedula`);

--
-- Filtros para la tabla `cormobilidad`
--
ALTER TABLE `cormobilidad`
  ADD CONSTRAINT `FKa7rxbjsxc7dhk7s2x3md40vyw` FOREIGN KEY (`enfermedad`) REFERENCES `enfermedad` (`id_enfermedad`),
  ADD CONSTRAINT `FKqqwjbr89ukffvx9rm1j3wpm91` FOREIGN KEY (`paciente`) REFERENCES `paciente` (`cedula`);

--
-- Filtros para la tabla `cuidador`
--
ALTER TABLE `cuidador`
  ADD CONSTRAINT `FK56kn4wdic30s0n96fd8696kml` FOREIGN KEY (`parentesco`) REFERENCES `parentesco` (`id_parentesco`);

--
-- Filtros para la tabla `cuidador_paciente`
--
ALTER TABLE `cuidador_paciente`
  ADD CONSTRAINT `FKlwytl0pksb0dr23rdpql4xwq1` FOREIGN KEY (`cuidador`) REFERENCES `cuidador` (`cedula_cuidador`),
  ADD CONSTRAINT `FKreml6o4u3bgfxy32y0kiwot4g` FOREIGN KEY (`paciente`) REFERENCES `paciente` (`cedula`);

--
-- Filtros para la tabla `formula_medicamento`
--
ALTER TABLE `formula_medicamento`
  ADD CONSTRAINT `FK1athkyx1plysca3tho0d0vp8q` FOREIGN KEY (`paciente`) REFERENCES `paciente` (`cedula`);

--
-- Filtros para la tabla `medico`
--
ALTER TABLE `medico`
  ADD CONSTRAINT `FK5hlhe25vpur7idm70f0pt14ud` FOREIGN KEY (`especialidad`) REFERENCES `especialidad` (`id_especialidad`),
  ADD CONSTRAINT `FKad17nhr3i3scxmlyh2bro2b42` FOREIGN KEY (`cedula`) REFERENCES `usuario` (`cedula`);

--
-- Filtros para la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD CONSTRAINT `FKn2m5c5odg8pcnfo3oa0g8spd3` FOREIGN KEY (`cedula`) REFERENCES `usuario` (`cedula`);

--
-- Filtros para la tabla `paciente_alergia`
--
ALTER TABLE `paciente_alergia`
  ADD CONSTRAINT `FK2wdyqp7r35g1jm130e6b5ly6e` FOREIGN KEY (`paciente`) REFERENCES `paciente` (`cedula`),
  ADD CONSTRAINT `FKjujae20eauk1dx77fkwjfdi3s` FOREIGN KEY (`alergia`) REFERENCES `alergia` (`id_alergia`);

--
-- Filtros para la tabla `prescripcion_dia`
--
ALTER TABLE `prescripcion_dia`
  ADD CONSTRAINT `FK_prescripcionDia_cita` FOREIGN KEY (`cita`) REFERENCES `cita` (`id_cita`);

--
-- Filtros para la tabla `programar_medicamento`
--
ALTER TABLE `programar_medicamento`
  ADD CONSTRAINT `FKhp1mtabora7samc4hlhmwc5cr` FOREIGN KEY (`id_formula_medicamento`) REFERENCES `formula_medicamento` (`id_formula_medicamento`);

--
-- Filtros para la tabla `recambio`
--
ALTER TABLE `recambio`
  ADD CONSTRAINT `FK_recambio_prescripcion_dia` FOREIGN KEY (`prescripcion_dia`) REFERENCES `prescripcion_dia` (`id_prescripcion_dia`);

--
-- Filtros para la tabla `recambio_hecho`
--
ALTER TABLE `recambio_hecho`
  ADD CONSTRAINT `	FK_recambio_hecho_recambio` FOREIGN KEY (`recambio`) REFERENCES `recambio` (`id_recambio`);

--
-- Filtros para la tabla `tomamedicamento`
--
ALTER TABLE `tomamedicamento`
  ADD CONSTRAINT `FKddugmghmxciukoglqr3r9vgp3` FOREIGN KEY (`programar_medicamento`) REFERENCES `programar_medicamento` (`id_programar_medicamento`);

--
-- Filtros para la tabla `visita_especialista`
--
ALTER TABLE `visita_especialista`
  ADD CONSTRAINT `FK3ix74qotkin7viv90f5p8kyuq` FOREIGN KEY (`cita`) REFERENCES `cita` (`id_cita`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
