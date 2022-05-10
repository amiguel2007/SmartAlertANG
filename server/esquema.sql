CREATE TABLE `alertas` (
  `id` bigint(20) UNSIGNED NOT NULL primary key AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `edad` tinyint(4) DEFAULT NULL,
  `fechayhora` varchar(255) NOT NULL,
  `ubicacion` varchar(255) NOT NULL,
  `tipo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
