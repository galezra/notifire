import { Col, Row } from 'antd';
import { AuthLayout } from '../../components/layout/LoginLayout';
import { ApplicationCreateForm } from '../../components/onboarding/ApplicationCreateForm';

function ApplicationOnBoarding() {
  return (
    <AuthLayout>
      <div className="h-100 bg-white">
        <Row justify="center" className="align-items-stretch h-100">
          <Col xs={0} sm={0} md={0} lg={8}>
            <div
              className="d-flex flex-column justify-content-between h-100 px-4"
              style={{
                backgroundImage: `url('/static/images/login_bg.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}>
              <div className="text-right">
                <img src="/static/images/logo.png" alt="logo" style={{ maxWidth: 150 }} />
              </div>
              <Row justify="center">
                <Col xs={0} sm={0} md={0} lg={20}>
                  <img className="img-fluid mb-5" src="/static/images/login_illustration.svg" alt="" />
                  <h1 className="text-white">Applications in Notifire</h1>
                </Col>
              </Row>
              <div className="d-flex justify-content-end pb-4">
                <div>
                  <a className="text-white" href="/#" onClick={(e) => e.preventDefault()}>
                    Term & Conditions
                  </a>
                  <span className="mx-2 text-white"> | </span>
                  <a className="text-white" href="/#" onClick={(e) => e.preventDefault()}>
                    Privacy & Policy
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={20} sm={20} md={24} lg={16}>
            <div className="container d-flex flex-column justify-content-center h-100">
              <Row justify="center">
                <Col xs={24} sm={24} md={20} lg={12} xl={8}>
                  <h1>Tell us about your app</h1>
                  <div className="mt-4">
                    <ApplicationCreateForm />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </AuthLayout>
  );
}

export default ApplicationOnBoarding;
