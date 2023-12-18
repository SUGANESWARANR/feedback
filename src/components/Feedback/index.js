import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedBack:false}

  onEmojiClick = () => {
    this.setState({isFeedBack:true})


    renderFirst = () =>{
        const { resources } =this.props
        const { loveEmojiUrl } = resources 

        return(
        <div>
          <img src={ this.loveEmojiUrl} alt="love emoji"/>
          <h1>Thankyou!</h1>
          <p>
            We will use your feedback to improve our customer support
            perfomance.
          </p>
        </div>
        )
    }


renderSecond =()=> {
    const { resources } = this.props
    const { emojis } = resources 

    return (
        <div>
            <div>
                <h1>How satisfied are you with our customer support performance?</h1>
            </div>
            <ul>
                { emojis.map(each => (
                <li key={each.id} >
                    <button type="button" onClick={this.onEmojiClick} > 
                        <img src={ each.imageUrl } alt={ each.name }/>
                    </button>
                    <br />
                        <p>{each.name}</p>
                </li>

                ))}

            </ul>
        </div>

    )
}

render() {
    const { isFeedBack } = this.state

    return(
        <div>

            {isFeedBack === true ? renderFirst() : renderSecond()}

        </div>
        )
    }

}
export default Feedback