// src/entities/user.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
}

@Entity("users")
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  userId!: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  fullName!: string | null;

  @Column({ type: "varchar", length: 255 })
  password!: string | null;

  @Column({ type: "varchar", length: 255, nullable: true })
  profileImageUrl!: string | null;

  @Column({ type: "boolean", default: false })
  isEligible!: boolean;

  @Column({ type: "varchar", length: 255 })
  email!: string;

  @Column({ type: "enum", enum: Gender, default: Gender.OTHER })
  gender!: Gender;

  @Column({
    type: "timestamp",
    nullable: true,
  })
  dateOfBirth!: Date | null;

  @Column({ type: "varchar", length: 20, nullable: true })
  phoneNumber!: string | null;

  @Column({ type: "jsonb", nullable: true })
  geoLocation!: { lat: number; long: number } | null;

  @Column({ type: "varchar", length: 255, nullable: true })
  address!: string | null;

  @Column({ type: "varchar", length: 255, nullable: true })
  adharUrl!: string | null;

  @Column({ type: "varchar", length: 255, nullable: true })
  upiId!: string | null;

  @Column("simple-array", { nullable: true })
  skills!: string[] | null;

  @Column({ type: "numeric", default: 0 })
  totalEarnings!: number;
}
