import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity, ManyToOne } from 'typeorm'
import { Addresses } from './model.Addresses'
import { Positions } from './model.Positions'
import { Statuses } from './model.Statuses'
import { Membergroups } from './model.Membergroups'
import { Memberqualifications } from './model.Memberqualifications'
import { Expenses } from '../Finance/model.Expenses'
import { Incomes } from '../Finance/model.Incomes'
import { Inventoryitems } from '../Inventory/model.Inventoryitems'

@Entity()
export class Members extends BaseEntity {
	@PrimaryGeneratedColumn({
		type: 'int',
	})
	id!: Number

	@ManyToOne((type) => Addresses, (addresses) => addresses.members)
	addresses!: Addresses

	@ManyToOne((type) => Positions, (positions) => positions.members)
	positions!: Positions

	@ManyToOne((type) => Statuses, (statuses) => statuses.members)
	statuses!: Statuses

	@ManyToOne((type) => Membergroups, (membergroups) => membergroups.members)
	membergroups!: Membergroups

	@Column({
		type: 'varchar',
		length: 150,
	})
	title!: string

	@Column({
		type: 'varchar',
	})
	firstName!: string

	@Column({
		type: 'varchar',
	})
	lastName!: string

	@Column({
		type: 'varchar',
		length: 50,
	})
	phoneMobile!: string

	@Column({
		type: 'varchar',
		length: 50,
	})
	phoneHome!: string

	@Column({
		type: 'varchar',
	})
	email!: string

	@Column({
		type: 'varchar',
		length: 20,
	})
	gender!: string

	@Column({
		type: 'date',
	})
	birthday!: Date

	@Column({
		type: 'text',
	})
	note!: string

	@Column({
		type: 'date',
	})
	createdAt!: Date

	@Column({
		type: 'date',
	})
	updatedAt!: Date

	@OneToMany((type) => Memberqualifications, (memberqualifications) => memberqualifications.members)
	memberqualifications!: Memberqualifications

	@OneToMany((type) => Expenses, (expenses) => expenses.members)
	expenses!: Expenses

	@OneToMany((type) => Incomes, (incomes) => incomes.members)
	incomes!: Incomes

	@OneToMany((type) => Inventoryitems, (inventoryitems) => inventoryitems.members)
	inventoryitems!: Inventoryitems
}
