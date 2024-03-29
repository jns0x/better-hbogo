import "reflect-metadata";
import "dotenv-safe/config";
import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { Video } from "./entities/Video";
import { VideoResolver } from "./resolvers/video";
import { Image } from "./entities/Image";
import { MovieGenre } from "./entities/MovieGenre";
import { Genre } from "./entities/Genre";

const main = async () => {
  const connection = await createConnection({
    type: "postgres",
    database: "better-hbogo-db",
    username: "postgres",
    password: "postgres",
    url: process.env.DATABASE_URL,
    logging: true,
    // synchronize: true,
    //   migrations: [path.join(__dirname, "./migrations/*")],
    entities: [Video, Image, Genre, MovieGenre],
  });
  await connection.runMigrations();

  const app = express();
  app.set("proxy", 1);
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [VideoResolver],
      validate: false,
    }),
  });
  apolloServer.applyMiddleware({
    app,
    cors: false,
  });
  app.listen(process.env.PORT, () => {
    console.log("server started at localhost:4000");
  });
};

main().catch((err) => {
  console.log(err);
});
