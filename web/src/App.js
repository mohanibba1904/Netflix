import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import AuthenticatedRoute from './components/AuthenticatedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import Context from './Context/Context'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isLightThemeActive: true,
    activeRoute: 'home',
    savedVideosList: [],
  }

  alterTheme = () => {
    this.setState(prevItem => ({
      isLightThemeActive: !prevItem.isLightThemeActive,
    }))
  }

  alterActiveRoute = routeName => {
    this.setState({activeRoute: routeName})
  }

  saveOrDeleteVideo = newVideoItem => {
    const {savedVideosList} = this.state
    const isVideoSaved = savedVideosList.find(
      eachItem => eachItem.id === newVideoItem.id,
    )
    console.log(isVideoSaved)
    if (isVideoSaved) {
      const filteredList = savedVideosList.filter(
        eachItem => eachItem.id !== newVideoItem.id,
      )
      this.setState({savedVideosList: filteredList})
    } else {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, newVideoItem],
      }))
    }
  }

  render() {
    const {
      isLightThemeActive,
      activeRoute,
      savedVideosList,
      isVideoSaved,
    } = this.state
    return (
      <Context.Provider
        value={{
          isLightThemeActive,
          alterTheme: this.alterTheme,
          activeRoute,
          alterActiveRoute: this.alterActiveRoute,
          savedVideosList,
          isVideoSaved,
          saveOrDeleteVideo: this.saveOrDeleteVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <AuthenticatedRoute exact path="/" component={Home} />
          <AuthenticatedRoute exact path="/trending" component={Trending} />
          <AuthenticatedRoute exact path="/gaming" component={Gaming} />
          <AuthenticatedRoute
            exact
            path="/saved-videos"
            component={SavedVideos}
          />
          <AuthenticatedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
