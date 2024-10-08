import Image from 'next/image';
import LogoImg from '../assets/logo.svg';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import * as Dialog from '@radix-ui/react-dialog';

export default function Home() {
  return (
    <>
      <Head>
        <title>Desenvolvendo uma web acessível</title>
      </Head>
      <header className={styles.header}>
        <Image src={LogoImg} alt='blog da Rocketseat' width={286 / 2} />

        <nav className={styles.nav}>
          <a href="https://github.com/eliton-dioni">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
              <title>Github</title>
              <path d="M256 32C132.3 32 32 134.9 32 261.7a229.3 229.3 0 0 0 153.2 217.9c1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4l-.3-39.1c-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6a84.6 84.6 0 0 1 2.2-60.8s1.6-.5 5-.5c8.1 0 26.4 3.1 56.6 24.1a209.8 209.8 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5a84.6 84.6 0 0 1 2.2 60.8 90.3 90.3 0 0 1 23 61.6c0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4A229.2 229.2 0 0 0 480 261.7C480 134.9 379.7 32 256 32z" stroke="none" /></svg>
          </a>
        </nav>
      </header>

      <main>
        <article className={styles.content}>
          <header>
            <h1>Desenvolvendo uma web acessível</h1>
            <h2>
              Protocolos e diretrizes orientam o desenvolvimento de tecnologias acessíveis, mas é preciso olhar para além de tudo isso
            </h2>
          </header>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </p>

          <h3>O que é acessibilidade, afinal?</h3>
        </article>
      </main>

      <footer className={styles.footer}>
        <Image src={LogoImg} alt='blog da Rocketseat' width={286 / 2} />

        <nav className={styles.nav} aria-label="Rodapé">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button type="button">
                Termos de uso
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className={styles.overlay} />

              <Dialog.Content className={styles.modal}>
                <Dialog.Title>Termos de uso</Dialog.Title>
                <Dialog.Description>Esses são os termos de uso</Dialog.Description>
                <Dialog.Close asChild>
                  <button className={styles.closeModalButton}>Fechar</button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </nav>
      </footer>
    </>
  );
}
