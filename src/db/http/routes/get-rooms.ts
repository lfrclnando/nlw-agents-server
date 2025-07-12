import { count, eq } from 'drizzle-orm'
import type { FastifyPluginCallback } from 'fastify'
import { db } from '../../connection.ts'
import { schema } from '../../schema/index.ts'

export const getRoomsRoute: FastifyPluginCallback = (app) => {
  app.get('/rooms', async () => {
    const results = await db
      .select({
        id: schema.rooms.id,
        name: schema.rooms.name,
        createdAt: schema.rooms.createdAt,
        questionsCount: count(schema.questions.id),
      })
      .from(schema.rooms)
      .leftJoin(schema.questions, eq(schema.questions.roomId, schema.rooms.id))
      .groupBy(schema.rooms.id)
      .orderBy(schema.rooms.createdAt)

    return results
  })
}
