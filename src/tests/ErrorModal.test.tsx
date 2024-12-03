import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorModal from '../components/ErrorModal';

describe('ErrorModal Component', () => {
  //   it('should not render when there is no error', () => {
  //     const handleClose = jest.fn();
  //     const { container } = render(
  //       <ErrorModal error={null} onClose={handleClose} />
  //     );

  //     expect(container.firstChild).toBeNull(); // The modal should not render
  //   });

  it('should render correctly when there is an error', () => {
    const handleClose = jest.fn();
    const errorMessage = 'Something went wrong!';
    render(<ErrorModal error={errorMessage} onClose={handleClose} />);

    // Check if the modal displays the error
    expect(screen.getByText(/error/i)).toBeInTheDocument();
    expect(screen.getByText(errorMessage)).toBeInTheDocument();

    // Check if the Close button is present
    const closeButton = screen.getByRole('button', { name: /close/i });
    expect(closeButton).toBeInTheDocument();
  });

  //   it('should call onClose when the Close button is clicked', () => {
  //     const handleClose = jest.fn();
  //     const errorMessage = 'Something went wrong!';
  //     render(<ErrorModal error={errorMessage} onClose={handleClose} />);

  //     // Simulate a click on the Close button
  //     const closeButton = screen.getByRole('button', { name: /close/i });
  //     fireEvent.click(closeButton);

  //     // Verify the onClose callback is called
  //     expect(handleClose).toHaveBeenCalledTimes(1);
  //   });
});
