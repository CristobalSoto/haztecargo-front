import React from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css'; 
const { Meta } = Card;

const handleClick = () => {
  console.log('click')
}
const ParliamentaryCard = (props) => {
  return(
    <Card
      hoverable
      onClick={handleClick}
      style={{ width: 150, marginBottom: 10 }}
      cover={<img alt="example" src="https://www.camara.cl/img.aspx?prmID=GRCL810" />}
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  )
}

export default ParliamentaryCard

