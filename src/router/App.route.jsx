import { Switch, Route } from "react-router-dom"
import { HomePage, PostEditPage } from "../pages/index"
import {ThemeToggleButton} from "../components/index"

export const AppRouter = () =>(
    <>
        <ThemeToggleButton/>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/post/edit/:postId" component={PostEditPage} />
        </Switch>
    </>
)