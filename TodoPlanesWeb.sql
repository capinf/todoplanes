CREATE DATABASE  IF NOT EXISTS `todoplanesweb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `todoplanesweb`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: todoplanesweb
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `formulario`
--

DROP TABLE IF EXISTS `formulario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `formulario` (
  `idFormulario` int NOT NULL AUTO_INCREMENT,
  `nombrePlan` varchar(45) NOT NULL,
  `tipoPlan` varchar(45) NOT NULL,
  `precio` varchar(45) NOT NULL,
  `cantidadCuotas` varchar(45) NOT NULL,
  `adjudicado` varchar(2) NOT NULL DEFAULT 'NO',
  `anioInicio` varchar(45) NOT NULL,
  `localidad` varchar(45) NOT NULL,
  `telefono` varchar(45) NOT NULL,
  `imgPath` varchar(200) DEFAULT NULL,
  `rolform` varchar(45) NOT NULL,
  `fecha` timestamp NOT NULL,
  `estado` varchar(3) NOT NULL DEFAULT 'A',
  PRIMARY KEY (`idFormulario`),
  UNIQUE KEY `idformulario_UNIQUE` (`idFormulario`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `formulario`
--

LOCK TABLES `formulario` WRITE;
/*!40000 ALTER TABLE `formulario` DISABLE KEYS */;
INSERT INTO `formulario` VALUES (1,'Plan Rombo','70% - 30%','100000','6','NO','2018','Posadas','3764695115',NULL,'normal','2023-07-15 00:05:00','A'),(2,'Plan Zeta Renault','70% - 30%','355','15','NO','2020','Posadas','3764695115',NULL,'normal','2023-07-15 00:05:00','A'),(3,'Plan zurich 70/20','70% - 30%','3500000','120','NO','2022','Posadas','3165469863','','premium','2023-06-20 22:05:00','A'),(4,'Plan Rombo','70% - 30%','3500000','31','NO','1898','Paraguay','3764899974','','admin','0000-00-00 00:00:00','A'),(5,'Plan Nuevo Sol Reluciente','70% - 30%','355','123','NO','1855','Paraguay','251114488','','admin','0000-00-00 00:00:00','A'),(6,'Plan de Auto Nahui','70% - 30%','37000000','120','NO','2022','Paraguay','37648889977','','admin','2023-07-22 13:59:57','A'),(7,'Plan AutoBarato','70% - 30%','2500000','78','NO','2022','Uruguay','376454562','','admin','2023-07-22 15:15:03','A'),(8,'Plan Prueba Callejera','70% - 30%','2500000','65','SI','2022','Posadas','3764899974','','admin','2023-07-23 19:16:58','A'),(9,'Plan XERO Renault','70% - 30%','3500000','123','NO','1898','Uruguay','13416841631','','admin','2023-07-23 19:27:48','A'),(10,'Plan Rombo 70/30','70% - 30%','2500000','55','NO','1993','Posadas','3764889977','','admin','2023-07-23 19:51:29','A');
/*!40000 ALTER TABLE `formulario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `apellido_nombre` varchar(45) NOT NULL,
  `telefono` varchar(45) NOT NULL,
  `estado` enum('A','B') NOT NULL DEFAULT 'A',
  `fecha_creacion` datetime DEFAULT NULL,
  `fecha_modificacion` datetime DEFAULT NULL,
  `rol` enum('normal','premium','admin') NOT NULL DEFAULT 'normal',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `telefono_UNIQUE` (`telefono`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'prueba','prueba@gmail.com','123123',' prueba prueba','123123','A',NULL,NULL,'normal'),(2,'admin','pruebaAdmin@gmail.com','root','Augusto Quintana','3764887799','A',NULL,NULL,'admin'),(3,'premium','pruebaPremium@gmail.com','premium','prueba Premium','3765124552','A',NULL,NULL,'premium'),(4,'nahuelnahuel','lobonegro_123@hotmail.com','$2b$10$RXsdzIVZ38t5.qpriOVYgewl6prKjr5g7ykF3ve95p0VhTc.ONlku','Nahuel Cabrera','3764695163','A','2023-07-15 20:15:31',NULL,'admin'),(5,'Octavio123','lobonegroconmanchitas@gmail.com','$2b$10$oYEQ.UHY.okVQ1hxM.SXKuVu7RFVt5aerb0NyP4n3rbKy0xl2895C','Nahuel Octavio Zembrunski','37651542287','A','2023-07-15 20:17:37',NULL,'normal');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'todoplanesweb'
--

--
-- Dumping routines for database 'todoplanesweb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-24 20:59:12
