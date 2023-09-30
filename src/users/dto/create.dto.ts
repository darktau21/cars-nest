import { IsEmail, IsString } from 'class-validator';

class CreateDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export default CreateDto;
