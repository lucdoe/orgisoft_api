import { Entity, PrimaryGeneratedColumn, Column, OneToOne, BaseEntity, ManyToOne } from 'typeorm'
import { Inventorygroup } from '../Inventory/Inventorygroup'
import { Inventoryplace } from './Inventoryplace'
import { Members } from '../Members/Members'

@Entity()
export class Inventoryitem extends BaseEntity {
	@PrimaryGeneratedColumn({
		type: 'int',
	})
	id!: Number

	@ManyToOne((type) => Inventorygroup, (inventorygroup) => inventorygroup.inventoryitems)
	inventorygroup!: Inventorygroup

	@ManyToOne((type) => Members, (members) => members.inventoryitems)
	member!: Members

	@ManyToOne((type) => Inventoryplace, (inventoryplace) => inventoryplace.inventoryitems)
	inventoryplace!: Inventoryplace

	@Column({
		type: 'varchar',
	})
	inventoryitem!: string

	@Column({
		type: 'text',
	})
	descriptionText!: string

	@Column({
		type: 'date',
	})
	createdAt!: Date

	@Column({
		type: 'date',
	})
	updatedAt!: Date
}
