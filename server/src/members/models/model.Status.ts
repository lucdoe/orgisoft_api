import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm'
import { Members } from './model.Member'
@Entity()
export class Statuses extends BaseEntity {
	@PrimaryGeneratedColumn({
		type: 'int',
	})
	id!: number

	@Column({
		type: 'varchar',
		length: 255,
	})
	status!: string

	@OneToMany((type) => Members, (members) => members.statuses)
	members!: Members[]
}
