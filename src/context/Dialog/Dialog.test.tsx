import { useContext } from 'react'

import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import DialogProvider from '.'
import DialogContext from './Dialog.Context'

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
  } = useContext(DialogContext) || { actions: { openDialog: () => ({}) } }

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
  } = useContext(DialogContext) || { actions: { closeDialog: () => ({}) } }

  if (!closeDialog) {
    return null
  }

  return (
    <button data-testid="closeButton" onClick={closeDialog}>
      Close Dialog
    </button>
  )
}
