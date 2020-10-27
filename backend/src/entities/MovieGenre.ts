import { ObjectType, Field } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { Genre } from "./Genre";
import { Video } from "./Video";

@ObjectType()
@Entity()
export class MovieGenre extends BaseEntity {
  @Field()
  @PrimaryColumn()
  id!: string;

  @Field()
  @Column()
  movieId!: string;

  @Field()
  @Column()
  genreId!: string;

  @Field(() => Genre)
  @OneToMany(() => Genre, (genre) => genre.name)
  @JoinColumn({
    name: "genreId",
    referencedColumnName: "id",
  })
  genre!: Genre;

  @Field(() => Video)
  @ManyToOne(() => Video, (video) => video.genres)
  @JoinColumn({
    name: "movieId",
    referencedColumnName: "id",
  })
  video!: Video;
}
