import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>

        <script src="https://3d-api.si.edu/resources/js/voyager-explorer.min.js"></script>
      </Head>

      <div >
        <br></br>
        <br></br>

        // Example one: based on Smithsonian documentation
        <div className='explorer-wrapper'>
          <voyager-explorer root='https://3d-api.si.edu/content/document/341c96cd-f967-4540-8ed1-d3fc56d31f12/' document='document.json'></voyager-explorer>
        </div>
        <br></br>

        // Example two: my code
        <div className='explorer-wrapper'>
          <voyager-explorer root='https://voyager-data.create.humanities.uva.nl/' document='tusk.svx.json'></voyager-explorer>
        </div>
      </div>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
