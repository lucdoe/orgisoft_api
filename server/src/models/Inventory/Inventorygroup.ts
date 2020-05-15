import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	OneToMany,
} from 'typeorm'
import { Inventoryitem } from './Inventoryitem'

@Entity()
export class Inventorygroup extends BaseEntity {
	@PrimaryGeneratedColumn({
		type: 'int',
	})
	id!: number

	@Column({
		type: 'varchar',
		length: 50,
	})
	inventorygroup!: string

	@OneToMany(
		(type) => Inventoryitem,
		(inventoryitem) => inventoryitem.inventorygroup
	)
	inventoryitems!: Inventoryitem[]
}
