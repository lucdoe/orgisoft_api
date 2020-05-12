import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	OneToMany,
	JoinColumn,
} from 'typeorm'
import { Inventoryitem } from './Inventoryitem'

@Entity()
export class Inventoryplace extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({
		type: 'varchar',
		length: '50',
	})
	inventoryplace!: string

	@OneToMany(
		(type) => Inventoryitem,
		(inventoryitem) => inventoryitem.inventoryplace
	)
	inventoryitems!: Inventoryitem[]
}
