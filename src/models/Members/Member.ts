import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToOne,
	OneToMany,
	JoinColumn,
	BaseEntity,
	ManyToOne,
} from 'typeorm'
import { Address } from './Address'
import { Position } from './Position'
import { Status } from './Status'
import { Membergroup } from './Membergroup'
import { Membergqualification } from './Memberqualification'
import { Expense } from '../Expenses/Expense'

@Entity()
export class Member extends BaseEntity {
	@PrimaryGeneratedColumn({
		type: 'int',
	})
	id!: Number

	@OneToOne((type) => Address)
	@JoinColumn()
	address!: Address

	@ManyToOne((type) => Position, (position) => position.position)
	positions!: Position[]

	@ManyToOne((type) => Status, (status) => status.position)
	statuses!: Status[]

	@ManyToOne((type) => Membergroup, (Membergroup) => Membergroup.position)
	Membergroups!: Membergroup[]

	@Column({
		type: 'varchar',
		length: 150,
	})
	title!: string

	@Column({
		type: 'varchar',
	})
	firstName!: string

	@Column({
		type: 'varchar',
	})
	lastName!: string

	@Column({
		type: 'varchar',
		length: 50,
	})
	phoneMobile!: string

	@Column({
		type: 'varchar',
		length: 50,
	})
	phoneHome!: string

	@Column({
		type: 'varchar',
	})
	email!: string

	@Column({
		type: 'varchar',
		length: 20,
	})
	gender!: string

	@Column({
		type: 'date',
	})
	birthday!: Date

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

	@OneToMany(
		(type) => Membergqualification,
		(memberqualification) => memberqualification.member
	)
	memberqualifications!: Membergqualification[]

	@OneToMany((type) => Expense, (expense) => expense.members)
	expenses!: Expense[]
}
