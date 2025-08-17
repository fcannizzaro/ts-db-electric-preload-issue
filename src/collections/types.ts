import z from "zod";

export const TableSchema = z.object({
  id: z.number(),
  field1: z.boolean().default(false),
  field2: z.boolean().default(false),
  field3: z.boolean().default(false),
});
