import React from 'react'
import {Layout} from 'antd'
import './styles.css'
import logoUrl from './logo.png'
import { withRouter } from 'react-router-dom'

const {Header} = Layout

const LazadaHeader = withRouter(({ history }) =>
	<Header className="lazada-header">
		<div className="header-wrapper">
			<div className="logo" onClick={() => { history.push('/')}}>
					<img
						className="logo-image"
						alt="Online Shopping Lazada.sg Logo"
						src={logoUrl}/>
			</div>
		</div>
	</Header>
)

export default LazadaHeader