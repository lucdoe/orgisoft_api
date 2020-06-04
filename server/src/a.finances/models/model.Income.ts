import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, BaseEntity, ManyToOne } from 'typeorm'
import { Members } from '../../a.members/models/model.Member'
import { Incometypes } from './model.Incometype'
import { Currencys } from './model.Currency'

@Entity()
export class Incomes extends BaseEntity {
	@PrimaryGeneratedColumn({
		type: 'int',
	})
	id!: Number

	@ManyToOne((type) => Members, (members) => members.incomes)
	@JoinColumn()
	members!: Members

	@ManyToOne((type) => Currencys, (currencys) => currencys.incomes)
	@JoinColumn()
	currencys!: Currencys

	@ManyToOne((type) => Incometypes, (incometypes) => incometypes.incomes)
	@JoinColumn()
	incometypes!: Incometypes

	@Column({
		type: 'varchar',
		length: 50,
	})
	income!: String

	@Column({
		type: 'float',
	})
	amount!: number

	@Column({
		type: 'date',
	})
	dateRecieved!: Date

	@Column({
		type: 'date',
	})
	createdAt!: Date

	@Column({
		type: 'date',
	})
	updatedAt!: Date
}
