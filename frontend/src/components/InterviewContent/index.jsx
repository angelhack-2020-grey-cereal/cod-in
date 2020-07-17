import React, { useContext, useState } from 'react';
import ReactPlayer from 'react-player';
import { BlobContext } from '../../contexts';
import './stylesheet.scss';
import Editor from '@monaco-editor/react';

export default function InterviewContent() {
  // TODO: delete after test
  const { blob } = useContext(BlobContext);
  const [code, setCode] = useState(`function solution() {
  // write your solution here
}`);

  return (
    <div className="InterviewContent">
      Container {blob}
      <ReactPlayer
        url={blob}
        controls={true}
        height={200}
        width={250}
      />
      <Editor
        height="100%"
        language="javascript"
        value={code}
      />
    </div>
  );
}
