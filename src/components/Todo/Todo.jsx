import { Text } from 'components';
import { TodoWrapper, DeleteButton } from './Todo.styled';
import { RiDeleteBinLine } from 'react-icons/ri';

export const Todo = ({ text, todosNumber, onClickDelete, todoId }) => {
  return (
    <TodoWrapper>
      <Text textAlign="center" marginBottom="20px">
        TODO #{todosNumber}
      </Text>
      <Text>{text}</Text>
      <DeleteButton type="button" onClick={() => onClickDelete(todoId)}>
        <RiDeleteBinLine size={24} />
      </DeleteButton>
    </TodoWrapper>
  );
};
