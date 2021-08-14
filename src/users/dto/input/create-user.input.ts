import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNumber, IsOptional } from "class-validator"
import { ChannelDto } from "src/channels/dto/channel.dto";

@InputType()
export class CreateUserInput {
    @Field()
    username: string

    @Field()
    phoneNumber: string

    @Field()
    password: string

    @Field({ nullable: true })
    @IsOptional()
    @IsEmail()
    email?: string

    @Field({ nullable: true })
    @IsOptional()
    @IsNumber()
    age?: number
}
