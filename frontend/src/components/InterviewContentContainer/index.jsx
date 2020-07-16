
import React, { useContext } from 'react';

import { BlobContext } from '../../contexts';

import './stylesheet.scss';

export default function InterviewContentContainer () {
  const [blob, setBlob] = useContext(BlobContext);
  return (
    <div className="InterviewContentContainer">
      Container {blob}
    </div>
  )
};
