import Link from 'next/link'
import styles from '@/styles/Home.module.css'

export default function Navigation() {
	return (
		<>
			<div className={styles.navigation_items}>
				<ul>
	  			<li>
						<a href="/">HOME</a>
						</li>
	  			<li>
						<a href="https://vimeo.com/williamrichardhurst">REELS</a>
						</li>
					<li>
						<Link href="/_resume-page">RESUME</Link>
						</li>
					<li>
	  				<a href="#">CONTACT</a>
						</li>
					<li>					
						<a href="#">ABOUT</a>
						</li>
					<li>
						<a href="#">PROJECTS</a>
						</li>
				</ul>
			</div>
		</>
	);
}
