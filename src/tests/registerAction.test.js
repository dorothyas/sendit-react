
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import registerAction from '../actions/registerAction';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('async actions', () => {
    afterEach(() => {
        fetchMock.restore();
    });
    it('dispatch actions when signup fails', () => {
        fetchMock.post(`https://stargal-dorothy.herokuapp.com/api/v1/auth/signup`,
            { body: { errors: {} } },

        );
        const store = mockStore({});
        store.dispatch(registerAction());
        expect(store.getActions()).toEqual([]);
    });

});

it('dispatch actions when register is a success', () => {

    fetchMock.post(`https://stargal-dorothy.herokuapp.com/api/v1/auth/signup`,
        { body: {} },
    );
    const store = mockStore({});
    store.dispatch(registerAction()).then(() => {
        expect(store.
            getActions()).toEqual([{ type: 'REGISTER_SUCCESS', payload: {} }]);



    });
});