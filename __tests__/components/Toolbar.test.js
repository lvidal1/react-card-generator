import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';

import Toolbar from "@components/Toolbar";

describe('Toolbar', () => {

    const initialState = {};
    const mockStore = configureStore();
    let store;

    it('renders toolbar buttons', () => {
        store = mockStore(initialState);

        render(<Provider store={store}><Toolbar /></Provider>)

        const btnInformation = screen.getByTestId("Toolbar.Button.Information");
        expect(btnInformation).toBeInTheDocument()
        const btnCountry = screen.getByTestId("Toolbar.Button.Country");
        expect(btnCountry).toBeInTheDocument()
        const btnPhoto = screen.getByTestId("Toolbar.Button.Photo");
        expect(btnPhoto).toBeInTheDocument()
        const btnPosition = screen.getByTestId("Toolbar.Button.Position");
        expect(btnPosition).toBeInTheDocument()
        const btnTechnologies = screen.getByTestId("Toolbar.Button.Technologies");
        expect(btnTechnologies).toBeInTheDocument()
    })
})
