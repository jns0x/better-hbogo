import { ObjectType, Field, Int } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Video extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
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
  original_title!: string;

  @Field(() => String, { nullable: true })
  @Column()
  imdb_rate?: number;

  @Field(() => String, { nullable: true })
  @Column()
  age_rate?: string;

  @Field(() => String, { nullable: true })
  @Column()
  synopsis?: string;
}
