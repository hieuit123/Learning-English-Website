import React, { Component } from 'react'
import AccountStatusPanel from '../../components/biz-smart/Account-Status-Panel'
import Navigator from '../../components/smart/Navigator'

export default class AccountDetail extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="account-page col-12">
                        <AccountStatusPanel isAccountPage={true} />
                    </div>
                </div>
            </div>
        )
    }
}
