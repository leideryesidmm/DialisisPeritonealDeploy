-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-02-2024 a las 15:32:56
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
-- Base de datos: `dialisisperitoneal`
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
  `tension_arterial` varchar(255) NOT NULL,
  `trigliceridos` double NOT NULL,
  `cita` int(11) DEFAULT NULL,
  `peso` double NOT NULL,
  `peso_seco` double NOT NULL,
  `glucosa` double NOT NULL,
  `creatinina` double NOT NULL,
  `ktv` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cita`
--

CREATE TABLE `cita` (
  `id_cita` int(11) NOT NULL,
  `fecha` datetime DEFAULT NULL,
  `hora` datetime DEFAULT NULL,
  `medico` varchar(100) NOT NULL,
  `paciente` varchar(100) NOT NULL,
  `orificio_Salida` varchar(255) NOT NULL,
  `fecha_fin` datetime DEFAULT NULL,
  `finalizado` tinyint(1) NOT NULL DEFAULT 0
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
-- Estructura de tabla para la tabla `cuidador`
--

CREATE TABLE `cuidador` (
  `cedula_cuidador` varchar(100) NOT NULL,
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
  `cuidador` varchar(100) DEFAULT NULL,
  `paciente` varchar(100) DEFAULT NULL
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
(1, 'ASMETSALUD'),
(2, 'COMFAORIENTE'),
(3, 'COMPARTA'),
(4, 'COMPENSAR'),
(5, 'COOMEVA'),
(6, 'COOSALUD'),
(7, 'ECOOPSOS'),
(8, 'NUEVA EPS'),
(9, 'SANITAS'),
(10, 'ECOPETROL'),
(11, 'INPEC'),
(12, 'SANIDAD EJERCITO'),
(13, 'SANIDAD POLICIA USPRES DENOR'),
(14, 'UT FOSCAL FIDUPREVISORA'),
(15, 'Otro');

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
(1, 'Nefrología\r\n'),
(2, 'Medicina general'),
(3, 'Enfermería de diálisis'),
(4, 'Otra');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formula_medicamento`
--

CREATE TABLE `formula_medicamento` (
  `id_formula_medicamento` int(11) NOT NULL,
  `tomas` varchar(255) NOT NULL,
  `concentracion` varchar(50) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) NOT NULL,
  `via_administracion` int(11) NOT NULL,
  `paciente` varchar(100) DEFAULT NULL,
  `fecha_ini` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `recetado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medico`
--

CREATE TABLE `medico` (
  `cedula` varchar(100) NOT NULL,
  `especialidad` int(11) DEFAULT NULL,
  `profesion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

CREATE TABLE `paciente` (
  `altura` varchar(255) NOT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `eps` varchar(255) DEFAULT NULL,
  `fecha_nacimiento` datetime DEFAULT NULL,
  `ocupacion` varchar(255) DEFAULT NULL,
  `peso` varchar(255) NOT NULL,
  `peso_seco` varchar(255) NOT NULL,
  `rh` varchar(255) NOT NULL,
  `tipo_sangre` varchar(255) DEFAULT NULL,
  `cedula` varchar(100) NOT NULL,
  `diabetes` tinyint(1) NOT NULL,
  `hipertension` tinyint(1) NOT NULL,
  `cambio_contrasenia` tinyint(1) NOT NULL,
  `fecha_registro` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente_alergia`
--

CREATE TABLE `paciente_alergia` (
  `id_paciente_alergia` int(11) NOT NULL,
  `activo` bit(1) NOT NULL,
  `alergia` int(11) DEFAULT NULL,
  `paciente` varchar(100) DEFAULT NULL
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
(3, 'Hermano-Hermana'),
(4, 'Abuelo-Abuela'),
(5, 'Sobrino-Sobrina'),
(6, 'Cónyuge-Pareja'),
(7, 'Primo-Prima'),
(10, 'Nieto-Nieta'),
(11, 'Amigo-Amiga'),
(12, 'Tío-Tía'),
(13, 'Otro');

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
  `cita` int(11) NOT NULL,
  `noche_seca` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recambio`
--

CREATE TABLE `recambio` (
  `id_recambio` int(11) NOT NULL,
  `concentracion` varchar(255) NOT NULL,
  `intervalo_tiempo` varchar(255) DEFAULT '0',
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
  `fecha_real` datetime NOT NULL,
  `liquido_entrante` varchar(255) NOT NULL DEFAULT 'U2FsdGVkX19PmxGLlMkwxsdrBBfK6KSgnlfuSmhnrQo='
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `cedula` varchar(100) NOT NULL,
  `celular` varchar(255) DEFAULT NULL,
  `contrasenia` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `foto` longblob DEFAULT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `tipo_usuario` varchar(255) NOT NULL DEFAULT 'user',
  `activo` tinyint(1) NOT NULL,
  `tipo_documento` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(2, 'Nasal'),
(3, 'Sublingual'),
(4, 'Tópico'),
(5, 'Intranasal'),
(6, 'Intravenosa'),
(7, 'Intramuscular'),
(8, 'Subcutánea'),
(9, 'Intradérmica'),
(10, 'Intratecal');

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
  `cita` int(11) DEFAULT NULL,
  `entrenamiento` tinyint(1) NOT NULL,
  `reentrenamiento` tinyint(1) NOT NULL,
  `visita_domiciliaria` tinyint(1) NOT NULL
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
  ADD KEY `FK_Cita_Medico` (`medico`),
  ADD KEY `FK_Cita_Paciente` (`paciente`);

--
-- Indices de la tabla `clinica`
--
ALTER TABLE `clinica`
  ADD PRIMARY KEY (`id_clinica`);

--
-- Indices de la tabla `cuidador`
--
ALTER TABLE `cuidador`
  ADD PRIMARY KEY (`cedula_cuidador`),
  ADD KEY `FK_Cuidador_Parentesco` (`parentesco`);

--
-- Indices de la tabla `cuidador_paciente`
--
ALTER TABLE `cuidador_paciente`
  ADD PRIMARY KEY (`id_cuidador_paciente`),
  ADD KEY `FK_Cuidador_paciente_Cuidador` (`cuidador`),
  ADD KEY `FK_Cuidador_paciente_Paciente` (`paciente`);

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
  ADD KEY `FK_Formula_medicamento_Paciente` (`paciente`),
  ADD KEY `FK_via_administracion` (`via_administracion`);

--
-- Indices de la tabla `medico`
--
ALTER TABLE `medico`
  ADD PRIMARY KEY (`cedula`),
  ADD KEY `FK_Medico_Especialidad` (`especialidad`);

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
  ADD KEY `FK_Paciente_alergia_Alergia` (`alergia`),
  ADD KEY `FK_Paciente_alergia_Paciente` (`paciente`);

--
-- Indices de la tabla `parentesco`
--
ALTER TABLE `parentesco`
  ADD PRIMARY KEY (`id_parentesco`);

--
-- Indices de la tabla `prescripcion_dia`
--
ALTER TABLE `prescripcion_dia`
  ADD PRIMARY KEY (`id_prescripcion_dia`),
  ADD KEY `FK_prescripcionDia_cita` (`cita`) USING BTREE;

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
  ADD KEY `FK_Visita_especialista_Cita` (`cita`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alergia`
--
ALTER TABLE `alergia`
  MODIFY `id_alergia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `chequeomensual`
--
ALTER TABLE `chequeomensual`
  MODIFY `id_chequeo_mensual` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `cita`
--
ALTER TABLE `cita`
  MODIFY `id_cita` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- AUTO_INCREMENT de la tabla `clinica`
--
ALTER TABLE `clinica`
  MODIFY `id_clinica` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cuidador_paciente`
--
ALTER TABLE `cuidador_paciente`
  MODIFY `id_cuidador_paciente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT de la tabla `eps`
--
ALTER TABLE `eps`
  MODIFY `id_eps` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `especialidad`
--
ALTER TABLE `especialidad`
  MODIFY `id_especialidad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `formula_medicamento`
--
ALTER TABLE `formula_medicamento`
  MODIFY `id_formula_medicamento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `paciente_alergia`
--
ALTER TABLE `paciente_alergia`
  MODIFY `id_paciente_alergia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `parentesco`
--
ALTER TABLE `parentesco`
  MODIFY `id_parentesco` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `prescripcion_dia`
--
ALTER TABLE `prescripcion_dia`
  MODIFY `id_prescripcion_dia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT de la tabla `recambio`
--
ALTER TABLE `recambio`
  MODIFY `id_recambio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=187;

--
-- AUTO_INCREMENT de la tabla `recambio_hecho`
--
ALTER TABLE `recambio_hecho`
  MODIFY `id_recambio_hecho` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=279;

--
-- AUTO_INCREMENT de la tabla `via_administracion`
--
ALTER TABLE `via_administracion`
  MODIFY `id_via_administracion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `visita_especialista`
--
ALTER TABLE `visita_especialista`
  MODIFY `id_vista_especialista` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `chequeomensual`
--
ALTER TABLE `chequeomensual`
  ADD CONSTRAINT `FK_Chequeo_mensual_Cita_CST` FOREIGN KEY (`cita`) REFERENCES `cita` (`id_cita`);

--
-- Filtros para la tabla `cita`
--
ALTER TABLE `cita`
  ADD CONSTRAINT `FK_Cita_Medico_CST` FOREIGN KEY (`medico`) REFERENCES `medico` (`cedula`),
  ADD CONSTRAINT `FK_Cita_Paciente_CST` FOREIGN KEY (`paciente`) REFERENCES `paciente` (`cedula`);

--
-- Filtros para la tabla `cuidador`
--
ALTER TABLE `cuidador`
  ADD CONSTRAINT `FK_Cuidador_Parentesco_CST` FOREIGN KEY (`parentesco`) REFERENCES `parentesco` (`id_parentesco`);

--
-- Filtros para la tabla `cuidador_paciente`
--
ALTER TABLE `cuidador_paciente`
  ADD CONSTRAINT `FK_Cuidador_paciente_Cuidador_CST` FOREIGN KEY (`cuidador`) REFERENCES `cuidador` (`cedula_cuidador`),
  ADD CONSTRAINT `FK_Cuidador_paciente_Paciente_CST` FOREIGN KEY (`paciente`) REFERENCES `paciente` (`cedula`);

--
-- Filtros para la tabla `formula_medicamento`
--
ALTER TABLE `formula_medicamento`
  ADD CONSTRAINT `FK_Formula_medicamento_Paciente_CST` FOREIGN KEY (`paciente`) REFERENCES `paciente` (`cedula`);

--
-- Filtros para la tabla `medico`
--
ALTER TABLE `medico`
  ADD CONSTRAINT `FK_Medico_Especialidad_CST` FOREIGN KEY (`especialidad`) REFERENCES `especialidad` (`id_especialidad`),
  ADD CONSTRAINT `FK_Medico_Usuario_CST` FOREIGN KEY (`cedula`) REFERENCES `usuario` (`cedula`);

--
-- Filtros para la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD CONSTRAINT `FK_Paciente_Usuario_CST` FOREIGN KEY (`cedula`) REFERENCES `usuario` (`cedula`);

--
-- Filtros para la tabla `paciente_alergia`
--
ALTER TABLE `paciente_alergia`
  ADD CONSTRAINT `FK_Paciente_alergia_Alergia_CST` FOREIGN KEY (`alergia`) REFERENCES `alergia` (`id_alergia`),
  ADD CONSTRAINT `FK_Paciente_alergia_Paciente_CST` FOREIGN KEY (`paciente`) REFERENCES `paciente` (`cedula`);

--
-- Filtros para la tabla `prescripcion_dia`
--
ALTER TABLE `prescripcion_dia`
  ADD CONSTRAINT `FK_prescripcionDia_cita_CST` FOREIGN KEY (`cita`) REFERENCES `cita` (`id_cita`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `recambio`
--
ALTER TABLE `recambio`
  ADD CONSTRAINT `FK_recambio_prescripcion_dia_CST` FOREIGN KEY (`prescripcion_dia`) REFERENCES `prescripcion_dia` (`id_prescripcion_dia`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `recambio_hecho`
--
ALTER TABLE `recambio_hecho`
  ADD CONSTRAINT `	FK_recambio_hecho_recambio_CST` FOREIGN KEY (`recambio`) REFERENCES `recambio` (`id_recambio`);

--
-- Filtros para la tabla `visita_especialista`
--
ALTER TABLE `visita_especialista`
  ADD CONSTRAINT `FK_Visita_especialista_Cita_CST` FOREIGN KEY (`cita`) REFERENCES `cita` (`id_cita`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
