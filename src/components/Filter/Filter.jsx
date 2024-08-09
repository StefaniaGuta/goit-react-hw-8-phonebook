import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/contacts/contactsSelectors';
import { changeFilter } from '../../redux/contacts/filterSlice';

import style from './Filter.module.css'

const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };

  return (
    <>
    <label className={style.text}>You can find contacts by name or phone number</label>
    <input className={style.filerNumber} 
    value={value} 
    type="text" 
    name="filter" 
    placeholder="Enter contact name"
    onChange={onChange} />
  </>
  );
};

export default Filter;