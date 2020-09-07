import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { UserForm } from './views/UserForm'
import { UserEdit } from './views/UserEdit';
import { User, UserProps } from './models/User';

const root = document.querySelector('#root');
const user = User.buildUser({ name: 'NAME', age: 20});

const collection = new Collection<User, UserProps>('http://localhost:3000/users', (json: UserProps) => {
  return User.buildUser(json);
});

collection.on('change', () => {
  if (root) {
    new UserList(root, collection).render();
  }
})

collection.fetch();

// if (root) {
//   const userForm = new UserForm(root, user);
//   userForm.render();

//   const userEdit = new UserEdit(root, user);
//   userEdit.render();
//   console.log(userEdit);
// } else {
//   throw new Error('Root element not found');
// }