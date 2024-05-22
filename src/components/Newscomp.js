import React, { Component } from 'react'
import Loading from './Loading';
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'

export class newscomp extends Component {
  static defaultProps={
    country:'in',
    PageSize:4,
    category:"sports"
  }
       static Props={
         pageSize:PropTypes.number,
         country:PropTypes.string,
         category:PropTypes.string
       }
    constructor(){
     super();
     this.state={
       articles:[],
       loading:false,
       page:1,
       totalResults:0 
     }
    }
    async componentDidMount(){
     let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.Props.category}&apiKey=f9221459eb95460eb6d7cd5cb938138c&page=1&pageSize=${this.Props.pageSize}`
      this.setState.loading=true;
      let data= await fetch(url);
      let parsedData=await data.json();
      console.log(parsedData);
      this.setState({articles: parsedData.articles ,
         totalResults: parsedData.totalResults ,
        loading:false})
    }
    HandlePrevClick= async ()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f9221459eb95460eb6d7cd5cb938138c&page=${this.state.page}&pageSize=${this.props.pageSize}`
      this.setState.loading=true;
      let data=await fetch(url);
      let parsedData=await data.json()
      this.setState({
        page:this.state.page-1,
        articles:parsedData.articles,
        loading:false
      })
    }
    HandleNextClick= async ()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f9221459eb95460eb6d7cd5cb938138c&page=${this.state.page}&pageSize=${this.props.pageSize}`
      this.setState({
        loading:true
      })
      let data=await fetch(url);
      let parsedData=await data.json()
      this.setState({
        page:this.state.page+1,
        articles:parsedData.articles ,
        loading:false

      })
    }
    render() {
    return (<>
    <div className="mycontainer my-3">
      <h1 style={{display:"flex",justifyContent:"center", margin:"35px 0px"}}>OUR TOP HEADLINES</h1>
      <div style={{display:"flex" , justifyContent:"center"}}> {this.state.loading && <Loading/>}</div>
      <div className="row">
       {!this.state.loading && this.state.articles.map((element)=>{
     return <div className="col md-4" key={element.url}>
          <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage==null?"https://cdni.rt.com/files/2022.02/article/62109c75203027213c037a6d.jpg":element.urlToImage} newsurl={element.url} author={element.author}/></div>
    })}
    </div>
    <div className="btn d-flex justify-content-between">
      <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.HandlePrevClick}>&larr; previous</button>
      <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.state.pageSize)} type="button" className="btn btn-dark" onClick={this.HandleNextClick}>Next &rarr;</button>
    </div>
    </div>
   </>
   
    )
  }
}

export default newscomp