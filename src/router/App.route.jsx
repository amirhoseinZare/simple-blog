import { Switch, Route } from "react-router-dom"
import { HomePage} from "../pages/index"

export const AppRouter = () =>(
    <Switch>
        <Route exact path="/" component={HomePage} />
    </Switch>
)