import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import MyMusicPage from '@/pages/MyMusicPage'
import FindMusicPage from '@/pages/FindMusicPage'
import MyFriendPage from '@/pages/MyFriendPage'
import DownloadPage from '@/pages/DownloadPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route path="/mymusic" component={MyMusicPage}/>
          <Route path="/findmusic" component={FindMusicPage}/>
          <Route path="/myfriend" component={MyFriendPage}/>
          <Route path="/download" component={DownloadPage}/>
          <Redirect exact path="/" to={"/home"} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
