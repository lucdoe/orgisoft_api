import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm'
import { Qualification } from './Qualification'
import { Members } from './Members'

@Entity()
export class Memberqualification extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@ManyToOne((type) => Members, (members) => members.memberqualifications)
	members!: Members

	@ManyToOne((type) => Qualification, (qualification) => qualification.memberqualifications)
	qualification!: Qualification

	@Column({ type: 'date' })
	date!: Date

	@Column({
		type: 'tinyint',
		width: 1,
	})
	passed!: number
}
