import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from '../../redux/contactsSlice';
import './Filter.css';

export function Filter () {

    const filterName = useSelector((state) => state.contacts.filter);
    const dispatch = useDispatch();

    const changeFilter = (e) => {
        dispatch(setFilter(e.currentTarget.value));
      };

    return (
        <label className='filter__label'>
            <input
            className='filter__input'
            type="text"
            value={filterName}
            onChange={changeFilter}
            >
            </input>
        </label>
    );
};