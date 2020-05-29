import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm'
import { Members } from './model.Member'

@Entity()
export class Positions extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({
		type: 'varchar',
		length: '50',
	})
	position!: string

	@OneToMany((type) => Members, (members) => members.positions)
	members!: Members
}
