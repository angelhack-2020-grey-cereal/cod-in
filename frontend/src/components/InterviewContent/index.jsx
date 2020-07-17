import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import { BlobContext } from '../../contexts';
import './stylesheet.scss';

export default function InterviewContent() {
  // TODO: delete after test
  const { blob } = useContext(BlobContext);

  return (
    <div className="InterviewContent">
      Container {blob}
      <ReactPlayer
        url={blob}
        controls={true}
        height={200}
        width={250}
      />
    </div>
  );
}
