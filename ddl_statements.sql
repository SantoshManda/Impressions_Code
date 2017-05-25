CREATE DATABASE `impressions_data_store` /*!40100 DEFAULT CHARACTER SET utf8 */;

CREATE TABLE `employee_details` (
  `id` int(11) NOT NULL,
  `employee_name` varchar(225) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `impressions` (
  `impression_id` int(11) NOT NULL AUTO_INCREMENT,
  `employee_name` varchar(60) NOT NULL,
  `comment` varchar(1000) NOT NULL,
  `impression_time` datetime DEFAULT NULL,
  `created_by` varchar(60) NOT NULL,
  `created_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_by` varchar(60) DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by_emp_id` int(11) DEFAULT '0',
  `eid` int(11) DEFAULT NULL,
  PRIMARY KEY (`impression_id`),
  KEY `FK_EMPLOYEE_ID` (`eid`),
  KEY `FK_CREATED_BY_EMPLOYEE_ID` (`created_by_emp_id`),
  CONSTRAINT `FK_CREATED_BY_EMPLOYEE_ID` FOREIGN KEY (`created_by_emp_id`) REFERENCES `employee_details` (`id`),
  CONSTRAINT `FK_EMPLOYEE_ID` FOREIGN KEY (`eid`) REFERENCES `employee_details` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8;
