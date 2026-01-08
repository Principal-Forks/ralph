import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText('How Ralph Works with Amp')).toBeInTheDocument()
  })

  it('renders React Flow component', () => {
    render(<App />)
    expect(screen.getByLabelText('Zoom In')).toBeInTheDocument()
  })
})
