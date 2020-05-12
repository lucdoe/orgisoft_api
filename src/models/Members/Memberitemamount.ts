import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	ManyToOne,
	OneToMany,
	OneToOne,
	JoinColumn,
} from 'typeorm'
import { Inventoryitem } from '../Inventory/Inventoryitem'
import { Member } from './Member'

@Entity()
export class Memberitemamount extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@ManyToOne((type) => Member, (member) => member.memberitemamounts)
	@JoinColumn()
	member!: Member

	@OneToMany(
		(type) => Inventoryitem,
		(inventoryitem) => inventoryitem.memberitemamount
	)
	@JoinColumn()
	inventoryitems!: Inventoryitem[]

	@Column({ type: 'date' })
	date!: Date

	@Column({
		type: 'int',
	})
	amount!: number

	@Column({
		type: 'date',
	})
	createdAt!: Date

	@Column({
		type: 'date',
	})
	updatedAt!: Date
}
