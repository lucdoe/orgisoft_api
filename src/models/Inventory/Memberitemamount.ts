import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	ManyToOne,
	OneToMany,
	JoinColumn,
} from 'typeorm'
import { Inventoryitem } from './Inventoryitem'
import { Member } from '../Members/Member'

@Entity()
export class Memberitemamount extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@ManyToOne((type) => Member, (member) => member.memberitemamount)
	member!: Member

	@ManyToOne(
		(type) => Inventoryitem,
		(inventoryitem) => inventoryitem.memberitemamount
	)
	inventoryitem!: Inventoryitem

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
