import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm'
import { Members } from './model.Members'
@Entity()
export class Statuses extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({
		type: 'varchar',
		length: '50',
	})
	status!: string

	@OneToMany((type) => Members, (members) => members.statuses)
	members!: Members
}
