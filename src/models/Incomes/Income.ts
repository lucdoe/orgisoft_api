import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	JoinColumn,
	BaseEntity,
	ManyToOne,
} from 'typeorm'
import { Member } from '../Members/Member'
import { Incometype } from './Incometype'
import { Currency } from '../Currency'

@Entity()
export class Income extends BaseEntity {
	@PrimaryGeneratedColumn({
		type: 'int',
	})
	id!: Number

	@ManyToOne((type) => Member, (member) => member.incomes)
	@JoinColumn()
	member!: Member

	@ManyToOne((type) => Currency, (currency) => currency.incomes)
	@JoinColumn()
	currency!: Currency

	@ManyToOne((type) => Incometype, (incometype) => incometype.incomes)
	@JoinColumn()
	incometype!: Incometype

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
