import { ObjectType, Field } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@ObjectType()
@Entity()
export class Image extends BaseEntity {
  @Field()
  @PrimaryColumn()
  id!: string;

  @Field()
  @Column()
  img_190!: string;

  @Field()
  @Column()
  img_262!: string;

  @Field()
  @Column()
  img_561!: string;

  @Field()
  @Column()
  img_800!: string;

  @Field()
  @Column()
  img_1080!: string;

  @Field()
  @Column()
  img_1280!: string;

  @Field()
  @Column()
  title_image?: string;
}
