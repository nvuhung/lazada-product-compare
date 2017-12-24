import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import './styles.css'
import {Layout} from 'antd'
import {LazadaHeader, LazadaFooter} from '../../components'
import {Home, Compare} from '../'

const {Content} = Layout

class App extends Component {

	render() {
		return (
			<div>
				<Layout className="app-layout">
					<LazadaHeader />
					<Content className="content">
						<Switch>
							<Route exact path="/" component={Home}/>
							<Route path="/compare" component={Compare}/>
						</Switch>
					</Content>
					<LazadaFooter />
				</Layout>
			</div>
		)
	}
}

export default App
