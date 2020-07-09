import { Entity, PrimaryGeneratedColumn, Column, OneToOne, BaseEntity, ManyToOne } from 'typeorm'
import { Inventorygroups } from './model.Inventorygroup'
import { Inventoryplaces } from './model.Inventoryplace'
import { Members } from '../../members/models/model.Member'

@Entity()
export class Inventoryitems extends BaseEntity {
	@PrimaryGeneratedColumn({
		type: 'int',
	})
	id!: Number

	@ManyToOne((type) => Inventorygroups, (inventorygroups) => inventorygroups.inventoryitems)
	inventorygroups!: Inventorygroups

	@ManyToOne((type) => Members, (members) => members.inventoryitems)
	members!: Members

	@ManyToOne((type) => Inventoryplaces, (inventoryplaces) => inventoryplaces.inventoryitems)
	inventoryplaces!: Inventoryplaces

	@Column({
		type: 'varchar',
		length: 255,
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
