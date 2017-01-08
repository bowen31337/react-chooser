import React, { Component } from 'react'
import evalScript from 'eval-script'

const DROPBOX_SDK_URL = 'https://www.dropbox.com/static/api/2/dropins.js'
const SCRIPT_ID = 'dropboxjs'



export default class DropboxChooser extends Component {

  static propTypes = {
    children: React.PropTypes.node,
    appKey: React.PropTypes.string.isRequired,
    success: React.PropTypes.func.isRequired,
    cancel: React.PropTypes.func,
    linkType: React.PropTypes.oneOf([ 'preview', 'direct' ]),
    multiselect: React.PropTypes.bool,
    extensions: React.PropTypes.arrayOf(React.PropTypes.string)
  }

  static defaultProps = {
    cancel: () => {},
    linkType: 'preview',
    multiselect: false,
    extensions: ['.pdf', '.doc', '.docx']
  }

  state = {
    loading:true,
    error:false
  }

  componentDidMount() {
    evalScript(
      DROPBOX_SDK_URL, 
      {
        id: SCRIPT_ID,
        'data-app-key': this.props.appKey
      }, 
      () => this.setState({loading:false})
    ).then(data => console.log(data)).catch(error => this.setState({error:true,loading:false}))

  }

  onChoose = () => {
    const {
      appKey,
      success,
      cancel,
      linkType,
      multiselect,
      extensions
    } = this.props

    window.Dropbox.appKey = appKey

    window.Dropbox.choose({
      success,
      cancel,
      linkType,
      multiselect,
      extensions
    })
  }

  render() {

    if(this.state.loading) {
      return <div className="spinner">loading...</div>
    }

    if(this.state.error) {
      return <div className="error"> an error happened!</div>
    }

    return (
      <div onClick={this.onChoose}>
        {
          this.props.children ?
              this.props.children :
              <button>Open dropbox chooser</button>
        }
      </div>
    )
  }
}