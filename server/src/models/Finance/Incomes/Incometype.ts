import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	OneToMany,
} from 'typeorm'
import { Income } from './Income'
@Entity()
export class Incometype extends BaseEntity {
	@PrimaryGeneratedColumn({
		type: 'int',
	})
	id!: number

	@Column({
		type: 'varchar',
		length: 50,
	})
	incometype!: string

	@OneToMany((type) => Income, (income) => income.incometype)
	incomes!: Income[]
}
