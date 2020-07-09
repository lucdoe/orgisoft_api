import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany } from 'typeorm'
import { Citys } from './model.City'
import { Members } from './model.Member'

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
		length: 255,
	})
	street!: String

	@Column({
		type: 'int',
	})
	streetNumber!: number

	@Column({
		type: 'varchar',
		length: 5,
	})
	streetNumberSuffix!: String

	@Column({
		type: 'int',
	})
	unit!: String

	@Column({
		type: 'int',
	})
	appartmentNumber!: String

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
	members!: Members[]
}
