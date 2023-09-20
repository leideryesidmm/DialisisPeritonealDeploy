-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 20, 2023 at 02:23 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dialisisperitoneal3`
--

-- --------------------------------------------------------

--
-- Table structure for table `alergia`
--

CREATE TABLE `alergia` (
  `id_alergia` int NOT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `chequeomensual`
--

CREATE TABLE `chequeomensual` (
  `id_chequeo_mensual` int NOT NULL,
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
  `cita` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cita`
--

CREATE TABLE `cita` (
  `id_cita` int NOT NULL,
  `fecha` datetime DEFAULT NULL,
  `hora` datetime DEFAULT NULL,
  `medico` varchar(100) NOT NULL,
  `paciente` varchar(100) NOT NULL,
  `orificio_Salida` varchar(15) NOT NULL,
  `fecha_fin` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `clinica`
--

CREATE TABLE `clinica` (
  `id_clinica` int NOT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cuidador`
--

CREATE TABLE `cuidador` (
  `cedula_cuidador` varchar(100) NOT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `parentesco` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cuidador_paciente`
--

CREATE TABLE `cuidador_paciente` (
  `id_cuidador_paciente` int NOT NULL,
  `activo` bit(1) NOT NULL,
  `fecha_fin` date DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `cuidador` varchar(100) DEFAULT NULL,
  `paciente` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `eps`
--

CREATE TABLE `eps` (
  `id_eps` int NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `eps`
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
(14, 'UT FOSCAL FIDUPREVISORA');

-- --------------------------------------------------------

--
-- Table structure for table `especialidad`
--

CREATE TABLE `especialidad` (
  `id_especialidad` int NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `especialidad`
--

INSERT INTO `especialidad` (`id_especialidad`, `descripcion`) VALUES
(1, 'Nefrología'),
(2, 'Enfermería');

-- --------------------------------------------------------

--
-- Table structure for table `formula_medicamento`
--

CREATE TABLE `formula_medicamento` (
  `id_formula_medicamento` int NOT NULL,
  `dosis` int NOT NULL,
  `intervalo_tiempo` int NOT NULL,
  `tomas` int NOT NULL,
  `concentracion` varchar(50) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) NOT NULL,
  `via_administracion` int NOT NULL,
  `paciente` varchar(100) DEFAULT NULL,
  `fecha_ini` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `recetado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `medico`
--

CREATE TABLE `medico` (
  `anios_experiencia` int NOT NULL,
  `cedula` varchar(100) NOT NULL,
  `especialidad` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `paciente`
--

CREATE TABLE `paciente` (
  `altura` int NOT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `eps` varchar(255) DEFAULT NULL,
  `fecha_nacimiento` datetime DEFAULT NULL,
  `ocupacion` varchar(255) DEFAULT NULL,
  `peso` float NOT NULL,
  `peso_seco` float NOT NULL,
  `rh` char(1) NOT NULL,
  `tipo_sangre` varchar(255) DEFAULT NULL,
  `cedula` varchar(100) NOT NULL,
  `diabetes` tinyint(1) NOT NULL,
  `hipertension` tinyint(1) NOT NULL,
  `cambio_contrasenia` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `paciente_alergia`
--

CREATE TABLE `paciente_alergia` (
  `id_paciente_alergia` int NOT NULL,
  `activo` bit(1) NOT NULL,
  `alergia` int DEFAULT NULL,
  `paciente` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `parentesco`
--

CREATE TABLE `parentesco` (
  `id_parentesco` int NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `parentesco`
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
-- Table structure for table `prescripcion_dia`
--

CREATE TABLE `prescripcion_dia` (
  `id_prescripcion_dia` int NOT NULL,
  `lunes` tinyint(1) NOT NULL DEFAULT '0',
  `martes` tinyint(1) NOT NULL DEFAULT '0',
  `miercoles` tinyint(1) NOT NULL DEFAULT '0',
  `jueves` tinyint(1) NOT NULL DEFAULT '0',
  `viernes` tinyint(1) NOT NULL DEFAULT '0',
  `sabado` tinyint(1) NOT NULL DEFAULT '0',
  `domingo` tinyint(1) NOT NULL DEFAULT '0',
  `cita` int NOT NULL,
  `noche_seca` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `recambio`
--

CREATE TABLE `recambio` (
  `id_recambio` int NOT NULL,
  `concentracion` double NOT NULL,
  `intervalo_tiempo` tinyint DEFAULT '0',
  `prescripcion_dia` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `recambio_hecho`
--

CREATE TABLE `recambio_hecho` (
  `id_recambio_hecho` int NOT NULL,
  `recambio` int NOT NULL,
  `fecha` datetime NOT NULL,
  `hora_ini` datetime NOT NULL,
  `drenaje_dialisis` varchar(255) NOT NULL,
  `orificio_salida` varchar(255) NOT NULL,
  `caracteristica_liquido` varchar(255) NOT NULL,
  `hora_fin` datetime NOT NULL,
  `fecha_real` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `cedula` varchar(100) NOT NULL,
  `celular` varchar(255) DEFAULT NULL,
  `contrasenia` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `foto` longblob,
  `correo` varchar(255) DEFAULT NULL,
  `tipo_usuario` varchar(100) NOT NULL DEFAULT 'user',
  `activo` tinyint(1) NOT NULL,
  `tipo_documento` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`cedula`, `celular`, `contrasenia`, `nombre`, `foto`, `correo`, `tipo_usuario`, `activo`, `tipo_documento`) VALUES
('U2FsdGVkX1+WtowPCLxfg3j46OXnOrv+JlaeF12xcK4=', 'U2FsdGVkX1/tWHfK+iIM+HeLAIJdcaHyO17vQtnUXqw=', 'U2FsdGVkX1+WtowPCLxfg3j46OXnOrv+JlaeF12xcK4=', 'U2FsdGVkX18WlNT5yxZEL1+4XiA6XsqqDg0wAHzsTggwAfG/AUQeBRVBiAEnolPy', NULL, 'U2FsdGVkX18IkPYNLAfbs4Gi8zbjaXUw/CMnzPjY/hKIzZl6tPAhsJBF+2nhVPFr', 'admin', 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `via_administracion`
--

CREATE TABLE `via_administracion` (
  `id_via_administracion` int NOT NULL,
  `descripcion` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `via_administracion`
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
-- Table structure for table `visita_especialista`
--

CREATE TABLE `visita_especialista` (
  `id_vista_especialista` int NOT NULL,
  `auxiliar_admisiones` bit(1) NOT NULL,
  `enfermeria` bit(1) NOT NULL,
  `farmacia` bit(1) NOT NULL,
  `nefrologia` bit(1) NOT NULL,
  `nutricion` bit(1) NOT NULL,
  `psicologia` bit(1) NOT NULL,
  `trabajo_social` bit(1) NOT NULL,
  `cita` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alergia`
--
ALTER TABLE `alergia`
  ADD PRIMARY KEY (`id_alergia`);

--
-- Indexes for table `chequeomensual`
--
ALTER TABLE `chequeomensual`
  ADD PRIMARY KEY (`id_chequeo_mensual`),
  ADD KEY `FK_chequeo_cita` (`cita`) USING BTREE;

--
-- Indexes for table `cita`
--
ALTER TABLE `cita`
  ADD PRIMARY KEY (`id_cita`),
  ADD KEY `FK_Cita_Medico` (`medico`),
  ADD KEY `FK_Cita_Paciente` (`paciente`);

--
-- Indexes for table `clinica`
--
ALTER TABLE `clinica`
  ADD PRIMARY KEY (`id_clinica`);

--
-- Indexes for table `cuidador`
--
ALTER TABLE `cuidador`
  ADD PRIMARY KEY (`cedula_cuidador`),
  ADD KEY `FK_Cuidador_Parentesco` (`parentesco`);

--
-- Indexes for table `cuidador_paciente`
--
ALTER TABLE `cuidador_paciente`
  ADD PRIMARY KEY (`id_cuidador_paciente`),
  ADD KEY `FK_Cuidador_paciente_Cuidador` (`cuidador`),
  ADD KEY `FK_Cuidador_paciente_Paciente` (`paciente`);

--
-- Indexes for table `eps`
--
ALTER TABLE `eps`
  ADD PRIMARY KEY (`id_eps`);

--
-- Indexes for table `especialidad`
--
ALTER TABLE `especialidad`
  ADD PRIMARY KEY (`id_especialidad`);

--
-- Indexes for table `formula_medicamento`
--
ALTER TABLE `formula_medicamento`
  ADD PRIMARY KEY (`id_formula_medicamento`),
  ADD KEY `FK_Formula_medicamento_Paciente` (`paciente`),
  ADD KEY `FK_via_administracion` (`via_administracion`);

--
-- Indexes for table `medico`
--
ALTER TABLE `medico`
  ADD PRIMARY KEY (`cedula`),
  ADD KEY `FK_Medico_Especialidad` (`especialidad`);

--
-- Indexes for table `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`cedula`);

--
-- Indexes for table `paciente_alergia`
--
ALTER TABLE `paciente_alergia`
  ADD PRIMARY KEY (`id_paciente_alergia`),
  ADD KEY `FK_Paciente_alergia_Alergia` (`alergia`),
  ADD KEY `FK_Paciente_alergia_Paciente` (`paciente`);

--
-- Indexes for table `parentesco`
--
ALTER TABLE `parentesco`
  ADD PRIMARY KEY (`id_parentesco`);

--
-- Indexes for table `prescripcion_dia`
--
ALTER TABLE `prescripcion_dia`
  ADD PRIMARY KEY (`id_prescripcion_dia`),
  ADD KEY `FK_prescripcionDia_cita` (`cita`) USING BTREE;

--
-- Indexes for table `recambio`
--
ALTER TABLE `recambio`
  ADD PRIMARY KEY (`id_recambio`),
  ADD KEY `FK_recambio_prescripcion_dia` (`prescripcion_dia`) USING BTREE;

--
-- Indexes for table `recambio_hecho`
--
ALTER TABLE `recambio_hecho`
  ADD PRIMARY KEY (`id_recambio_hecho`),
  ADD KEY `FK_recambio_hecho_recambio` (`recambio`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`cedula`);

--
-- Indexes for table `via_administracion`
--
ALTER TABLE `via_administracion`
  ADD PRIMARY KEY (`id_via_administracion`);

--
-- Indexes for table `visita_especialista`
--
ALTER TABLE `visita_especialista`
  ADD PRIMARY KEY (`id_vista_especialista`),
  ADD KEY `FK_Visita_especialista_Cita` (`cita`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alergia`
--
ALTER TABLE `alergia`
  MODIFY `id_alergia` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cita`
--
ALTER TABLE `cita`
  MODIFY `id_cita` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `clinica`
--
ALTER TABLE `clinica`
  MODIFY `id_clinica` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cuidador_paciente`
--
ALTER TABLE `cuidador_paciente`
  MODIFY `id_cuidador_paciente` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `eps`
--
ALTER TABLE `eps`
  MODIFY `id_eps` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `especialidad`
--
ALTER TABLE `especialidad`
  MODIFY `id_especialidad` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `formula_medicamento`
--
ALTER TABLE `formula_medicamento`
  MODIFY `id_formula_medicamento` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `paciente_alergia`
--
ALTER TABLE `paciente_alergia`
  MODIFY `id_paciente_alergia` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `parentesco`
--
ALTER TABLE `parentesco`
  MODIFY `id_parentesco` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `prescripcion_dia`
--
ALTER TABLE `prescripcion_dia`
  MODIFY `id_prescripcion_dia` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `recambio`
--
ALTER TABLE `recambio`
  MODIFY `id_recambio` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `recambio_hecho`
--
ALTER TABLE `recambio_hecho`
  MODIFY `id_recambio_hecho` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `via_administracion`
--
ALTER TABLE `via_administracion`
  MODIFY `id_via_administracion` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `visita_especialista`
--
ALTER TABLE `visita_especialista`
  MODIFY `id_vista_especialista` int NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chequeomensual`
--
ALTER TABLE `chequeomensual`
  ADD CONSTRAINT `FK_Chequeo_mensual_Cita_CST` FOREIGN KEY (`cita`) REFERENCES `cita` (`id_cita`);

--
-- Constraints for table `cita`
--
ALTER TABLE `cita`
  ADD CONSTRAINT `FK_Cita_Medico_CST` FOREIGN KEY (`medico`) REFERENCES `medico` (`cedula`),
  ADD CONSTRAINT `FK_Cita_Paciente_CST` FOREIGN KEY (`paciente`) REFERENCES `paciente` (`cedula`);

--
-- Constraints for table `cuidador`
--
ALTER TABLE `cuidador`
  ADD CONSTRAINT `FK_Cuidador_Parentesco_CST` FOREIGN KEY (`parentesco`) REFERENCES `parentesco` (`id_parentesco`);

--
-- Constraints for table `cuidador_paciente`
--
ALTER TABLE `cuidador_paciente`
  ADD CONSTRAINT `FK_Cuidador_paciente_Cuidador_CST` FOREIGN KEY (`cuidador`) REFERENCES `cuidador` (`cedula_cuidador`),
  ADD CONSTRAINT `FK_Cuidador_paciente_Paciente_CST` FOREIGN KEY (`paciente`) REFERENCES `paciente` (`cedula`);

--
-- Constraints for table `formula_medicamento`
--
ALTER TABLE `formula_medicamento`
  ADD CONSTRAINT `FK_Formula_medicamento_Paciente_CST` FOREIGN KEY (`paciente`) REFERENCES `paciente` (`cedula`);

--
-- Constraints for table `medico`
--
ALTER TABLE `medico`
  ADD CONSTRAINT `FK_Medico_Especialidad_CST` FOREIGN KEY (`especialidad`) REFERENCES `especialidad` (`id_especialidad`),
  ADD CONSTRAINT `FK_Medico_Usuario_CST` FOREIGN KEY (`cedula`) REFERENCES `usuario` (`cedula`);

--
-- Constraints for table `paciente`
--
ALTER TABLE `paciente`
  ADD CONSTRAINT `FK_Paciente_Usuario_CST` FOREIGN KEY (`cedula`) REFERENCES `usuario` (`cedula`);

--
-- Constraints for table `paciente_alergia`
--
ALTER TABLE `paciente_alergia`
  ADD CONSTRAINT `FK_Paciente_alergia_Alergia_CST` FOREIGN KEY (`alergia`) REFERENCES `alergia` (`id_alergia`),
  ADD CONSTRAINT `FK_Paciente_alergia_Paciente_CST` FOREIGN KEY (`paciente`) REFERENCES `paciente` (`cedula`);

--
-- Constraints for table `prescripcion_dia`
--
ALTER TABLE `prescripcion_dia`
  ADD CONSTRAINT `FK_prescripcionDia_cita_CST` FOREIGN KEY (`cita`) REFERENCES `cita` (`id_cita`);

--
-- Constraints for table `recambio`
--
ALTER TABLE `recambio`
  ADD CONSTRAINT `FK_recambio_prescripcion_dia_CST` FOREIGN KEY (`prescripcion_dia`) REFERENCES `prescripcion_dia` (`id_prescripcion_dia`);

--
-- Constraints for table `recambio_hecho`
--
ALTER TABLE `recambio_hecho`
  ADD CONSTRAINT `	FK_recambio_hecho_recambio_CST` FOREIGN KEY (`recambio`) REFERENCES `recambio` (`id_recambio`);

--
-- Constraints for table `visita_especialista`
--
ALTER TABLE `visita_especialista`
  ADD CONSTRAINT `FK_Visita_especialista_Cita_CST` FOREIGN KEY (`cita`) REFERENCES `cita` (`id_cita`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
