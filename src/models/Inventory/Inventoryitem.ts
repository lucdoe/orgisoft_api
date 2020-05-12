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
import { Memberitemamount } from './Memberitemamount'
import { Inventoryplace } from './Inventoryplace'

@Entity()
export class Inventoryitem extends BaseEntity {
	@PrimaryGeneratedColumn({
		type: 'int',
	})
	id!: Number

	@ManyToOne(
		(type) => Inventorygroup,
		(inventorygroup) => inventorygroup.inventoryitems
	)
	inventorygroup!: Inventorygroup

	@OneToOne((type) => Expense)
	expense!: Expense

	@OneToMany(
		(type) => Memberitemamount,
		(memberitemamount) => memberitemamount.inventoryitem
	)
	memberitemamount!: Memberitemamount

	@ManyToOne(
		(type) => Inventoryplace,
		(inventoryplace) => inventoryplace.inventoryitems
	)
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
