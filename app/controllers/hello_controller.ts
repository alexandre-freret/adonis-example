import User from "#models/user";

export default class HelloController {
  async index() {

    let users = await User.query()
      .preload('TeamChar')
      .preload('TeamVarchar')
    return users
  }
}
