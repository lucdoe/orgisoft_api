import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm'
import { Addresses } from './model.Address'

@Entity()
export class Citys extends BaseEntity {
	@PrimaryGeneratedColumn({
		type: 'int',
	})
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

	@OneToMany((type) => Addresses, (addresses) => addresses.citys)
	addresses!: Addresses
}
