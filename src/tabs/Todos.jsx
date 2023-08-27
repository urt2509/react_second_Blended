import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

export class Todos extends Component {
  state = {
    todos: [],
  };

  handleSubmit = newText => {
    const todo = { text: newText, id: nanoid() };
    this.setState(prevState => {
      return { todos: [...prevState.todos, todo] };
    });
    console.log(this.state.todos);
  };

  render() {
    return (
      <>
        <SearchForm onSubmit={this.handleSubmit} />
        <Grid>
          <GridItem>
            <Todo />
          </GridItem>
        </Grid>
      </>
    );
  }
}
