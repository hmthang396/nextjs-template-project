import { z } from "zod";

export const PaginationRequest = z.object({
  limit: z.number().min(0).max(100),
  page: z.number().min(0),
  skip: z.number().min(0).optional(),
  orderBy: z
    .string()
    .regex(/^(asc|desc)$/, "Invalid order. Please use 'asc' or 'desc'.")
    .optional(),
  orderDirection: z.string().optional(),
});
export type PaginationRequest = z.infer<typeof PaginationRequest>;
