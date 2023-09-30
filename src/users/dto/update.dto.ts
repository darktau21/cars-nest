import { IsEmail, IsOptional, IsString } from 'class-validator';

class UpdateDto {
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  password?: string;
}

export default UpdateDto;
