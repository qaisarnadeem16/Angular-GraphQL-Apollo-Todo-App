import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Subscription } from 'rxjs';

const GET_USERS = gql`
  query {
    getUsers {
      id
      username
      email
      age
      nationality
    }
  }
`;

const CREATE_USER = gql`
  mutation Mutation(
    $email: String!
    $username: String!
    $age: Int!
    $nationality: String!
  ) {
    createUser(
      email: $email
      username: $username
      age: $age
      nationality: $nationality
    ) {
      id
      email
      username
      age
      nationality
    }
  }
`;

const DELETE_USER = gql`
  mutation Mutation($deleteUserId: ID!) {
    deleteUser(id: $deleteUserId) {
      id
    }
  }
`;

const UPDATE_USER = gql`
  mutation Mutation($updateUserId: ID!, $input: UserInput!) {
    updateUser(id: $updateUserId, input: $input) {
      email
      username
      age
      nationality
      id
    }
  }
`;
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit, OnDestroy {
  loading: boolean | undefined;
  users: any[];
  newUser: any;

  private querySubscription!: Subscription;

  constructor(private apollo: Apollo) {
    this.users = [];
    this.newUser = {}; // Initialize newUser as an empty object
  }

  ngOnInit() {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: GET_USERS,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.users = data.getUsers;
      });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }

  editUser(userId: number) {
    const userToEdit = this.users.find((user) => user.id === userId);

    if (userToEdit) {
      // Assign user values to newUser for editing
      this.newUser = { ...userToEdit };
    }
  }

  saveEditedUser() {
    const { id, email, username, age, nationality } = this.newUser;

    this.apollo
      .mutate<any>({
        mutation: UPDATE_USER,
        variables: {
          "input": {
            "email": email,
            "username": username,
            "age": age,
            "nationality": nationality
          },
          "updateUserId": id
        },
        refetchQueries: [{ query: GET_USERS }],
      })
      .subscribe(() => {
        console.log('User updated');
        this.newUser = {}; // Clear newUser after editing
      });
  }

  deleteUser(id: number) {
    this.apollo
      .mutate<any>({
        mutation: DELETE_USER,
        variables: {
          deleteUserId: id,
        },
        refetchQueries: [{ query: GET_USERS }],
      })
      .subscribe(() => {
        console.log('User deleted');
      });
  }

  createUser() {
    const { email, username, age, nationality } = this.newUser;
    console.log(this.newUser);
    this.apollo
      .mutate<any>({
        mutation: CREATE_USER,
        variables: {
          email,
          username,
          age,
          nationality,
        },
        refetchQueries: [{ query: GET_USERS }],
      })
      .subscribe((result) => {
        console.log('User created:', result.data.createUser);
        this.newUser = {}; // Clear the form after creation
      });
  }
}
