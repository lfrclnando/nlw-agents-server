import { reset, seed } from 'drizzle-seed'
import { db, sql } from './connection.ts'
import { schema } from './schema/index.ts'

await reset(db, schema)

await seed(db, schema).refine((f) => {
  return {
    rooms: {
      count: 7,
      columns: {
        name: f.companyName(),
        description: f.loremIpsum(),
      },
      questions: {
        count: 20,
      },
      // with: {
      //   questions: 10,
      // },
    },
  }
})

await sql.end()
