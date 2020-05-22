import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	ManyToOne,
} from 'typeorm'
import { Qualification } from './Qualification'
import { Member } from './Member'

@Entity()
export class Memberqualification extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@ManyToOne((type) => Member, (member) => member.memberqualifications)
	member!: Member

	@ManyToOne(
		(type) => Qualification,
		(qualification) => qualification.memberqualifications
	)
	qualification!: Qualification

	@Column({ type: 'date' })
	date!: Date

	@Column({
		type: 'tinyint',
		width: 1,
	})
	passed!: number
}