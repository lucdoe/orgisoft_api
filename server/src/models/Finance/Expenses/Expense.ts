import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, BaseEntity, ManyToOne, OneToOne } from 'typeorm'
import { Members } from '../../Members/Members'
import { Expensetype } from './Expensetype'
import { Currency } from '../Currency'
import { Inventoryitem } from '../../Inventory/Inventoryitem'

@Entity()
export class Expense extends BaseEntity {
	@PrimaryGeneratedColumn({
		type: 'int',
	})
	id!: Number

	@ManyToOne((type) => Members, (members) => members.expenses)
	@JoinColumn()
	members!: Members

	@ManyToOne((type) => Expensetype, (expensetype) => expensetype.expenses)
	@JoinColumn()
	expensetype!: Expensetype

	@ManyToOne((type) => Currency, (currency) => currency.expenses)
	@JoinColumn()
	currency!: Currency

	@OneToOne((type) => Inventoryitem)
	@JoinColumn()
	inventoryitem!: Inventoryitem

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
