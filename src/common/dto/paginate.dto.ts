import { IsNumber, IsOptional, IsPositive, Min } from "class-validator"


export class PaginateDto {
    @IsOptional()
    @IsPositive()
    @IsNumber()
    @Min(1)
    limit?: number

    @IsOptional()
    @IsNumber()
    offset?: number
}