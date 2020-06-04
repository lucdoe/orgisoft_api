import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, BaseEntity, ManyToOne, OneToOne } from 'typeorm'
import { Members } from '../../members/models/model.Member'
import { Expensetypes } from './model.Expensetype'
import { Currencys } from './model.Currency'
import { Inventoryitems } from '../../inventoryitems/models/model.Inventoryitem'

@Entity()
export class Expenses extends BaseEntity {
	@PrimaryGeneratedColumn({
		type: 'int',
	})
	id!: Number

	@ManyToOne((type) => Members, (members) => members.expenses)
	@JoinColumn()
	members!: Members

	@ManyToOne((type) => Expensetypes, (expensetypes) => expensetypes.expenses)
	@JoinColumn()
	expensetypes!: Expensetypes

	@ManyToOne((type) => Currencys, (currencys) => currencys.expenses)
	@JoinColumn()
	currencys!: Currencys

	@OneToOne((type) => Inventoryitems)
	@JoinColumn()
	inventoryitems!: Inventoryitems

	@Column({
		type: 'varchar',
		length: 50,
	})
	expense!: String

	@Column({
		type: 'float',
	})
	amount!: number

	@Column({
		type: 'date',
	})
	dateSpend!: Date

	@Column({
		type: 'date',
	})
	createdAt!: Date

	@Column({
		type: 'date',
	})
	updatedAt!: Date
}
