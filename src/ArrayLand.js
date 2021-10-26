import React from "react";

class ArrayLand extends React.Component {
  timeout;
  constructor(props) {
    super(props);
    this.state = {
      boxes: [
        [
          '🍊', '🍊', '🍋', '🍌', '🍋', '🍌', '🍋', '🍊', '🍌', '🍌'
        ],

        [
          '🍋', '🍋', '🍊', '🍌', '🍊', '🍌', '🍋', '🍋', '🍊', '🍊', '🍌',
        ],

        [
          '🍌', '🍋', '🍌', '🍋', '🍊', '🍌', '🍌',
        ]
      ]
    }
  }

  sortFruits = () => {
    let fruits = this.state.boxes;
    let sortOrder = ['🍊', '🍌', '🍋']
    fruits.map((fruit) => fruit.sort((a, b) => sortOrder.indexOf(a) - sortOrder.indexOf(b)));
    this.setState({
      boxes: fruits,
    })
    this.shuffleFruits();
  }

  const orderedFruits = fruits.flat().reduce(assignFruit, newBoxes);
    this.setState({
    boxes: [orderedFruits.oranges, orderedFruits.bananas, orderedFruits.lemons],
  })
this.shuffleFruits();
  }

shuffleFruits = () => {
  if (this.timeout) {
    clearTimeout(this.timeout);
  }

  let fruits = this.state.boxes;
  const newBoxes = [
    [],
    [],
    [],
  ]

  const assignFruit = (prevValue, currentVal) => {
    const randomNumber = Math.floor(Math.random() * 3);
    newBoxes[randomNumber].push(currentVal);
    return prevValue;
  }

  const randomized = fruits.flat().reduce(assignFruit, newBoxes);

  this.timeout = setTimeout(() => {
    this.setState({
      boxes: randomized,
    });
  }, 3000);
}

componentWillUnmount() {
  if (this.timeout) {
    clearTimeout(this.timeout);
  }
}

render() {
  return (
    <>
      <h1>Array Land</h1>
      <br />
      {this.state.boxes.map((boxes) =>
        <div className="box">{boxes}</div>)}
      <button className="sort-fruits" onClick={this.sortFruits}>Click to sort those fruits</button>
      <button className="sort-fruits" onClick={this.sortBoxes}>Click to sort those boxes</button>
    </>
  )
}
}

export default ArrayLand;