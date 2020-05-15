import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	OneToMany,
} from 'typeorm'
import { Expense } from './Expenses/Expense'
import { Income } from './Incomes/Income'

@Entity()
export class Currency extends BaseEntity {
	@PrimaryGeneratedColumn({ type: 'int' })
	id!: number

	@Column({
		type: 'varchar',
		length: 50,
	})
	currency!: string

	@Column('float')
	exchangeRate!: number

	@Column({
		type: 'varchar',
		length: 10,
	})
	currencyCode!: string

	@OneToMany((type) => Expense, (expense) => expense.currency)
	expenses!: Expense[]

	@OneToMany((type) => Income, (income) => income.currency)
	incomes!: Income[]
}
