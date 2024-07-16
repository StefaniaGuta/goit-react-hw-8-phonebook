import style from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filter } from '../../redux/contacts/contactsSlice';
import { getFilter } from '../../redux/contacts/contactsSelectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(getFilter);

    const onChangeFilter = evt => {
    dispatch(filter(evt.currentTarget.value.trim()));
  }
    return (
        <label className={style.Label} htmlFor="" value={filterName}>
            <h2 className={style.TitleFilter}>Find contacts by name</h2>
            <input className={style.Input} type="text" onChange={onChangeFilter} placeholder="Enter search name" />
        </label>
    );
}

export default Filter;