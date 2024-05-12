import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { UserEntity } from "./user.entity";

export enum TaskStatus {
  PENDING = "pending",
  ACCEPTED = "accepted",
  STARTED = "started",
  ENDED = "ended",
  CANCELED = "canceled",
}

@Entity("tasks")
export class TaskEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  taskId!: string;

  @Column({ type: "varchar", length: 255 })
  taskTitle!: string;

  @Column({ type: "varchar", length: 255 })
  taskDescription!: string;

  @Column({ type: "jsonb", nullable: true })
  taskGeoLocation!: { lat: number; long: number } | null;

  @Column({ type: "varchar", length: 255 })
  taskAddress!: string;

  @Column({ type: "varchar", length: 6, nullable: true })
  otp!: string | null;

  @Column({
    type: "simple-array",
    nullable: true,
  })
  taskKeywords!: string[] | null;

  @Column({ type: "numeric" })
  taskPrice!: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt!: Date;

  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP + INTERVAL '1 day'",
  })
  expiryTime!: Date;

  @ManyToOne(() => UserEntity, (user) => user.tasks, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "taskOwnerId" })
  taskOwner!: UserEntity;

  @ManyToOne(() => UserEntity, { onDelete: "CASCADE", onUpdate: "CASCADE" })
  @JoinColumn({ name: "helperId" })
  helper!: UserEntity | null;

  @Column({
    type: "enum",
    enum: TaskStatus,
    default: TaskStatus.PENDING,
  })
  taskStatus!: TaskStatus;
}
