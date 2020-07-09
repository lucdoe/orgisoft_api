import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne } from 'typeorm'
import { Addresses } from './model.Address'
import { Countries } from './model.Countries'

@Entity()
export class Citys extends BaseEntity {
	@PrimaryGeneratedColumn({
		type: 'int',
	})
	id!: number

	@ManyToOne((type) => Countries)
	country!: Countries

	@Column({
		type: 'varchar',
		length: 255,
	})
	city!: string

	@Column({
		type: 'varchar',
		length: 10,
	})
	postcode!: string

	@Column({
		type: 'varchar',
		length: 255,
	})
	state!: string

	@OneToMany((type) => Addresses, (addresses) => addresses.citys)
	addresses!: Addresses[]
}
