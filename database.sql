CREATE TABLE `teams` (
  `id_varchar` varchar(3) DEFAULT NULL,
  `id_char` char(3) DEFAULT NULL,
  `name` varchar(250) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `teams` (`id_varchar`, `id_char`, `name`)
VALUES
	('01 ','01','Dev'),
	('02 ','02','Support');

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(250) DEFAULT NULL,
  `team` char(3) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `users` (`id`, `name`, `team`)
VALUES
	(1,'Alexandre','01'),
	(2,'Valentin','02');
