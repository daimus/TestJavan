-- BUAT TABLE FAMILIES
CREATE TABLE `families` (
  `id` int NOT NULL AUTO_INCREMENT,
  `parent_id` int DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `sex` enum('male','female') NOT NULL,
  `created_at` datetime,
  `updated_at` datetime,
  PRIMARY KEY (`id`)
);
-- INSERT DATA FAMILIES
INSERT INTO `families` (`id`, `parent_id`, `name`, `sex`) VALUES (1,NULL,'Bani','male');
INSERT INTO `families` (`id`, `parent_id`, `name`, `sex`) VALUES (2,1,'Budi','male');
INSERT INTO `families` (`id`, `parent_id`, `name`, `sex`) VALUES (3,1,'Nida','female');
INSERT INTO `families` (`id`, `parent_id`, `name`, `sex`) VALUES (4,1,'Andi','male');
INSERT INTO `families` (`id`, `parent_id`, `name`, `sex`) VALUES (5,1,'Sigit','male');
INSERT INTO `families` (`id`, `parent_id`, `name`, `sex`) VALUES (6,2,'Hari','male');
INSERT INTO `families` (`id`, `parent_id`, `name`, `sex`) VALUES (7,2,'Siti','female');
INSERT INTO `families` (`id`, `parent_id`, `name`, `sex`) VALUES (8,3,'Bila','female');
INSERT INTO `families` (`id`, `parent_id`, `name`, `sex`) VALUES (9,3,'Lesti','female');
INSERT INTO `families` (`id`, `parent_id`, `name`, `sex`) VALUES (10,4,'Diki','male');
INSERT INTO `families` (`id`, `parent_id`, `name`, `sex`) VALUES (11,5,'Doni','male');
INSERT INTO `families` (`id`, `parent_id`, `name`, `sex`) VALUES (12,5,'Toni','male');

-- BUAT TABLE ASSETS
CREATE TABLE `assets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `family_id` int DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `price` int DEFAULT NULL,
  `created_at` datetime,
  `updated_at` datetime,
  PRIMARY KEY (`id`)
);

-- INSERT DATA ASSETS
INSERT INTO `assets` (`id`, `family_id`, `name`) VALUES (1,2,'Samsung Universe 9');
INSERT INTO `assets` (`id`, `family_id`, `name`) VALUES (2,2,'Samsung Galaxy Book');
INSERT INTO `assets` (`id`, `family_id`, `name`) VALUES (3,6,'iPhone 9');
INSERT INTO `assets` (`id`, `family_id`, `name`) VALUES (4,7,'iPhone X');
INSERT INTO `assets` (`id`, `family_id`, `name`) VALUES (5,3,'Huawei P30');
INSERT INTO `assets` (`id`, `family_id`, `name`) VALUES (6,8,'Samsung Universe 9');
INSERT INTO `assets` (`id`, `family_id`, `name`) VALUES (7,9,'Huawei P30');
INSERT INTO `assets` (`id`, `family_id`, `name`) VALUES (8,9,'iPhone X');
INSERT INTO `assets` (`id`, `family_id`, `name`) VALUES (9,4,'Samsung Universe 9');
INSERT INTO `assets` (`id`, `family_id`, `name`) VALUES (10,10,'Samsung Galaxy Book');
INSERT INTO `assets` (`id`, `family_id`, `name`) VALUES (11,5,'Huawei P30');
INSERT INTO `assets` (`id`, `family_id`, `name`) VALUES (12,11,'iPhone X');
