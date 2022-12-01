import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'

import Area from "@components/Area";
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";

describe('Area', () => {
    const initialState = {
        user: { fullname: '', birth: '' }
    }
    const mockStore = configureStore();
    let store;

    it('renders area layer', () => {
        store = mockStore(initialState);
        createArea({ store })
        const layer = screen.getByTestId("Area.layer");
        expect(layer).toBeInTheDocument()
    })
})


const createArea = ({ store }) => {
    return render(<Provider store={store}>
        <Area />
    </Provider>)
}

