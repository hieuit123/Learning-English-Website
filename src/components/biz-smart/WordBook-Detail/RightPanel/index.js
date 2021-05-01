import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import * as actions from './../../../../actions'
import Word from './Word'

class RightPanel extends Component {
    constructor(props) {
        super(props);
    }
    async componentDidMount() {
            let result = await axios.get("/word/getallbyidwordbook/" + this.props.id)
            let finalResult = result.data
            if (finalResult.status) this.props.callWordsMange(actions.initWordsDataAction(finalResult.data))
    }
    render() {
        let myListWord
        if (this.props.wordsManage.wordsData) {
            let tmp_wordsData = this.props.wordsManage.wordsData
            myListWord = tmp_wordsData.map((word, index) => {
                return <Word key={index} id={word.W_Id} ipa={word.W_ipaWord} title={word.W_originalWord} example={word.W_Phrase} avatar={word.W_Avatar} translation={word.W_translatedWord} idState={word.W_idState} />
            })
        }
        return (
            <div className="right-panel-wb-detail">
                {myListWord}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        wordsManage: state.wordsManage
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        callWordsMange: (action)=>{
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(RightPanel)
