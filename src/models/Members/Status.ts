import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	OneToMany,
} from 'typeorm'
import { Member } from './Member'
@Entity()
export class Status extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({
		type: 'varchar',
		length: '50',
	})
	status!: string

	@OneToMany((type) => Member, (member) => member.status)
	members!: Member[]
}
