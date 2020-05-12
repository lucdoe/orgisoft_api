import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	OneToMany,
} from 'typeorm'
import { Memberqualification } from './Memberqualification'

@Entity()
export class Qualification extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({
		type: 'varchar',
		length: 50,
	})
	qualification!: string

	@Column({ type: 'text' })
	description!: string

	@OneToMany(
		(type) => Memberqualification,
		(memberqualification) => memberqualification.qualification
	)
	memberqualifications!: Memberqualification[]
}
