import { Resolver, Query } from "type-graphql";
import { getConnection } from "typeorm";
import { Video } from "../entities/Video";

@Resolver()
export class VideoResolver {
  @Query(() => [Video])
  async videos() {
    const videos = await getConnection().query(
      `
        SELECT * from video;
        `
    );
    return videos;
  }
}
