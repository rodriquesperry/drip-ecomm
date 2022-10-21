import React from 'react'

import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';

import { RiBriefcase4Fill } from 'react-icons/ri';
import { FaArrowRight } from 'react-icons/fa'

import './progressbar.styles.scss'

const ProgressBarCard = () => {
    return (
        <div className='progressbar-container'>
            <Card style={{ width: '20rem' }}>
                <Card.Body>
                    <Card.Title>Sales <RiBriefcase4Fill /></Card.Title>
                    <h4>$30,000</h4>
                    <ProgressBar now={60} />
                    <small>^27.4% <span>Since last month</span></small>
                    <br/>
                    <Card.Link href='#'><span className='more-details'>More Details <FaArrowRight /></span></Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProgressBarCard;