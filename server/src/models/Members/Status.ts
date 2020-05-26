import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm'
import { Members } from './Members'
@Entity()
export class Status extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({
		type: 'varchar',
		length: '50',
	})
	status!: string

	@OneToMany((type) => Members, (members) => members.status)
	members!: Members
}
