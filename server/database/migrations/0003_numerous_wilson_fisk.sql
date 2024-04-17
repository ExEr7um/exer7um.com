CREATE TABLE `tags_to_workplaces` (
	`tag_id` integer NOT NULL,
	`workplace_id` integer NOT NULL,
	FOREIGN KEY (`tag_id`) REFERENCES `tags`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`workplace_id`) REFERENCES `workplaces`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `workplaces` (
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`description_en` text NOT NULL,
	`description_ru` text NOT NULL,
	`end_date` integer,
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`logo` text NOT NULL,
	`start_date` integer NOT NULL,
	`title_en` text NOT NULL,
	`title_ru` text NOT NULL
);
