import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity()
export class City extends BaseEntity {
	@PrimaryGeneratedColumn({ type: 'int' })
	id!: number

	@Column({
		type: 'varchar',
		length: 150,
	})
	city!: string

	@Column({
		type: 'varchar',
		length: 30,
	})
	postcode!: string

	@Column({
		type: 'varchar',
		length: 150,
	})
	state!: string

	@Column({
		type: 'varchar',
		length: 150,
	})
	country!: string

	@Column({
		type: 'varchar',
		length: 10,
	})
	countryCode!: string
}
