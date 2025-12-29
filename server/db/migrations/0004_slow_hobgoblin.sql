CREATE INDEX `idx_personal_projects_created_at` ON `personal_projects` (`created_at`);--> statement-breakpoint
CREATE INDEX `idx_projects_created_at` ON `projects` (`created_at`);--> statement-breakpoint
CREATE UNIQUE INDEX `idx_tags_title_unique` ON `tags` (`title`);--> statement-breakpoint
CREATE INDEX `idx_tpp_personal_project_id` ON `tags_to_personal_projects` (`personal_project_id`);--> statement-breakpoint
CREATE INDEX `idx_tpp_tag_id` ON `tags_to_personal_projects` (`tag_id`);--> statement-breakpoint
CREATE INDEX `idx_tpp_personal_project_tag` ON `tags_to_personal_projects` (`personal_project_id`,`tag_id`);--> statement-breakpoint
CREATE INDEX `idx_tp_project_id` ON `tags_to_projects` (`project_id`);--> statement-breakpoint
CREATE INDEX `idx_tp_tag_id` ON `tags_to_projects` (`tag_id`);--> statement-breakpoint
CREATE INDEX `idx_tp_project_tag` ON `tags_to_projects` (`project_id`,`tag_id`);--> statement-breakpoint
CREATE INDEX `idx_tw_tag_id` ON `tags_to_workplaces` (`tag_id`);--> statement-breakpoint
CREATE INDEX `idx_tw_workplace_id` ON `tags_to_workplaces` (`workplace_id`);--> statement-breakpoint
CREATE INDEX `idx_tw_workplace_tag` ON `tags_to_workplaces` (`workplace_id`,`tag_id`);--> statement-breakpoint
CREATE INDEX `idx_workplaces_created_at` ON `workplaces` (`created_at`);