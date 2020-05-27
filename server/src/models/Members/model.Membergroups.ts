import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm'
import { Members } from './model.Members'

@Entity()
export class Membergroups extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({
		type: 'varchar',
		length: '50',
	})
	membergroup!: string

	@OneToMany((type) => Members, (members) => members.membergroups)
	members!: Members
}
