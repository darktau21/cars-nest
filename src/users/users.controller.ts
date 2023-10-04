import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import CreateDto from './dto/create.dto';
import { UsersService } from './users.service';
import UpdateDto from './dto/update.dto';
import UserDto from './dto/user.dto';
import Serialize from '../interceptors/serialize.interceptor';
import AuthService from './auth.service';
import { CurrentUser } from './current-user.decorator';
import User from './user.entity';

@Controller('/auth')
@Serialize(UserDto)
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Post('/signup')
  create(@Body() body: CreateDto) {
    const { email, password } = body;
    return this.authService.signup(email, password);
  }

  @Post('/signin')
  login(@Body() body: CreateDto) {
    const { email, password } = body;
    return this.authService.signin(email, password);
  }

  @Get('/whoami')
  whoAmI(@CurrentUser() user: User) {
    return user;
  }

  @Get('/:id')
  find(@Param('id', ParseIntPipe) id: number) {
    console.log(typeof id);
    return this.usersService.findOne(id);
  }

  @Get()
  findAll(@Query('email') email: string) {
    return this.usersService.find(email);
  }

  @Delete()
  remove(@Param('id', ParseIntPipe) id: number) {
    this.usersService.remove(id);
  }

  @Patch('/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateDto) {
    return this.usersService.update(id, body);
  }
}
