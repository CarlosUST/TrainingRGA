import React from 'react'


export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

class HelloClass extends React.Component<Props> {
  render() { // will return the component(JSX) that will be shown on screen
    const { name, enthusiasmLevel = 1 } = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error("You could be a little more enthusiastic. :D");
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
      </div>
    );
  }
}

export default HelloClass;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!");
}
