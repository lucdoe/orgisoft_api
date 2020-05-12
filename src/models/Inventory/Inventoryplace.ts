import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity()
export class Inventoryplace extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        type: 'varchar',
        length: '50',
    })
    inventoryplace!: string
}