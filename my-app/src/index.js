import React from 'react'
import { render } from 'react-dom'

import Library from './Library';


// let skiData = {
//   total: 50,
//   powder: 20,
//   backcountry: 10,
//   goal: 100,
// }

// class SkiDayCounter extends React.Component {

//   getPercent = decimal => {
//     return decimal * 100 + '%';
//   }

//   calGoalProgress = (total, goal) => {
//     return this.getPercent(total / goal);
//   }

//   render() {
//     const { total, powder, backcountry, goal } = this.props
//     return (
//       <section>
//         <div>
//           <p>Total Days: {total}</p>
//         </div>
//         <div>
//           <p>powder Days: {powder}</p>
//         </div>
//         <div>
//           <p>backcountry Days: {backcountry}</p>
//         </div>
//         <div>
//           <p>Goal Progress: {this.calGoalProgress(total, goal)}</p>
//         </div>

//       </section>
//     );
//   }
// }


// class Message extends React.Component {
//   render() {
//     console.log(this.props);

//     return (
//       <div>
//         <h1 style={{ color: this.props.color }}>{this.props.msg}</h1>
//         <p>I'll check back in {this.props.minutes} minutes</p>
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <>
//     {/* <Message age={50} color="blue" msg="How are you" minutes={40} /> */}
//     <SkiDayCounter
//       total={skiData.total}
//       powder={skiData.powder}
//       backcountry={skiData.backcountry}
//       goal={skiData.goal} /></>,
//   document.getElementById('root')
// );

// 


let bookList = [
  { "title": "The Mathematic Wizard", "author": "John Dev", "pages": 250 },
  { "title": "The Physics", "author": "HC Verma", "pages": 480 },
  { "title": "The Organic Chemistry", "author": "OP Tondon", "pages": 1320 },

  { "title": "Computer Network", "author": "Rana Pratap", "pages": 320 }

];


// // const Library = () => {
//   return (
//     <div>
//       Welcome to the Library
//       <Book title="The Sun Also Rises" author="Ernest Hemingway" pages={250} />
//       <Book title="IIT JEE Chemistry" author="OP Tondon" pages={1250} />
//       <Book title="Modern Physics" author="HC Verma" pages={480} />
//     </div>
//   )
// }

// const Library = ({ books }) => {
//   return (
//     <div>
//       Welcome to the Library
//       {
//         books.map((book, i) =>
//           <Book
//             key={i}
//             title={book.title}
//             author={book.author}
//             pages={book.pages}
//           />
//         )}
//     </div>
//   )
// }


// const Library ({ books }) => {
//   return (
//     <div>
//       Welcome to the Library
//       {
//         books.map((book, i) =>
//           <Book
//             key={i}
//             title={book.title}
//             author={book.author}
//             pages={book.pages}
//           />
//         )}
//     </div>
//   )
// }


// class FavoriteColorForm extends React.Component {

//   state = { value: '' }

//   newColor = e => {
//     this.setState({ value: e.target.value })
//   }

//   submit = e => {
//     console.log(`New Color :${this.state.value}`);
//     e.preventDefault();
//   }
//   render() {
//     return (
//       <form onSubmit={this.submit}>
//         <label>Favorite Color:
//           <input type="color"
//             value={this.state.value}
//             onChange={this.newColor} />
//         </label>
//         <button>Submit</button>
//       </form>
//     )
//   }
// }



render(
  <Library books={bookList} />,
  document.getElementById('root')
)

