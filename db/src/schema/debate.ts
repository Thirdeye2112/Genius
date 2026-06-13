import { pgTable, text, serial, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const debateSessionsTable = pgTable("debate_sessions", {
  id: serial("id").primaryKey(),
  conversationId: text("conversation_id"),
  prompt: text("prompt").notNull(),
  responses: jsonb("responses").notNull().$type<Array<{
    model: string;
    modelLabel: string;
    initialResponse: string;
    critique: string;
  }>>(),
  synthesis: text("synthesis").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertDebateSessionSchema = createInsertSchema(debateSessionsTable).omit({ id: true, createdAt: true });
export type InsertDebateSession = z.infer<typeof insertDebateSessionSchema>;
export type DebateSession = typeof debateSessionsTable.$inferSelect;
