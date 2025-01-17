import { render, screen, fireEvent } from '@testing-library/react'
import ToDo from '../Todos/Todo'


describe('ToDo Component', () => {
  it('renders todo text and displays done or not done status', () => {
    const todo = { text: 'Test this component', done: false }; 
    const mockDelete = vi.fn(); 
    const mockComplete = vi.fn(); 

    render(
      <ToDo 
        todo={todo} 
        onClickDelete={mockDelete} 
        onClickComplete={mockComplete} 
      />
    );

    expect(screen.getByText('Test this component')).toBeInTheDocument();
    expect(screen.getByText('This todo is not done')).toBeInTheDocument();

    const completeButton = screen.getByText('Set as done');
    fireEvent.click(completeButton);

    expect(mockComplete).toHaveBeenCalledWith(todo);

    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);

    expect(mockDelete).toHaveBeenCalledWith(todo);
  });

  it('displays done message when todo is marked as done', () => {
    const todo = { text: 'Completed todo', done: true }; 
    const mockDelete = vi.fn();

    render(
      <ToDo 
        todo={todo} 
        onClickDelete={mockDelete} 
        onClickComplete={() => {}} 
      />
    );

    expect(screen.getByText('Completed todo')).toBeInTheDocument();
    expect(screen.getByText('This todo is done')).toBeInTheDocument();
  });
});