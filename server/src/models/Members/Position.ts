import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm'
import { Members } from './Members'

@Entity()
export class Position extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({
		type: 'varchar',
		length: '50',
	})
	position!: string

	@OneToMany((type) => Members, (members) => members.position)
	members!: Members
}
