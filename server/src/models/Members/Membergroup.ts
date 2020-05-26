import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm'
import { Members } from './Members'

@Entity()
export class Membergroup extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({
		type: 'varchar',
		length: '50',
	})
	membergroup!: string

	@OneToMany((type) => Members, (members) => members.membergroup)
	members!: Members
}
