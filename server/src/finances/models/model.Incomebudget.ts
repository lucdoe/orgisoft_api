import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity()
export class Incomebudgets extends BaseEntity {
	@PrimaryGeneratedColumn({
		type: 'int',
	})
	id!: number

	@Column({
		type: 'varchar',
		length: 255,
	})
	incomebudget!: string

	@Column({
		type: 'int',
	})
	amount!: number
}
