import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm'
import { Members } from './model.Member'

@Entity()
export class Membergroups extends BaseEntity {
	@PrimaryGeneratedColumn({
		type: 'int',
	})
	id!: number

	@Column({
		type: 'varchar',
		length: 255,
	})
	membergroup!: string

	@OneToMany((type) => Members, (members) => members.membergroups)
	members!: Members[]
}
