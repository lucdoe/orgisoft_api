import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm'
import { Members } from './model.Member'

@Entity()
export class Positions extends BaseEntity {
	@PrimaryGeneratedColumn({
		type: 'int',
	})
	id!: number

	@Column({
		type: 'varchar',
		length: 255,
	})
	position!: string

	@OneToMany((type) => Members, (members) => members.positions)
	members!: Members[]
}
