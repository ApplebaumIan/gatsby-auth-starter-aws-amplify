import React from 'react'
import { Link } from 'gatsby'

const Home = () => <div>
  <h1>Home</h1>
	<p>You are now logged in! <Link to="/app/profile">View profile</Link></p>
	<p>Now go build something great and deploy it using the <a href="https://console.amplify.aws">AWS Amplify Console</a></p>
	<iframe width="560" height="315" src="https://www.youtube.com/embed/qYr9kIyambE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	</div>

export default Home