import {User} from '../models/user.model';
import {Subject} from 'rxjs';

export class UserService {
  private users: User[] = [
    {
      firstName: 'james',
      lastName: 'smith',
      email: 'smith@hot.com',
      drinkPreference: 'coca',
      hobbies: ['coder', 'manger']
    }
  ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
