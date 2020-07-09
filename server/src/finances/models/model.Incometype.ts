import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm'
import { Incomes } from './model.Income'
@Entity()
export class Incometypes extends BaseEntity {
	@PrimaryGeneratedColumn({
		type: 'int',
	})
	id!: number

	@Column({
		type: 'varchar',
		length: 255,
	})
	incometype!: string

	@OneToMany((type) => Incomes, (incomes) => incomes.incometypes)
	incomes!: Incomes[]
}
