import type { FastifyPluginCallback } from 'fastify'
import { db } from '../../connection.ts'
import { schema } from '../../schema/index.ts'

export const getRoomsRoute: FastifyPluginCallback = (app) => {
  app.get('/rooms', async () => {
    const results = await db
      .select()
      .from(schema.rooms)
      .orderBy(schema.rooms.createdAt)

    return results
  })
}
