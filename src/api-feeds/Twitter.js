import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton
} from 'react-twitter-embed';
import {InputGroup} from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Dropdown from "react-dropdown";
import SearchBar from "./Search";


export default class Twitter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: 'Twigy1_'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(event.target.value)
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  renderTwitter(screenName) {
    console.log(screenName);
    let jsx = <TwitterTimelineEmbed
      sourceType= "profile"
      screenName= {screenName}
      autoHeight= {true}
    />
    return (jsx)
  }


  render() {

    return (
      <div>
      <SearchBar onChange = {this.handleChange}
      placeholder = "tag" prepend = {<InputGroup.Prepend>
                                                            <InputGroup.Text>
                                                                @
                                                            </InputGroup.Text>
                                                        </InputGroup.Prepend>}/>
      {this.renderTwitter(this.state.value)}
      {this.state.value}
      </div>

    );
  }

}
