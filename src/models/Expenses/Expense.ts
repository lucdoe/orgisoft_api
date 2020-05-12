import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	JoinColumn,
	BaseEntity,
	ManyToOne,
} from 'typeorm'
import { Member } from '../Members/Member'
import { Expensetype } from './Expensetype'
import { Currency } from '../Currency'

@Entity()
export class Expense extends BaseEntity {
	@PrimaryGeneratedColumn({
		type: 'int',
	})
	id!: Number

	@ManyToOne((type) => Member, (member) => member.expenses)
	@JoinColumn()
	member!: Member

	@ManyToOne((type) => Expensetype, (expensetype) => expensetype.expenses)
	@JoinColumn()
	expensetype!: Expensetype

	@ManyToOne((type) => Currency, (currency) => currency.expenses)
	@JoinColumn()
	currency!: Currency

	@Column({
		type: 'varchar',
		length: 50,
	})
	expense!: String

	@Column({
		type: 'float',
	})
	amount!: number

	@Column({
		type: 'date',
	})
	dateSpend!: Date

	@Column({
		type: 'date',
	})
	createdAt!: Date

	@Column({
		type: 'date',
	})
	updatedAt!: Date
}
