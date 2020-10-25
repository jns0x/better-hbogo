import { ObjectType, Field, Int } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { Image } from "./Image";

@ObjectType()
@Entity()
export class Video extends BaseEntity {
  @Field()
  @PrimaryColumn()
  id!: number;

  @Field()
  @Column()
  external_id!: number;

  @Field()
  @Column()
  imageId!: string;

  @Field()
  @Column()
  title!: string;

  @Field(() => String, { nullable: true })
  @Column()
  year?: string;

  @Field()
  @Column()
  type!: string;

  @Field(() => Int, { nullable: true })
  @Column()
  availableDate?: number;

  @Field()
  @Column()
  engTitle!: string;

  @Field(() => String, { nullable: true })
  @Column()
  original_title?: string;

  @Field(() => String, { nullable: true })
  @Column()
  imdb_rate?: number;

  @Field(() => String, { nullable: true })
  @Column()
  age_rate?: string;

  @Field(() => String, { nullable: true })
  @Column()
  synopsis?: string;

  @Field({ nullable: true })
  @OneToOne(() => Image, { nullable: true })
  @JoinColumn()
  image?: Image;
}
