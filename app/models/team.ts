import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Team extends BaseModel {
  static table = 'teams'

  @column({
    isPrimary: true,
    serialize: (value: String | null) => {
      return value ? value.trim() : value
    },
  })
  declare id_varchar: string

  @column({
    isPrimary: true,
    serialize: (value: String | null) => {
      return value ? value.trim() : value
    },
  })
  declare id_char: string

  @column({
    serialize: (value: String | null) => {
      return value ? value.trim() : value
    },
  })
  declare name: string
}
