import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createTodo = mutation({
    args: { text: v.string(), },
    handler: async (ctx, args) => {
        await ctx.db.insert("todos", { text: args.text })
    }
});

export const getTodos = query({
    args: {},
    handler: async (ctx, args) => {
        return ctx.db.query("todos").collect();
    },
});

export const deleteTodoById = mutation({
    args: { id: v.id("todos") },
    handler: async (ctx, args) => {
        return await ctx.db.delete(args.id);
    },
});