import { ChannelEntity } from "src/channels/entities/channel.entity";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { DefaultPostEntity } from "../../posts/default-posts/entities/default-post.entity";

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

    @ManyToMany(() => ChannelEntity, (channel) => channel.users)
    @JoinTable()
    channels: ChannelEntity[]

    @ManyToOne(() => DefaultPostEntity, defaultPosts => defaultPosts.author)
    defaultPosts: DefaultPostEntity[]
}
