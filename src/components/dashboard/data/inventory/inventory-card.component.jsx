import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

import { MdOutlineInventory } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa'


import './inventory-card.style.scss';

const InventoryCard = () => {
  return (
    <div className='inventory-card-container'>
      <Card>
        <Card.Body>
          <Card.Title>
            Inventory <MdOutlineInventory />
          </Card.Title>
          <Table striped bordered hover size='sm'>
            <thead>
              <tr>
                <th>id</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Cincinnati Hat</td>
                <td>$30.00</td>
                <td>17</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Cowboy Hat</td>
                <td>$55.00</td>
                <td>10</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Rain Coat</td>
                <td>$150.00</td>
                <td>25</td>
              </tr>
            </tbody>
          </Table>
          <Card.Link href='#'><span className='more-details'>More Details <FaArrowRight /></span></Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default InventoryCard;
