import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import ContactForm from "components/other/ContactForm";
import AlternateEmail from '@material-ui/icons/AlternateEmail';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

class Contact extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col className="ml-auto mr-auto" md="5">
              <Card className="card-upgrade">
                <CardHeader className="text-center">
                  <CardTitle tag="h4"><AlternateEmail fontSize="large" /><MailOutlineIcon fontSize="large" /></CardTitle>
                  <div className="card-category"> <ContactForm></ContactForm></div>
                </CardHeader>
                <CardBody></CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto" md="5">
              <Card className="card-upgrade">
                <CardHeader className="text-center">
                  <CardTitle tag="h5">Vous pouvez également nous appeler au :</CardTitle>
                  <p className="card-category">
                    <LocalPhoneIcon fontSize="large" /> 04-79-85-40-61 <div></div>
                    <PhoneAndroidIcon fontSize="large" /> 06-xx-xx-xx-xx
                  </p>
                </CardHeader>
                <CardBody></CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Contact;
