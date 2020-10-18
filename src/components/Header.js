import React from 'react';
import { PageHeader, Typography } from 'antd';

const { Paragraph } = Typography;
const HeaderHC = (props) => {
  return(
  <>
    <PageHeader
      className="site-page-header-responsive"
      title="Hazte cargo"
      subTitle="Plataforma de envio de correos a los parlamentarios chilenos"
    >
      <Paragraph style={{padding: '2%'}} ellipsis={false}>
      Hazte cargo es una plataforma con la cual puedes buscar diputados y senadores para escribirles,
      demostrando que eres un ciudadano preocupado por su accionar en la camara, puedes escribirles para 
      darles muestras de apoyo, cuestionar su votación, si necesitas comunicarte con ellos debes utilizar
      tu mail personal, esto es un plataforma para expresar las opiniones hacia los parlamentarios
    </Paragraph>
    </PageHeader>
  </>)
}

export default HeaderHC;
