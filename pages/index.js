import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Bio from './_bio'
import dreadloreWebsite from './globals/_urls'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
    <Head>
      <title>William Hurst Acting</title>
      <meta name="description" content="NextJS App" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
		</Head>

{/* HEADER */}
    <main className={`${styles.main} ${inter.className}`}>

			<div className={styles.header_grid}>
	  		<a href="#">Home</a>
	  		<a href="https://vimeo.com/williamrichardhurst">Reel</a>
	  		<a href="#">Resume</a>
	  		<a href="#">Contact</a>
			</div>

{/* SOCIALS */}
	<div className={styles.header_socials}>
			<a 
			href="https://twitter.com/darkeyesdesign">
				<img src="/assets/socials/twitter-old-logo.png"
			 	className={styles.header_socials_image}
				/>
			</a>
			<a href="https://www.youtube.com/@william_r_hurst">
				<img src="/assets/socials/youtube-logo.png"
			 	className={styles.header_socials_image}
				/>
			</a>
			<a href="https://pro.imdb.com/name/nm12293482/?ref_=instant_nm_2&q=william%20hurst">
				<img src="/assets/socials/imdb-logo.png"
			 	className={styles.header_socials_image}
				/>
			</a>
	</div>

{/* HEADSHOTS */}
{/*   		<div className={styles.description}>
    		<p>
					<img src="/assets/set-shot-122431.jpeg"
					className={styles.header_image}
					/>
				</p>
    	</div>
*/}
		<div className={styles.carousel_container}>
    	<img className={styles.carousel_image}
			src="/assets/headshots/serious-straight-headshot.jpg"
			alt="Headshot Not Found"
			/>
      <div className={styles.controls}>
	{/* 			<FontAwesomeIcon icon="fa-solid fa-backward-step" />			
   	  <i id="prev-button" className={fa-solid fa-backward-step}
					alt="Previous"></i>
        <i id="play-button" className={fa-solid fa-play}
					alt="Play"></i>
        <i id="pause-button" className={fa-solid fa-pause}
					alt="Pause"></i>
				<i id="next-button" className={fa-solid fa-forward-step} 
					alt="Next"></i>
*/}
    	</div>
		</div>

{/* CENTER IMAGE */}
		{/*<div className={styles.center}>*/}
			<div className={styles.content_grid}>
				<Bio />
			</div>

{/* STYLES GRID - LATERAL */}
    	<div className={styles.grid}>
    		<a 
				href={dreadloreWebsite}
      	className={styles.card}
      	target="_blank"
      	rel="noopener noreferrer"
      	>
      		<h2>YouTube <span>-&gt;</span>
						</h2>
      		<p>Projects
      			</p>
      	</a>

      	<a
     		href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      	className={styles.card}
      	target="_blank"
      	rel="noopener noreferrer"
     	 >
      		<h2>Learn <span>-&gt;</span>
	      	  </h2>
      		<p>Learn about Next.js in an interactive course with&nbsp;quizzes!
  					</p>
				</a>

      	<a
      	href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      	className={styles.card}
      	target="_blank"
      	rel="noopener noreferrer"
     	 	>
        	<h2>Templates <span>-&gt;</span>
          	</h2>
        	<p>Discover and deploy boilerplate example Next.js&nbsp;projects.
          	</p>
     		</a>

      	<a
      	href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      	className={styles.card}
      	target="_blank"
      	rel="noopener noreferrer"
      	>
      		<h2>Deploy <span>-&gt;</span>
        		</h2>
        		<p>Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel.
          		</p>
      	</a>
    	</div>
  	</main>
  </>
  )
}
