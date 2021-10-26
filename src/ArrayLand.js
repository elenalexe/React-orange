import React from "react";

class ArrayLand extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      boxes: [
          [
              '🍊','🍊','🍋','🍌','🍋','🍌','🍋','🍊','🍌','🍌'
          ],
  
          [
              '🍋','🍋','🍊','🍌','🍊','🍌','🍋','🍋','🍊','🍊','🍌',
          ],
  
          [
              '🍌','🍋','🍌','🍋','🍊','🍌','🍌',
          ]
        ]
    }
  }

  SortFruits = (a,b) => { 
    let fruits = this.state.boxes;
    let sortOrder = ['🍊','🍌','🍋']
    fruits.map((fruit) => fruit.sort((a,b) => sortOrder.indexOf(a) - sortOrder.indexOf(b)));
    this.setState({
      boxes: fruits,
    }) 
  };

  // SortBoxes = () => {
  //   let isOrange = "🍊";
  //   let isBanana = "🍌";
  //   let isLemon = "🍋";

  //   if(this.state.boxes === isOrange) {
  //     boxes[0] = isOrange;
  //   }else if(this.state.boxes === isBanana) {
  //     boxes[1] = isBanana;
  //   }else if(this.state.boxes === isLemon) {
  //     boxes[2] = isLemon;
  //   }

  // }

  SortBoxes = () => {
    let newBoxes=[
      [],
      [],
      [],
    ]
    let fruits = this.state.boxes;
    let sortedBoxes = ['🍊','🍌','🍋']
    fruits.map((fruit) => {
      fruit.map((frui) => {
        sortedBoxes.map((el, index) => {
          if(frui == el) {
            newBoxes[index].push(frui[0]);
          }
        })
      })
    })
    // sortedBoxes.map((fruit, index) => console.log(index));
      // console.log(newBoxes)
    // this.setState({
    //   boxes: newBoxes,
    // })
  }


  render() {
    return(
      <>
        <h1>Array Land</h1>
        <br />
        {this.state.boxes.map((boxes) =>
        <div class="box">{boxes}</div>)}
        <button class="sort-fruits" onClick={this.SortFruits}>Click to sort those fruits</button>
        <button class="sort-fruits" onClick={this.SortBoxes}>Click to sort those boxes</button>
      </>
    )
  }
}

export default ArrayLand;