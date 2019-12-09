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


export default class Twitter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }




  render() {
    return (

      <div>
        <div className="selfCenter standardWidth">
          <TwitterTimelineEmbed
          sourceType= "profile"
          screenName= "Twigy1_"
          options={{height: 250}}
          />
        </div>

      </div>

    );
  }

}
