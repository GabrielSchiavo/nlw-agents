import { z } from 'zod'

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.string().url().startsWith("postgresql://"),
  GEMINI_API_KEY: z.string(),
  GEMINI_MODEL: z.string(),
  GEMINI_EMBEDDING_MODEL: z.string(),
});

export const env = envSchema.parse(process.env)
