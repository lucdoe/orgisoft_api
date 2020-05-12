import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	OneToMany,
} from 'typeorm'
import { Member } from './Member'

@Entity()
export class Position extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({
		type: 'varchar',
		length: '50',
	})
	position!: string

	@OneToMany((type) => Member, (member) => member.position)
	members!: Member[]
}
