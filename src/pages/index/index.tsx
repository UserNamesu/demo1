import React, { useEffect,useState } from 'react';
import { getUser } from '../../services/user';
import styles from './index.less';

interface obj{
  key: string;
  age: number;
  name: string;
  address: string
}

export default function IndexPage() {
  const [useIn, setUserIn] = useState<obj>();
  useEffect(() => {
    getUser().then((resp: obj) => {
      setUserIn(resp);
    })
  }, []);
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <span>
          {`用户名：${useIn?.name}`}
        </span>
        <span>
          {`年龄：${useIn?.age}`}
        </span>
        <span>
          {`居住地址：${useIn?.address}`}
        </span>
      </div>
    </div>
  );
}
