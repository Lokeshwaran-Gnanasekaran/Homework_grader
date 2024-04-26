// src/__tests__/student.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Student from './student'; // Adjust the import path according to your file structure

describe('Student Component', () => {
  it('renders the correct number of assignment cards', () => {
    render(
      <MemoryRouter>
        <Student />
      </MemoryRouter>
    );
    
    // Use data-testid attribute for querying cards
    const cards = screen.getAllByTestId('assignment-card');
    expect(cards).toHaveLength(10); // Expecting 10 cards as per initial state
  });
});

it('displays all assignment titles correctly', () => {
    render(
      <MemoryRouter>
        <Student />
      </MemoryRouter>
    );
  
    // Check each title from the initial state if it is rendered
    const expectedTitles = ["Algorithm Analysis", "Database Systems", "Machine Learning", "Operating Systems", "Network Security", "Data Structures", "Software Engineering", "Web Development", "Artificial Intelligence", "Cryptography"];
    expectedTitles.forEach(title => {
      const titleElement = screen.getByText(title);
      expect(titleElement).toBeInTheDocument();
    });
  });

  it('displays due dates for all assignments', () => {
    render(
      <MemoryRouter>
        <Student />
      </MemoryRouter>
    );
  
    // Expect the due dates to appear on the page
    const dueDates = ["Next Monday", "Friday", "Two Weeks", "Next Month", "In 3 Days", "End of Semester", "Next Monday", "In 4 Weeks", "Next Month", "In 2 Weeks"];
    dueDates.forEach(dueDate => {
      const dueDateElement = screen.getAllByText(new RegExp(`Due: ${dueDate}`, 'i'));
      expect(dueDateElement.length).toBeGreaterThan(0); // Checks if at least one match is found for each due date
    });
  });
