import { Entity, PrimaryGeneratedColumn, Column, AfterInsert } from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logEntity() {
    console.log(`Inserted user with id ${this.id}`);
  }
}

export default User;
