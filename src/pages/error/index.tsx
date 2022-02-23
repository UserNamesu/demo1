import styles from './index.less';
import { CloseCircleFilled } from '@ant-design/icons';
export default function IndexPage() {
  return (
    <div className={styles.root}>
      <div >
        <div className={styles.title}>
          访问失败
        </div>
        <CloseCircleFilled className={styles.img_error}/>
      </div>
    </div>
  );
}
