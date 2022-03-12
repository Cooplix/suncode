import React, {useEffect, useState} from 'react';
import styles from './styles.module.scss';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import {IBindingCallback1} from '@models/Callbacks';
import {getNotUniqRoutine, getUniqRoutine} from '@screens/UserView/routines';
import ColumnView from '@components/Column';
import {IColumn} from '@screens/UserView/models/IColumn';
import {Checkbox, List} from 'semantic-ui-react';
import {history} from '@helpers/history.helper';
import LoaderWrapper from '@components/LoaderWrapper';

export interface IUserViewProps extends IState, IActions {
}

interface IState {
  columns: IColumn[];
  sendingData: boolean;
}

interface IActions {
  fetchUniqData: IBindingCallback1<object>;
  fetchNotUniqData: IBindingCallback1<object>;
}

export const ColumnsView: React.FC<IUserViewProps> = (
  {
    fetchUniqData,
    fetchNotUniqData,
    columns,
    sendingData
  }
) => {
  const [uniq, setUniq] = useState(true);
  const [mode, setMode] = useState('Unique');
  const {columnId} = useParams();

  useEffect(() => {
    if (uniq) {
      fetchUniqData(columnId);
    } else {
      fetchNotUniqData(columnId);
    }
  }, [uniq]);

  const toggleLabel = () => {
    if (uniq) {
      setMode('NotUnique');
    } else {
      setMode('Unique');
    }
  };

  const handleToggleSelect = () => {
    setUniq(!uniq);
    toggleLabel();
  };

  return (

    <div className={styles.main}>
      <div className={styles.columns}>
        <div className={styles.controlPanel}>
          <button
            type="submit"
            className={styles.btn}
            onClick={() => history.push('/public')}
          >
            Back
          </button>
          <p>
            Kolumna
            {columnId}
          </p>
          <p>{mode}</p>
          <Checkbox
            toggle
            onChange={handleToggleSelect}
          />
        </div>
        <LoaderWrapper loading={sendingData}>
          <List className={styles.column} as="ol">
            {columns.map(col => (
              <List.Item>
                <ColumnView
                  id={col.id}
                  kolumna1={col.kolumna1}
                  kolumna2={col.kolumna2}
                  kolumna3={col.kolumna3}
                  kolumna4={col.kolumna4}
                />
              </List.Item>
            ))}
          </List>
        </LoaderWrapper>
      </div>
    </div>
  );
};

const mapStateToProps: (state) => IState = state => ({
  columns: state.userViewReducer.data.column,
  sendingData: state.userViewReducer.data.endSendingUser
});

const mapDispatchToProps: IActions = {
  fetchUniqData: getUniqRoutine,
  fetchNotUniqData: getNotUniqRoutine
};

export default connect(mapStateToProps, mapDispatchToProps)(ColumnsView);
