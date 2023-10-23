'use client';

import { useModal } from '@/components/Modal/Modal';

import styles from './page.module.css';

export default function About() {
  const { openModal } = useModal();

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <button onClick={() => openModal('modal-1')}>
          open global modal 1
        </button>
      </div>
    </main>
  );
}
