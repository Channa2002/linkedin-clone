/* eslint-disable react/prop-types */

import { Modal,Button } from 'antd';
import './index.scss';

const ModalComponent = ({ modalOpen, setModalOpen, setStatus, status, sendStatus }) => {
  return (
    <>
      
      <Modal
        title="create a post"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
          
         <Button
          key="submit"
          type="primary"
          disabled={status && status.length > 0 ? false : true}
          onClick={sendStatus} 
         >
          Post
         </Button>
        ]}

      >
      <input
       className='modal-input'
       placeholder='what do you want to talk about'
       onChange={(event) => setStatus(event.target.value)}
       value={status}
       />

      </Modal>
    </>
  );
};
export default ModalComponent;