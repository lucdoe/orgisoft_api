import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm'
import { Inventoryitems } from './model.Inventoryitems'

@Entity()
export class Inventoryplaces extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({
		type: 'varchar',
		length: '50',
	})
	inventoryplace!: string

	@OneToMany((type) => Inventoryitems, (inventoryitems) => inventoryitems.inventoryplaces)
	inventoryitems!: Inventoryitems[]
}
