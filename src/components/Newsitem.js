import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let{title,description,imageUrl,newsurl,author}=this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsurl} target="_blank" className="btn btn-small btn-primary">Read More..</a>
    <div>{author?author:"Unknown"}</div>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem