import { Switch, Route } from "react-router-dom"
import { HomePage, PostEditPage } from "../pages/index"

export const AppRouter = () =>(
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/post/edit/:postId" component={PostEditPage} />
    </Switch>
)