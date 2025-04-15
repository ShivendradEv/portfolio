import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeIntro = () => {
  const codeString = `class Person {
    constructor() {
      this.name = "Shivendra Singh";
      this.experience = "6 years";
      this.hobby = "Building UIs and gaming";
    }
  }`;

  return (
    <SyntaxHighlighter language="javascript" style={oneDark}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeIntro;
