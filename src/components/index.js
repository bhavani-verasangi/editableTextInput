import {Component} from 'react'

import './index.css'

class AppItem extends Component {
  state = {isClicked: false, enter: ''}

  onChangeInput = event => {
    this.setState({enter: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  render() {
    const {isClicked, enter} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="container">
            {isClicked === true ? (
              <div className="text-container">
                <p className="text">{enter}</p>
                <button
                  className="button"
                  type="button"
                  onClick={this.onClickButton}
                >
                  Edit
                </button>
              </div>
            ) : (
              <>
                <input
                  type="text"
                  onChange={this.onChangeInput}
                  value={enter}
                  className="input-text"
                />
                <button
                  type="button"
                  onClick={this.onClickButton}
                  className="button"
                >
                  Save
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default AppItem
