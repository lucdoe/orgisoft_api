import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm'
import { Expenses } from './model.Expense'
import { Incomes } from './model.Income'

@Entity()
export class Currencys extends BaseEntity {
	@PrimaryGeneratedColumn({ type: 'int' })
	id!: number

	@Column({
		type: 'varchar',
		length: 50,
	})
	currencys!: string

	@Column('float')
	exchangeRate!: number

	@Column({
		type: 'varchar',
		length: 10,
	})
	currencyCode!: string

	@OneToMany((type) => Expenses, (expenses) => expenses.currencys)
	expenses!: Expenses[]

	@OneToMany((type) => Incomes, (incomes) => incomes.currencys)
	incomes!: Incomes[]
}
