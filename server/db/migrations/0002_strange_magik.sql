CREATE TABLE `projects` (
	`background_color` text NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`description_en` text NOT NULL,
	`description_ru` text NOT NULL,
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`logo` text NOT NULL,
	`title_en` text NOT NULL,
	`title_ru` text NOT NULL,
	`url` text NOT NULL,
	`year` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tags_to_projects` (
	`project_id` integer NOT NULL,
	`tag_id` integer NOT NULL,
	FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`tag_id`) REFERENCES `tags`(`id`) ON UPDATE no action ON DELETE no action
);
