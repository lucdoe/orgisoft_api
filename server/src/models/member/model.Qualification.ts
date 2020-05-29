import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm'
import { Memberqualifications } from './model.Memberqualification'

@Entity()
export class Qualifications extends BaseEntity {
	@PrimaryGeneratedColumn({
		type: 'int',
	})
	id!: number

	@Column({
		type: 'varchar',
		length: 50,
	})
	qualification!: string

	@Column({ type: 'text' })
	description!: string

	@OneToMany((type) => Memberqualifications, (memberqualifications) => memberqualifications.qualifications)
	memberqualifications!: Memberqualifications
}
