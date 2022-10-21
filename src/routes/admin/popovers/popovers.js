import Popover from 'react-bootstrap/Popover';
import './notification-popover.styles.scss';

import { MdOutlineMessage, MdOutlinePayments } from 'react-icons/md';
import { GrUnorderedList } from 'react-icons/gr';

export const NotificationPopover = (
  <Popover id='notification-popover'>
    <Popover.Header as='h3'>Notifications</Popover.Header>
    <Popover.Body>
      <a href=''>
        <span className='popover-icon'>
          <MdOutlineMessage size={20} />
        </span>{' '}
        Check new messages
      </a>
      <hr />
      <a href=''>
        <span className='popover-icon'>
          <GrUnorderedList size={20} />
        </span>{' '}
        Manage Email lists
      </a>
      <hr />
      <a href=''>
        <span className='popover-icon'>
          <MdOutlinePayments size={20} />
        </span>{' '}
        Payments Processed
      </a>
    </Popover.Body>
  </Popover>
);
