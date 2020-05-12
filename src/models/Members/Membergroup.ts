import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	OneToMany,
} from 'typeorm'
import { Member } from './Member'

@Entity()
export class Membergroup extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({
		type: 'varchar',
		length: '50',
	})
	membergroup!: string

	@OneToMany((type) => Member, (member) => member.membergroup)
	members!: Member[]
}
