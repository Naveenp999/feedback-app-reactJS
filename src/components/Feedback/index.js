import './index.css'

import {Component} from 'react'

class Feedback extends Component {
  state = {isreviewed: false}

  change = () => this.setState({isreviewed: true})

  render() {
    const {isreviewed} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const p = !isreviewed ? (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="icon-container">
            {emojis.map(element => (
              <li key={element.id}>
                <button className="button" type="button" onClick={this.change}>
                  <img
                    src={element.imageUrl}
                    alt={element.name}
                    className="review-icon"
                  />
                  <p className="title">{element.title}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ) : (
      <div className="container">
        <div className="sub-container">
          <img src={loveEmojiUrl} alt="love emoji" className="review-icon" />
          <h1 className="heading">Thank You</h1>
          <p className="title">
            We will use your feedback to improve our customer support
            performance
          </p>
        </div>
      </div>
    )
    return p
  }
}

export default Feedback
