import {
  Resolver,
  Query,
  Arg,
  Int,
  ArgsType,
  Field,
  Args,
  ObjectType,
  registerEnumType,
} from "type-graphql";
import { getRepository } from "typeorm";
import { Video } from "../entities/Video";

enum orderBy {
  year = "year",
  age_rate = "age_rate",
  imdb_rate = "imdb_rate",
  availableDate = "availableDate",
}

registerEnumType(orderBy, {
  name: "orderBy", // this one is mandatory
  description: "The basic directions", // this one is optional
});

@ArgsType()
class Filters {
  @Field(() => String, { defaultValue: "series" })
  type?: "series" | "movie" | "kids";
  @Field(() => String, { nullable: true })
  year?: string | null;
  @Field(() => String, { nullable: true })
  imdb_rate?: string | null;
  @Field(() => String, { nullable: true })
  age_rate?: string | null;
  @Field(() => Int, { nullable: true })
  availableDate?: number | null;
  @Field(() => orderBy, { defaultValue: orderBy.year })
  orderBy?: orderBy;
  @Field(() => String, { defaultValue: "DESC" })
  order!: "ASC" | "DESC";
  @Field(() => Int, { defaultValue: 10 })
  limit!: number;
  @Field(() => String, { nullable: true })
  cursor?: string | null;
}

@ObjectType()
class PaginatedVideos {
  @Field(() => [Video])
  videos?: Video[];
  @Field()
  hasMore?: boolean;
}

@Resolver()
export class VideoResolver {
  @Query(() => PaginatedVideos)
  async videos(
    @Args()
    {
      type,
      year,
      imdb_rate,
      age_rate,
      availableDate,
      orderBy,
      order,
      limit,
      cursor,
    }: Filters
  ) {
    const realLimit = Math.min(limit);
    const reaLimitPlusOne = realLimit + 1;

    const videos = await getRepository(Video)
      .createQueryBuilder("video")
      .leftJoinAndSelect("video.image", "image")
      .where({ type });

    if (imdb_rate) {
      videos.andWhere("video.imdb_rate = :imdb_rate", { imdb_rate });
    }
    if (age_rate) {
      videos.andWhere("video.age_rate = :age_rate", { age_rate });
    }
    if (availableDate) {
      videos.andWhere("video.availableDate = :availableDate", {
        availableDate,
      });
    }
    if (year) {
      videos.andWhere("video.year = :year", { year });
    }

    if (orderBy) {
      videos.orderBy(`video.${orderBy}`, order);
    }

    const videosResult = await videos.getMany();

    return {
      videos: videosResult.slice(0, realLimit),
      hasMore: videosResult.length === reaLimitPlusOne,
    };
  }
  @Query(() => Video, { nullable: true })
  video(@Arg("id", () => Int) id: number): Promise<Video | undefined> {
    return Video.findOne(id);
  }
  @Query(() => [Video])
  async series() {
    const series = await getRepository(Video)
      .createQueryBuilder("video")
      .where({ type: "series" })
      .getMany();

    // getConnection().query(
    //   `
    //     SELECT * from video;
    //     `
    // );
    return series;
  }
  async movies() {
    const movies = await getRepository(Video)
      .createQueryBuilder("video")
      .where("video.type = : type", { type: "movie" })
      .getMany();

    // getConnection().query(
    //   `
    //     SELECT * from video;
    //     `
    // );
    return movies;
  }
}
