import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeIntro = () => {
  const codeString = `class Person {
  constructor() {
    this.name = "Shivendra Singh";
    this.experience = "6 years";
    this.age = new Date().getFullYear() - 1996;
  }
}`;

  return (
    <SyntaxHighlighter language="javascript" style={oneDark}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeIntro;
