import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	OneToMany,
} from 'typeorm'
import { Membergroup } from './Membergroup'
import { Membergqualification } from './Memberqualification'

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
		(type) => Membergqualification,
		(memberqualification) => memberqualification.qualification
	)
	memberqualifications!: Membergqualification[]
}
