import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ unique: true, nullable: false })
    username: string

    @Column({ nullable: true})
    avatarLink: string

    @Column({ unique: true, nullable: false })
    phoneNumber: string

    @Column({ nullable: true })
    email: string

    @Column({ nullable: false })
    password: string

    @Column({ nullable: true })
    age: number

    @Column({ nullable: true })
    bio: string

    @Column({ default: false})
    isAdmin: boolean
}
