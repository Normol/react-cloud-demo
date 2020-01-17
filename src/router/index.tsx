import * as React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "pages/home"

const AppRoute: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path={`/`} component={Home} />
      </Switch>
    </Router>
  )
}
export default AppRoute
