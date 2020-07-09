import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne } from 'typeorm'
import { Addresses } from './model.Address'
import { Currencys } from '../../finances/models/model.Currency'
import { Citys } from './model.City'

@Entity()
export class Countries extends BaseEntity {
	@PrimaryGeneratedColumn({
		type: 'int',
	})
	id!: number

	@ManyToOne((type) => Currencys)
	currency!: Currencys

	@Column({
		type: 'varchar',
		length: 2,
	})
	ISO!: string

	@Column({
		type: 'varchar',
		length: 3,
	})
	ISO3!: string

	@Column({
		type: 'int',
	})
	ISONumeric!: number

	@Column({
		type: 'varchar',
		length: 150,
	})
	country!: string

	@OneToMany((type) => Citys, (citys) => citys.country)
	citys!: Citys[]
}
