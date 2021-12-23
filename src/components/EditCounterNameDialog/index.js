import React, { useState} from 'react';
import { Modal, Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import { CounterButton } from 'components/CounterButton';

export const EditCounterNameDialog = ({ counterName, editCounterName }) => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [newCounterName, setNewCounterName] = useState('');
  const [isSaveDisabled, setIsSaveDisabled] = useState(true);

  const openDialog = () => {
    setIsDialogVisible(true)
    setNewCounterName(counterName)
  }
  const closeDialog = () => {
    setIsDialogVisible(false)
  }

  const saveCounterName = () => {
    editCounterName(newCounterName)
    closeDialog()
  }

  const handleInputChange = (e) => {
    e.target.value ? setIsSaveDisabled(false) : setIsSaveDisabled(true)
    setNewCounterName(e.target.value)
  }

  return (
    <>
      <CounterButton icon={<EditOutlined />} size="small" onClick={() => openDialog()} />
      <Modal title="Edit Counter Name" visible={isDialogVisible} onOk={saveCounterName} okText={"Save"}maskClosable={false} onCancel={closeDialog} destroyOnClose={true} okButtonProps={{ disabled: isSaveDisabled }}>
        <Input placeholder={"Counter Name"} onChange={handleInputChange}/>
      </Modal>
    </>
  )
}
