import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import DripLogo from '../../../../asstes/crown.svg';
import ProfilePic from '../../../../asstes/IMG-1561 copy 2.png';
import Member1 from '../../../../asstes/images.jpg';
import Member2 from '../../../../asstes/images-1.jpg';
import Member3 from '../../../../asstes/download.jpg';

import { RiUserFill } from 'react-icons/ri'
import { FaArrowRight } from 'react-icons/fa'

import './members.styles.scss';

const Members = () => {
  return (
    <div className='members-container'>
      <Card style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Title>Members <RiUserFill /></Card.Title>

          <div className='member'>
            <Image src={ProfilePic} alt='' roundedCircle />
            <div className='name-and-status'>
              <span>
                <h6>Rod Durango</h6>
              </span>
              <small className='text-muted'>Online</small>
            </div>
            <Button variant='dark' size='sm'>
              Send Message
            </Button>
          </div>

          <div className='member'>
            <Image src={DripLogo} alt='' roundedCircle />
            <div className='name-and-status'>
              <span>
                <h6>Big Drip</h6>
              </span>
              <small className='text-muted'>Online</small>
            </div>
            <Button variant='dark' size='sm'>
              Send Message
            </Button>
          </div>

          <div className='member'>
            <Image src={Member1} alt='' roundedCircle />
            <div className='name-and-status'>
              <span>
                <h6>Liz Chanel</h6>
              </span>
              <small className='text-muted'>Online</small>
            </div>
            <Button variant='dark' size='sm'>
              Send Message
            </Button>
          </div>

          <div className='member'>
            <Image src={Member2} alt='' roundedCircle />
            <div className='name-and-status'>
              <span>
                <h6>James Heard</h6>
              </span>
              <small className='text-muted'>Online</small>
            </div>
            <Button variant='dark' size='sm'>
              Send Message
            </Button>
          </div>

          <div className='member'>
            <Image src={DripLogo} alt='' roundedCircle />
            <div className='name-and-status'>
              <span>
                <h6>The King</h6>
              </span>
              <small className='text-muted'>Online</small>
            </div>
            <Button variant='dark' size='sm'>
              Send Message
            </Button>
          </div>

          <div className='member'>
            <Image src={Member3} alt='' roundedCircle />
            <div className='name-and-status'>
              <span>
                <h6>Thad McFee</h6>
              </span>
              <small className='text-muted'>Online</small>
            </div>
            <Button variant='dark' size='sm'>
              Send Message
            </Button>
          </div>

          <div className='member'>
            <Image src={DripLogo} alt='' roundedCircle />
            <div className='name-and-status'>
              <span>
                <h6>Rico P.</h6>
              </span>
              <small className='text-muted'>Online</small>
            </div>
            <Button variant='dark' size='sm'>
              Send Message
            </Button>
          </div>

          <Card.Link href='#'><span className='more-details'>More Details <FaArrowRight /></span></Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Members;
