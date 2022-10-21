import { useContext, useState } from 'react';
import { CartContext } from '../../../context/cart.context';
import { useLocation } from 'react-router-dom';

import { Outlet } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { NotificationPopover } from '../popovers/popovers';

import { IoMdNotifications } from 'react-icons/io';
import { RiUserFill } from 'react-icons/ri';
import { AiFillHome } from 'react-icons/ai';

const AdminNav = () => {
  const pathName = useLocation();

  return (
    <>
      <div className='nav'>
        <Navbar className='navBar' sticky='top' variant='light' expand='lg'>
          <Nav.Link href='#'>
            <Breadcrumb>
              <Breadcrumb.Item href='#'>
                <span className='text-muted'>
                  <AiFillHome />
                </span>
              </Breadcrumb.Item>
              <Breadcrumb.Item href='#'>{pathName.pathname}</Breadcrumb.Item>
            </Breadcrumb>
          </Nav.Link>
          <Container>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto navLinks'>
                <OverlayTrigger
                  trigger='click'
                  placement='bottom'
                  overlay={NotificationPopover}
                >
                  <Nav.Link>
                    <IoMdNotifications size={25} />
                  </Nav.Link>
                </OverlayTrigger>

                <Nav.Link href='/profile'>
                  <RiUserFill size={25} /> Hello, User
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Outlet />
    </>
  );
};

export default AdminNav;
