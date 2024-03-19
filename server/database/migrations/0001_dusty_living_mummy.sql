CREATE TABLE `personal_projects` (
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`description_en` text NOT NULL,
	`description_ru` text NOT NULL,
	`github` text,
	`icon` text(1) NOT NULL,
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title_en` text NOT NULL,
	`title_ru` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tags_to_personal_projects` (
	`personal_project_id` integer NOT NULL,
	`tag_id` integer NOT NULL,
	FOREIGN KEY (`personal_project_id`) REFERENCES `personal_projects`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`tag_id`) REFERENCES `tags`(`id`) ON UPDATE no action ON DELETE no action
);
