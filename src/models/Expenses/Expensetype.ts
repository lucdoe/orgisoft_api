import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	OneToMany,
} from 'typeorm'
import { Expense } from './Expense'
@Entity()
export class Expensetype extends BaseEntity {
	@PrimaryGeneratedColumn({
		type: 'int',
	})
	id!: number

	@Column({
		type: 'varchar',
		length: 50,
	})
	expensetype!: string

	@OneToMany((type) => Expense, (expense) => expense.expensetypes)
	expenses!: Expense[]
}
