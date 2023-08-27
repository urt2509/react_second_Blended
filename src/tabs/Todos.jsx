import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, Text, Todo } from 'components';

export class Todos extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    const savedTodos = JSON.parse(window.localStorage.getItem('todos'));
    if (!savedTodos) {
      return;
    }
    this.setState({ todos: savedTodos });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.todos !== this.state.todos) {
      window.localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  handleSubmit = newText => {
    const todo = { text: newText, id: nanoid() };
    this.setState(prevState => {
      return { todos: [...prevState.todos, todo] };
    });
  };

  handleDeleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todoId !== todo.id),
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.handleSubmit} />
        {todos.length === 0 && <Text>Sorry...There are no any todos</Text>}
        <Grid>
          {todos.map(({ id, text }, idx) => (
            <GridItem key={id}>
              <Todo
                text={text}
                todosNumber={idx + 1}
                todoId={id}
                onClickDelete={this.handleDeleteTodo}
              />
            </GridItem>
          ))}
        </Grid>
      </>
    );
  }
}
