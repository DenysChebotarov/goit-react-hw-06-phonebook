import { Oval } from 'react-loader-spinner';

import s from './Loader.module.css';

function Loader() {
  return (
    <div className={s.container}>
      <span className={s.loader}>
        <Oval />
      </span>
    </div>
  );
}

export default Loader;
