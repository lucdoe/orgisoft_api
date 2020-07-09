import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm'
import { Inventoryitems } from './model.Inventoryitem'

@Entity()
export class Inventoryplaces extends BaseEntity {
	@PrimaryGeneratedColumn({
		type: 'int',
	})
	id!: number

	@Column({
		type: 'varchar',
		length: 255,
	})
	inventoryplace!: string

	@OneToMany((type) => Inventoryitems, (inventoryitems) => inventoryitems.inventoryplaces)
	inventoryitems!: Inventoryitems[]
}
