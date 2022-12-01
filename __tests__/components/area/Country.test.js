import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'

import Country from "@components/area/Country";
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";

describe('Area', () => {

    const mockStore = configureStore();
    let store;

    it('renders country flag', () => {
        store = mockStore(initialState);
        createAreaCountry({ store })
        const countryFlag = screen.getByTestId("Country.Flag");
        expect(countryFlag).toBeInTheDocument()
    })
})


const createAreaCountry = ({ store }) => {
    return render(<Provider store={store}>
        <Country iso={initialState.user.country} />
    </Provider>)
}

const initialState = {
    user: { country: 'PE' }
}

