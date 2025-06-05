-- 示例表结构：化合物信息表
CREATE TABLE `compound_info` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `compound_name` VARCHAR(255) NOT NULL,
  `cid` VARCHAR(100),
  `smiles` VARCHAR(255),
  `mol_weight` VARCHAR(100),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 示例查询：根据名称搜索
SELECT id, compound_name, cid, smiles, mol_weight FROM compound_info WHERE compound_name LIKE '%苯%';
