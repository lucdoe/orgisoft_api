import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'
@Entity()
export class Currency extends BaseEntity {
	@PrimaryGeneratedColumn()
	currency_id!: number
	@Column({
		length: 50,
	})
	currency!: string
	@Column('float')
	exchange_rate!: number
	@Column({
		length: 10,
	})
	currency_code!: string
}
