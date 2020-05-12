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
import { Inventorygroup } from '../Inventory/Inventorygroup'
import { Expense } from '../Expenses/Expense'
import { Memberitemamount } from '../Members/Memberitemamount'
import { Inventoryplace } from './Inventoryplace'

@Entity()
export class Inventoryitem extends BaseEntity {
	@PrimaryGeneratedColumn({
		type: 'int',
	})
	id!: Number

	@Column({ type: 'int' })
	inventorygroup!: Inventorygroup

	@OneToOne((type) => Expense)
	@JoinColumn()
	expense!: Expense

	@Column({ type: 'int' })
	memberitemamount!: Memberitemamount[]

	@Column({ type: 'int' })
	inventoryplace!: Inventoryplace

	@Column({
		type: 'varchar',
	})
	inventoryitem!: string

	@Column({
		type: 'text',
	})
	description!: string

	@Column({
		type: 'date',
	})
	createdAt!: Date

	@Column({
		type: 'date',
	})
	updatedAt!: Date
}
