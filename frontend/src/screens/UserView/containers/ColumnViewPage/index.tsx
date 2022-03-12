import React, {useState} from 'react';
import styles from './styles.module.scss';
import {Dropdown} from 'semantic-ui-react';
import {history} from '@helpers/history.helper';

const UserView: React.FC = () => {
  const options = [
    {
      key: 'kolumna1',
      text: 'kolumna1',
      value: '1'
    },
    {
      key: 'kolumna2',
      text: 'kolumna2',
      value: '2'
    },
    {
      key: 'kolumna3',
      text: 'kolumna3',
      value: '3'
    }
  ];

  const [option, setOption] = useState('');

  const click = () => {
    history.push(`/column/${option}`);
  };

  const handleDropDownSelect = (event, data) => {
    setOption(data.value);
  };

  return (
    <div className={styles.container}>
      <div>
        <Dropdown
          placeholder="Select kolumn"
          fluid
          className={styles.dropdown}
          selection
          options={options}
          onChange={handleDropDownSelect}
        />
        <button type="submit" onClick={click}>CLICK</button>
      </div>
    </div>
  );
};

export default UserView;
