import ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from 'react-router-dom'
import Profile from "./pages/Profile"
import Header from "./components/Header"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<Router basename="/School-project-12-front">	
		<Header />
		<Profile />
	</Router>
)