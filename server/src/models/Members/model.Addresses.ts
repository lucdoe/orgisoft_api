import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany } from 'typeorm'
import { Citys } from './model.Citys'
import { Members } from './model.Members'

@Entity()
export class Addresses extends BaseEntity {
	@PrimaryGeneratedColumn({
		type: 'int',
	})
	id!: Number

	@ManyToOne((type) => Citys)
	citys!: Citys

	@Column({
		type: 'varchar',
	})
	street!: String

	@Column({
		type: 'varchar',
		length: 20,
	})
	streetNumber!: String

	@Column({
		type: 'text',
	})
	note!: string

	@Column({
		type: 'date',
	})
	createdAt!: Date

	@Column({
		type: 'date',
	})
	updatedAt!: Date

	@OneToMany((type) => Members, (members) => members.addresses)
	members!: Members
}
