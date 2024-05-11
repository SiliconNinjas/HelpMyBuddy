import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { UserEntity } from "./user.entity";

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

  @Column({ type: "numeric" })
  taskPrice!: number;

  @ManyToOne(() => UserEntity, (user) => user.tasks, { onDelete: "CASCADE" })
  @JoinColumn({ name: "taskOwnerId" })
  taskOwner!: UserEntity;
}
