import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import loginAction from '../actions/loginAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
    afterEach(() => {
        fetchMock.restore();
    });
    it('dispatch actions when login fails', () => {
        fetchMock.post(`https://stargal-dorothy.herokuapp.com/api/v1/auth/login`,
            { body: { errors: {} } },

        );
        const store = mockStore({});
        store.dispatch(loginAction());
        expect(store.getActions()).toEqual([]);
    });

});

it('dispatch actions when login is a success', () => {
    const slug = 'anything'
    fetchMock.post(`https://stargal-dorothy.herokuapp.com/api/v1/auth/login`,
        { body: {} },
    );
    const store = mockStore({});
    store.dispatch(loginAction()).then(() => {
        expect(store.
            getActions()).toEqual([{ type: 'LOGIN_SUCCESS', payload: {} }]);



    });
});
