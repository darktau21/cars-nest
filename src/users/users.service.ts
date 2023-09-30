import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import User from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async create(email: string, password: string) {
    const user = this.repo.create({ email, password });
    return await this.repo.save(user);
  }

  async findOne(id: number) {
    return await this.repo.findOneBy({ id });
  }

  async find(email: string) {
    return await this.repo.find({ where: { email } });
  }

  async update(id: number, attr: Partial<User>) {
    const user = await this.findOne(id);

    if (!user) return null;

    this.repo.save({ ...user, ...attr });
  }

  async remove(id: number) {
    const user = await this.findOne(id);

    if (user) {
      this.repo.remove(user);
    }

    return null;
  }
}
