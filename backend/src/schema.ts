import { makeSchema, objectType } from "@nexus/schema";
import { nexusPrisma } from "nexus-plugin-prisma";

const Video = objectType({
  name: "video",
  definition(t) {
    t.model.id();
    t.model.external_id();
    t.model.imageId();
    t.model.title();
    t.model.year();
    t.model.type();
    t.model.availableDate();
    t.model.engTitle();
    t.model.original_title();
    t.model.imdb_rate();
    t.model.age_rate();
    t.model.synopsis();
  },
});

const Query = objectType({
  name: "Query",
  definition(t) {
    t.list.field("videos", {
      type: "video",
      resolve: (_parent, _args, ctx) => ctx.prisma.video.findMany({}),
    });
  },
});

export const schema = makeSchema({
  types: [Query, Video],
  plugins: [nexusPrisma({ experimentalCRUD: true })],
  outputs: {
    schema: __dirname + "/../schema.graphql",
    typegen: __dirname + "/generated/nexus.ts",
  },
  typegenAutoConfig: {
    contextType: "Context.Context",
    sources: [
      {
        source: "@prisma/client",
        alias: "prisma",
      },
      {
        source: require.resolve("./context"),
        alias: "Context",
      },
    ],
  },
});
