import React ,{Component} from 'react'
import { connect } from 'react-redux'
import {selectBook} from '../actions/index'
import {bindActionCreators} from 'redux'


class BookList extends Component{

  renderList(){
    return this.props.books.map((book)=>{
      return(
        <li
          key={book.title}
          onClick={()=>this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      )
    })
  }

  render(){
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  //Whatever is returned will show up as props
  //inside if BookList

  return{
    books:state.books
  }
}


//anything returned from this fucntion will end up as prop
//on the booklist container

function mapDispatchToProps(dispatch) {
  //whenever selectbook is called,the result should be passed
  //to all of our reducers

  return bindActionCreators({selectBook},dispatch)

}

//promote BookList from a component to a container -it needs to know
//about this new dispatch method,selectBook.Make it available
//as a prop

export default connect(mapStateToProps,mapDispatchToProps)(BookList)   //Connect takes a fucntion and a component and produses a container
