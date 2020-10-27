import { ObjectType, Field } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { MovieGenre } from "./MovieGenre";

@ObjectType()
@Entity()
export class Genre extends BaseEntity {
  @Field()
  @PrimaryColumn()
  id!: string;

  @Field()
  @Column()
  name!: string;

  @Field(() => MovieGenre)
  @ManyToOne(() => MovieGenre, (movieGenre) => movieGenre.video)
  @JoinColumn({
    name: "id",
    referencedColumnName: "genreId",
  })
  video!: MovieGenre;
}
