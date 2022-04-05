// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {
  async index({ view }) {
    const data = {
      users: [
        {
          name: "Eduardo Castro",
          stacks: ["React", "Styled Components", "Node"],
          admin: true,
        },
        {
          name: "Maria Caroline",
          stacks: ["HTML", "CSS"],
          admin: false,
        },
        {
          name: "Agnaldo Batata",
          stacks: ["C#", "Python", "Java"],
          admin: false,
        },
      ],
    };
    return view.render("homepage", data);
  }
  async sobre({ view }) {
    return view.render("sobre");
  }
}
