import Head from 'next/head'
import Image from 'next/image'
import { Advent_Pro, Inter, Lexend } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import dreadloreWebsite from './globals/_urls'

import ActorBioFull from './_actor-bio-full'
import Bio from './_bio'
import BriefBio from './_brief-bio'
import CoolButtonLinks from './_cool-button-links'
import Headshots from './_headshots'
import Navigation from './_navigation'
import Projects from './_projects'
import ReelComedic from './_reel-comedic'
import ReelDramatic from './_reel-dramatic'
import ReelFull from './_reel-full'
import Resume from './_resume'
import SocialIcons from './_social-icons'

{/*const inter = Inter({ subsets: ['latin'] })
const advent = Advent_Pro({ subsets: ['latin'] })*/}
const lexend = Lexend({ subsets: ['latin-ext'] });

export default function Home() {
  return (
 <>
    <Head>
      <title>William Hurst Actor</title>
      <meta name="description" content="NextJS App" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
		</Head>

{/* SET UP Styles AND Font */}
    <main className={`${styles.main} ${lexend.className}`}>
{/*    <main className={`${styles.main} ${inter.className}`}>*/}

		<h1 className={styles.main_title}>
			<span className={styles.title_items}>
				William Hurst</span>
		</h1>

{/* NAVIGATION */}
		<div className={styles.main_navigation}>
		  <Navigation />
		</div>

{/* SOCIALS */}
		<div className={styles.main_socials}>
			<SocialIcons />
		</div>

{/* HEADSHOTS */}
		<div className={styles.main_headshots}>
			<Headshots />
		</div>

{/* ACTOR TYPE */}
		<div className={styles.main_brief_bio}>
			<BriefBio />
		</div>

{/* REELS */}
		<div className={styles.main_reels}>
			<div className={styles.reels_featured_reel}>
				<ReelFull />
			</div>
			<div className={styles.reels_side_reels}>
				<ReelComedic />
				<ReelDramatic />
			</div>
		</div>

{/* RESUME / MEASUREMENTS */}
		<div className={styles.resume_field}>
			<Resume />
		</div>

{/* PROJECTS */}
		<div>
			<Projects />
		</div>


{/* ACTOR BIO FULL */}
		<div>
			<ActorBioFull />
		</div>

{/* FOOTER LINKS */}
		<div>
			<Navigation />
		</div>

{/* COOL TILE BUTTONS  */}
{/*		<div>
			<CoolButtonLinks />
		</div>
*/}

  	</main>
  </>
  )
}
