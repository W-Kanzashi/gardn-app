DROP TABLE `gardn_order_user`;--> statement-breakpoint
ALTER TABLE `gardn_order` ADD `user_id` text(21) NOT NULL;--> statement-breakpoint
ALTER TABLE `gardn_order_article` ADD `price` integer NOT NULL;--> statement-breakpoint
ALTER TABLE `gardn_sensor` ADD `user_id` text(21) NOT NULL;