import React from 'react';
import { Row, Col } from 'antd';
import ParliamentaryCard from './components/ParliamentaryCard';
import Header from './components/Header'
import SideMenu from './components/SideMenu'
import 'antd/dist/antd.css'; 


const deputy = [
  {name:"Pepe auth"},
  {name:"Giorgio Jackson"},
  {name:"Gabriel Boric"},
  {name:"Pepe auth"},
  {name:"Giorgio Jackson"},
  {name:"Gabriel Boric"},
  {name:"Pepe auth"},
  {name:"Giorgio Jackson"},
  {name:"Gabriel Boric"}
]



function App() {
  return (
    <div className="App">
        <Row>
          <Col span={24}><Header /></Col>
        </Row>
        <Row>
          <Col span={24}>
            <Row>
              <Col span={4}></Col>
            </Row>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={4}>
            <SideMenu />
          </Col>
          <Col span={20}>
            <Row>
            {deputy.map((deputy, index) => 
              <Col span={4}>
              <ParliamentaryCard key={index}/></Col>
            )}
          </Row>
          </Col>
        </Row>
    </div>
  );
}

export default App;
