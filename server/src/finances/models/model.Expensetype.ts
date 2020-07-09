import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm'
import { Expenses } from './model.Expense'
@Entity()
export class Expensetypes extends BaseEntity {
	@PrimaryGeneratedColumn({
		type: 'int',
	})
	id!: number

	@Column({
		type: 'varchar',
		length: 255,
	})
	expensetype!: string

	@OneToMany((type) => Expenses, (expenses) => expenses.expensetypes)
	expenses!: Expenses[]
}
