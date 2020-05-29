import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm'
import { Inventoryitems } from './model.Inventoryitem'

@Entity()
export class Inventorygroups extends BaseEntity {
	@PrimaryGeneratedColumn({
		type: 'int',
	})
	id!: number

	@Column({
		type: 'varchar',
		length: 50,
	})
	inventorygroup!: string

	@OneToMany((type) => Inventoryitems, (inventoryitems) => inventoryitems.inventorygroups)
	inventoryitems!: Inventoryitems[]
}
