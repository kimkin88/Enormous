import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button';

describe('Button', () => {
    test('render Button', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
