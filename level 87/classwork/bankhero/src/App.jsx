// 3) შექმენით vite გამოყენებით, პროექტი სახელად bankhero, რომლის app ფაილშიც დაამატეთბ main elements 5 სექციით

import Foot from "./components/Footer"
import Nav from "./components/Nav"

function App() {
	return (
		<main>
			<Nav />
			<section>
				<h1>Secrion 1</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magnam voluptate architecto neque ipsam aliquam iure reprehenderit eveniet non atque ratione maiores consectetur praesentium nihil delectus voluptas iste aut pariatur, at, laboriosam beatae enim, ad facere saepe! Modi, eius magni.</p>
			</section>

			<section>
				<h1>Secrion 2</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magnam voluptate architecto neque ipsam aliquam iure reprehenderit eveniet non atque ratione maiores consectetur praesentium nihil delectus voluptas iste aut pariatur, at, laboriosam beatae enim, ad facere saepe! Modi, eius magni.</p>
			</section>

			<section>
				<h1>Secrion 3</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magnam voluptate architecto neque ipsam aliquam iure reprehenderit eveniet non atque ratione maiores consectetur praesentium nihil delectus voluptas iste aut pariatur, at, laboriosam beatae enim, ad facere saepe! Modi, eius magni.</p>
			</section>

			<section>
				<h1>Secrion 4</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magnam voluptate architecto neque ipsam aliquam iure reprehenderit eveniet non atque ratione maiores consectetur praesentium nihil delectus voluptas iste aut pariatur, at, laboriosam beatae enim, ad facere saepe! Modi, eius magni.</p>
			</section>

			<section>
				<h1>Secrion 5</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magnam voluptate architecto neque ipsam aliquam iure reprehenderit eveniet non atque ratione maiores consectetur praesentium nihil delectus voluptas iste aut pariatur, at, laboriosam beatae enim, ad facere saepe! Modi, eius magni.</p>
			</section>

			<Foot />
		</main>
	)
}

export default App
