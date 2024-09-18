CREATE TABLE `gardn_account` (
	`userId` text NOT NULL,
	`type` text NOT NULL,
	`provider` text NOT NULL,
	`providerAccountId` text NOT NULL,
	`refresh_token` text,
	`access_token` text,
	`expires_at` integer,
	`token_type` text,
	`scope` text,
	`id_token` text,
	`session_state` text,
	PRIMARY KEY(`provider`, `providerAccountId`),
	FOREIGN KEY (`userId`) REFERENCES `gardn_user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `gardn_article` (
	`id` text(21) PRIMARY KEY NOT NULL,
	`name` text(100) NOT NULL,
	`description` text(256) NOT NULL,
	`price` integer NOT NULL,
	`image_url` text(256) NOT NULL,
	`active` integer DEFAULT false,
	`stock` integer DEFAULT 0,
	`option` text,
	`category_id` text(21) NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE `gardn_category` (
	`id` text(21) PRIMARY KEY NOT NULL,
	`name` text(100) NOT NULL,
	`description` text(256) NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE `gardn_authenticator` (
	`credentialID` text NOT NULL,
	`userId` text NOT NULL,
	`providerAccountId` text NOT NULL,
	`credentialPublicKey` text NOT NULL,
	`counter` integer NOT NULL,
	`credentialDeviceType` text NOT NULL,
	`credentialBackedUp` integer NOT NULL,
	`transports` text,
	PRIMARY KEY(`userId`, `credentialID`),
	FOREIGN KEY (`userId`) REFERENCES `gardn_user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `gardn_order` (
	`id` text(21) PRIMARY KEY NOT NULL,
	`name` text(100) NOT NULL,
	`description` text(256) NOT NULL,
	`price` integer NOT NULL,
	`canceled` integer DEFAULT false,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE `gardn_order_article` (
	`order_id` text(21) NOT NULL,
	`article_id` text(21) NOT NULL,
	`quantity` integer NOT NULL,
	PRIMARY KEY(`order_id`, `article_id`)
);
--> statement-breakpoint
CREATE TABLE `gardn_order_user` (
	`order_id` text(21) NOT NULL,
	`user_id` text NOT NULL,
	`favorite` integer DEFAULT false,
	PRIMARY KEY(`order_id`, `user_id`)
);
--> statement-breakpoint
CREATE TABLE `gardn_plant` (
	`id` text(21) PRIMARY KEY NOT NULL,
	`name` text(256) NOT NULL,
	`description` text(256) NOT NULL,
	`image_url` text(256) NOT NULL,
	`deleted` integer DEFAULT false,
	`category_id` text(21) DEFAULT '' NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch())
);
--> statement-breakpoint
CREATE TABLE `gardn_plant_category` (
	`id` text(21) PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE `gardn_plant_user` (
	`plant_id` text(21) NOT NULL,
	`user_id` text NOT NULL,
	`favorite` integer DEFAULT false,
	PRIMARY KEY(`plant_id`, `user_id`)
);
--> statement-breakpoint
CREATE TABLE `gardn_sensor` (
	`id` text(21) PRIMARY KEY NOT NULL,
	`name` text(256) NOT NULL,
	`sensor_id` text(21) NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE `gardn_session` (
	`sessionToken` text PRIMARY KEY NOT NULL,
	`userId` text NOT NULL,
	`expires` integer NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `gardn_user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `gardn_support` (
	`id` text(21) PRIMARY KEY NOT NULL,
	`name` text(100) NOT NULL,
	`ticket_id` text(21) NOT NULL,
	`chat` blob NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE `gardn_support_user` (
	`support_id` text(21) NOT NULL,
	`user_id` text NOT NULL,
	PRIMARY KEY(`support_id`, `user_id`)
);
--> statement-breakpoint
CREATE TABLE `gardn_ui` (
	`id` text(21) PRIMARY KEY NOT NULL,
	`page` text(256) NOT NULL,
	`ui` text NOT NULL,
	`type` text NOT NULL,
	`etag` text(21) NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE `gardn_user` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text,
	`email` text NOT NULL,
	`emailVerified` integer,
	`image` text
);
--> statement-breakpoint
CREATE TABLE `gardn_verificationToken` (
	`identifier` text NOT NULL,
	`token` text NOT NULL,
	`expires` integer NOT NULL,
	PRIMARY KEY(`identifier`, `token`)
);
--> statement-breakpoint
CREATE TABLE `gardn_yard` (
	`id` text(21) PRIMARY KEY NOT NULL,
	`name` text(256) NOT NULL,
	`description` text(256) NOT NULL,
	`image_url` text(256) NOT NULL,
	`image_public_id` text(256) NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE `gardn_yard_user` (
	`yard_id` text(21) NOT NULL,
	`user_id` text NOT NULL,
	`favorite` integer DEFAULT false,
	PRIMARY KEY(`yard_id`, `user_id`)
);
--> statement-breakpoint
CREATE TABLE `gardn_yard_sensor` (
	`yard_id` text(21) NOT NULL,
	`sensor_id` text(21) NOT NULL,
	PRIMARY KEY(`yard_id`, `sensor_id`)
);
--> statement-breakpoint
CREATE UNIQUE INDEX `gardn_authenticator_credentialID_unique` ON `gardn_authenticator` (`credentialID`);