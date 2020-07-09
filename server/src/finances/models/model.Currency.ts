import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm'
import { Expenses } from './model.Expense'
import { Incomes } from './model.Income'

@Entity()
export class Currencys extends BaseEntity {
	@PrimaryGeneratedColumn({
		type: 'int',
	})
	id!: number

	@Column({
		type: 'varchar',
		length: 255,
	})
	currency!: string

	@Column({
		type: 'varchar',
		length: 3,
	})
	currencyCode!: string

	@Column({
		type: 'smallint',
	})
	currencyNumber!: number

	@OneToMany((type) => Expenses, (expenses) => expenses.currencys)
	expenses!: Expenses[]

	@OneToMany((type) => Incomes, (incomes) => incomes.currencys)
	incomes!: Incomes[]
}
