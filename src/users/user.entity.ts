import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  AfterInsert,
  Unique,
} from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Unique(['email'])
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logEntity() {
    console.log(`Inserted user with id ${this.id}`);
  }
}

export default User;
