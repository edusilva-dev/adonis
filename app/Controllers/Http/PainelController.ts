// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PainelController {
  protected users = [
    {
      id: 1,
      slug: "edu",
      name: "Eduardo Castro",
    },
    {
      id: 2,
      slug: "carol",
      name: "Maria Caroline",
    },
  ];

  async index({ response }) {
    const json = { ping: "pong" };
    response.redirect().toPath("/api/painel/usuarios/1");
  }

  async usuarios() {
    return { users: this.users };
  }

  async usuario({ params }) {
    if (!params["id"]) return { users: this.users };

    const requestedUserId = Number(params["id"]);
    const user = this.users.find((user) => user.id === requestedUserId);
    if (!user) return { message: "User not found" };

    return user;
  }

  async usuarioBySlug({ params }) {
    const requestedUserId = params["slug"];
    const user = this.users.find((user) => user.slug === requestedUserId);
    if (!user) return { message: "User not found" };

    return user;
  }

  async docs({ params }) {
    return params;
    // return params['*'][0]
  }
}
