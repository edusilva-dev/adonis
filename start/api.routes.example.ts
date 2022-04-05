import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.group(() => {
    Route.get("/", "PainelController.index");
    Route.get("/usuarios/:id?", "PainelController.usuario").where(
      "id",
      /^[0-9]$/
    );
    Route.get("/usuarios/:slug", "PainelController.usuarioBySlug").where(
      "id",
      Route.matchers.slug()
    );

    Route.get("/docs/*", "PainelController.docs");
  }).prefix("/painel");
}).prefix("/api");
