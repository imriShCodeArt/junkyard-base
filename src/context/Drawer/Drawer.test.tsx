import React from 'react'
// src/context/Drawer/Drawer.tset.ts:

import '@testing-library/jest-dom'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import DrawerContext from './Context'
import Drawer from './Drawer' // Change this to your actual path

describe('Drawer', () => {
  // Initialization test
  // Check if the drawer opens correctly
  it('should open when openButton is clicked', async () => {
    render(
      <Drawer>
        <TestComponent />
      </Drawer>,
    )

    const openButton = screen.getByTestId('openButton')
    fireEvent.click(openButton)

    const testContent = screen.getByText('Test content')
    expect(testContent).toBeVisible()
  })

  // Check if the drawer has the correct width when open
  it('should have correct width when open', async () => {
    render(
      <Drawer>
        <TestComponent />
      </Drawer>,
    )

    const openButton = screen.getByTestId('openButton')
    fireEvent.click(openButton)

    const drawer = screen.getByTestId('drawer-paper')

    expect(drawer).toHaveStyle(`width: ${70}%`)
  })

  // Check if the drawer closes correctly when the backdrop is clicked
  it('should close when backdrop is clicked', async () => {
    render(
      <Drawer>
        <TestComponent />
      </Drawer>,
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

  // Check if the drawer closes correctly when the close button is clicked
  it('should close when closeButton is clicked', async () => {
    render(
      <Drawer>
        <TestComponent />
      </Drawer>,
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
    actions: { openDrawer },
  } = React.useContext(DrawerContext) || { actions: {} }
  if (!openDrawer) {
    return
  }
  return (
    <button
      data-testid="openButton"
      onClick={() => openDrawer(<div>Test content</div>, 'left', 70, false)}
    >
      Open Drawer
    </button>
  )
}

function OpenDrawerFromRightButton() {
  const {
    actions: { openDrawer },
  } = React.useContext(DrawerContext) || { actions: {} }

  if (!openDrawer) {
    return null
  }

  return (
    <button
      data-testid="openButtonFromRight"
      onClick={() => openDrawer(<div>Test content</div>, 'right', 70, false)}
    >
      Open Drawer From Right
    </button>
  )
}

// Check if the drawer opens from the correct anchor position
it('should open from the correct anchor position', async () => {
  render(
    <Drawer>
      <TestComponent />
      <OpenDrawerFromRightButton />
    </Drawer>,
  )

  const openButtonFromRight = screen.getByTestId('openButtonFromRight')
  fireEvent.click(openButtonFromRight)

  const drawer = screen.getByTestId('drawer-paper')

  await waitFor(() => {
    expect(drawer).toHaveStyle('right: 0') // Check if the drawer opened from the right
  })
})

// Check if clicking on the backdrop does not close the drawer when backdropClickClose is false
function OpenDrawerWithoutBackdropCloseButton() {
  const {
    actions: { openDrawer },
  } = React.useContext(DrawerContext) || { actions: {} }

  if (!openDrawer) {
    return null
  }

  return (
    <button
      data-testid="openButtonNoBackdropClose"
      onClick={() => openDrawer(<div>Test content</div>, 'left', 70, false)}
    >
      Open Drawer
    </button>
  )
}
it('should not close when backdrop is clicked and backdropClickClose is false', async () => {
  render(
    <Drawer>
      <OpenDrawerWithoutBackdropCloseButton />
    </Drawer>,
  )

  const openButton = screen.getByTestId('openButtonNoBackdropClose')
  fireEvent.click(openButton)

  const testContent = screen.getByText('Test content')
  expect(testContent).toBeVisible()

  const backdrop = screen.getByTestId('backdrop')
  fireEvent.click(backdrop)

  await waitFor(() => {
    expect(testContent).toBeVisible() // The content should still be visible
  })
})

// Check if the drawer closes correctly when closeDrawer is called
function CloseDrawerButton() {
  const {
    actions: { closeDrawer },
  } = React.useContext(DrawerContext) || { actions: {} }

  if (!closeDrawer) {
    return null
  }

  return (
    <button data-testid="closeButtonHook" onClick={closeDrawer}>
      Close Drawer
    </button>
  )
}
it('should close when closeDrawer is called', async () => {
  render(
    <Drawer>
      <TestComponent />
      <CloseDrawerButton />
    </Drawer>,
  )

  const openButton = screen.getByTestId('openButton')
  fireEvent.click(openButton)

  const testContent = screen.getByText('Test content')
  expect(testContent).toBeVisible()

  const closeButtonHook = screen.getByTestId('closeButtonHook')
  fireEvent.click(closeButtonHook)

  await waitFor(() => {
    expect(testContent).not.toBeVisible()
  })
})
