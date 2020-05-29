import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm'
import { Qualifications } from './model.Qualification'
import { Members } from './model.Member'

@Entity()
export class Memberqualifications extends BaseEntity {
	@PrimaryGeneratedColumn({
		type: 'int',
	})
	id!: number

	@ManyToOne((type) => Members, (members) => members.memberqualifications)
	members!: Members

	@ManyToOne((type) => Qualifications, (qualifications) => qualifications.memberqualifications)
	qualifications!: Qualifications

	@Column({ type: 'date' })
	date!: Date

	@Column({
		type: 'tinyint',
		width: 1,
	})
	passed!: number
}
