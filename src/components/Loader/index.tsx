/* eslint-disable @typescript-eslint/no-non-null-assertion */
import ReactDOM from 'react-dom';

import Spinner from '../Spinner';

import { Overlay } from './styles';

interface Props {
  isLoading: boolean
}

export default function Loader({ isLoading }: Props) {
  if (!isLoading) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Spinner />
    </Overlay>,
    document.getElementById('loader-root')!,
  );
}
