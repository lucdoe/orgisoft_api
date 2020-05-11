import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToOne,
	JoinColumn,
	BaseEntity,
	OneToMany,
} from 'typeorm'
import { City } from '../City'

@Entity()
export class Address extends BaseEntity {
	@PrimaryGeneratedColumn({
		type: 'int',
	})
	id!: Number

	@OneToOne((type) => City)
	@JoinColumn()
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
}
