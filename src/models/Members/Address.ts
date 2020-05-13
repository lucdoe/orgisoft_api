import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToOne,
	BaseEntity,
	ManyToOne,
	OneToMany,
} from 'typeorm'
import { City } from './City'
import { Member } from './Member'

@Entity()
export class Address extends BaseEntity {
	@PrimaryGeneratedColumn({
		type: 'int',
	})
	id!: Number

	@ManyToOne((type) => City)
	city!: City

	@Column({
		type: 'varchar',
	})
	street!: String

	@Column({
		type: 'varchar',
		length: 20,
	})
	streetNumber!: String

	@Column({
		type: 'text',
	})
	note!: string

	@Column({
		type: 'date',
	})
	createdAt!: Date

	@Column({
		type: 'date',
	})
	updatedAt!: Date

	@OneToMany((type) => Member, (member) => member.address)
	member!: Member
}
