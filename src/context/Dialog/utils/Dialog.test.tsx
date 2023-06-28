import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import DialogProvider from '../Dialog'
import DialogContext from './Context'

describe('Dialog', () => {
  it('should open when openButton is clicked', async () => {
    render(
      <DialogProvider>
        <TestComponent />
      </DialogProvider>,
    )
    const openButton = screen.getByTestId('openButton')
    fireEvent.click(openButton)
    const testContent = screen.getByText('Test content')
    expect(testContent).toBeVisible()
  })

  it('should close when backdrop is clicked', async () => {
    render(
      <DialogProvider>
        <TestComponent />
      </DialogProvider>,
    )
    const openButton = screen.getByTestId('openButton')
    fireEvent.click(openButton)
    const testContent = screen.getByText('Test content')
    expect(testContent).toBeVisible()
    const backdrop = screen.getByTestId('backdrop')
    fireEvent.click(backdrop)
    await waitFor(() => {
      expect(testContent).not.toBeVisible()
    })
  })

  it('should close when closeButton is clicked', async () => {
    render(
      <DialogProvider>
        <TestComponent />
        <CloseDialogButton />
      </DialogProvider>,
    )
    const openButton = screen.getByTestId('openButton')
    fireEvent.click(openButton)
    const testContent = screen.getByText('Test content')
    expect(testContent).toBeVisible()
    const closeButton = screen.getByTestId('closeButton')
    fireEvent.click(closeButton)
    await waitFor(() => {
      expect(testContent).not.toBeVisible()
    })
  })
})

function TestComponent() {
  const {
    actions: { openDialog },
  } = React.useContext(DialogContext) || { actions: {} }

  if (!openDialog) {
    return null
  }

  return (
    <button
      data-testid="openButton"
      onClick={() =>
        openDialog(<div>Test content</div>, 70, false, 'paper', true)
      }
    >
      Open Dialog
    </button>
  )
}

function CloseDialogButton() {
  const {
    actions: { closeDialog },
  } = React.useContext(DialogContext) || { actions: {} }

  if (!closeDialog) {
    return null
  }

  return (
    <button data-testid="closeButton" onClick={closeDialog}>
      Close Dialog
    </button>
  )
}
