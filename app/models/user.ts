import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import * as relations from "@adonisjs/lucid/types/relations"
import Team from "#models/team";

export default class User extends BaseModel {
  static table = "users";

  @column({ isPrimary: true })
  declare id: number

  @column({
    serialize: (value: String | null) => {
      return value ? value : value
    }
  })
  declare team: string

  @belongsTo(() => Team, {
    foreignKey: "team",
    localKey: "id_varchar",
    onQuery: (query) => {
      query.debug(true)
    },
  })
  declare TeamVarchar: relations.BelongsTo<typeof Team>

  @belongsTo(() => Team, {
    foreignKey: "team",
    localKey: "id_char"
  })
  declare TeamChar: relations.BelongsTo<typeof Team>
}
