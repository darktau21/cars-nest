import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  ParseIntPipe,
  Query,
  Delete,
  Patch,
} from '@nestjs/common';
import CreateDto from './dto/create.dto';
import { UsersService } from './users.service';
import UpdateDto from './dto/update.dto';

@Controller('/auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/signup')
  create(@Body() body: CreateDto) {
    const { email, password } = body;
    return this.usersService.create(email, password);
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
