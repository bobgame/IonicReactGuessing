import React from 'react'
import { Redirect, Route, BrowserRouter as Router } from 'react-router-dom'
import { IonApp, IonPage } from '@ionic/react'

import HomePage from './pages/Home/Home'
import PlayPage from './pages/Play/Play'
import { Row, Col } from 'antd'

import { Provider } from 'react-redux'
import store from './store'
import 'antd/dist/antd.css'
import './style.scss'
import AboutPage from './pages/About/About'
import SettingPage from './pages/Setting/Setting'
import HelpPage from './pages/Help/Help'

const App: React.FunctionComponent = () => (
  <Provider store={store}>
    <IonApp>
      <IonPage id='main'>
        <Row className='h-100' type='flex' justify='space-around' align='middle'>
          <Col xs={20} sm={16} md={12} lg={8} xl={6}>
            <Router>
              <Route path='/home' component={HomePage} exact={true} />
              <Route path='/play' component={PlayPage} exact={true} />
              <Route path='/setting' component={SettingPage} exact={true} />
              <Route path='/help' component={HelpPage} exact={true} />
              <Route path='/about' component={AboutPage} exact={true} />
              <Route exact={true} path='/' render={(() => <Redirect to='/home' />)} />
            </Router>
          </Col>
        </Row>
      </IonPage>
    </IonApp>
  </Provider>
)

export default App
