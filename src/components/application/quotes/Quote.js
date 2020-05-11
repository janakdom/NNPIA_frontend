import React from "react";
import {QuoteTools} from "./QuoteTools";

export class Quote extends React.Component {
  render() {
    return (
      <div className="quote-item clearfix my-3 py-3 px-4" id={"q" + this.props.data.id}>
        <QuoteTools quoteId={this.props.data.id} user={this.props.data.user.username} />
        <div className="quote text-center mb-3">&bdquo;{this.props.data.quote}&ldquo;</div>
        <div className="author float-right">{this.props.data.author.firstname} {this.props.data.author.surname} [{this.props.data.author.country}]</div>
        <div className="user float-left"><span>Vložil:</span> {this.props.data.user.firstname + " " + this.props.data.user.surname}</div>
      </div>
    )
  }
}