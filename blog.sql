SHOW DATABASES;
SHOW TABLES;

CREATE DATABASE `blog`;

CREATE TABLE `user`(
    `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL UNIQUE KEY,
    `password` VARCHAR(255) NOT NULL 
);

CREATE TABLE `post`(
    `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255),
    `content` LONGTEXT,
    `font-url` VARCHAR(255)
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `post`('title','content') VALUES
('测试标题','<div><p style="color:#ff0000">我是一个测试内容</p></div>'),
('望岳','<div><p style="color:#ff0000">会当凌绝顶，一览众山小</p></div>');



-- 增加数据
INSERT INTO `post`('title') VALUES ('测试标题3');
INSERT INTO `user`(`name`, `password`) VALUES 
('admin', '123456'),
('admin123', '123456'),
('test', '123456'),
('admin888', '123456');


-- 更新数据
UPDATE 'post' SET 'content' = '内容内容内容' WHERE 'id' = 3;

-- 删除数据
DELETE FROM 'post' WHERE 'id' = 4;

-- 修改结构
ALTER TABLE 'post' ADD 'userId' INT (11) DEFAULT NULL;
ALTER TABLE 'post' ADD FOREIGN KEY('userId') REFERENCES 'user'('id') ON DELETE NO ACTION ON UPDATE NO ACTION;

-- 查询数据库 DESC降序 ASC升序
SELECT * FROM 'post' LIMIT 1 OFFSET 1 ORDER BY 'id' DESC;
-- 链接查询
SELECT 'post'.'id','post'.'title','post'.'content','user'.'name' FROM 'post' LEFT JOIN 'user' ON 'user'.'id' = 'post'.'userId'
WHERE 'user'.'id' = 1;

