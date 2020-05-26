import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToOne,
	BaseEntity,
	ManyToOne,
} from 'typeorm'
import { Inventorygroup } from '../Inventory/Inventorygroup'
import { Inventoryplace } from './Inventoryplace'
import { Member } from '../Members/Member'

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

	@ManyToOne((type) => Member, (member) => member.inventoryitems)
	member!: Member

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
