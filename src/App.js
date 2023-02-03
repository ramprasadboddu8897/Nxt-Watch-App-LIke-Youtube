import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import VideoItemDetailsRoute from './components/VideoItemDetailsRoute'
import NotFoundRoute from './components/NotFoundRoute'
import NxtWatchContext from './context/NxtWatchContext'

class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideosList: [],
    selectedOption: 'HOME',
    likedVideoIdStatusList: [],
  }

  // Changing The Theme Function
  onToggleThemeIcon = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  // Removing Saved Videos Function
  removeSavedVideos = videoDetails => {
    const {id} = videoDetails
    const {savedVideosList} = this.state
    const updatedSavedVideosList = savedVideosList.filter(
      eachVideo => eachVideo.id !== id,
    )
    this.setState({savedVideosList: updatedSavedVideosList})
  }

  // Add Videos to SavedVideoList Function
  addSavedVideos = videoDetails => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, videoDetails],
    }))
  }

  // Navigating to Pages Function
  changeOption = option => {
    this.setState({selectedOption: option})
  }

  // Change Like Status
  changeLikeStatus = (id, status) => {
    const {likedVideoIdStatusList} = this.state
    const videoIdObject = likedVideoIdStatusList.find(
      eachItem => eachItem.id === id,
    )
    if (videoIdObject === undefined) {
      this.setState(prevState => ({
        likedVideoIdStatusList: [
          ...prevState.likedVideoIdStatusList,
          {id, status},
        ],
      }))
    } else {
      this.setState(prevState => ({
        likedVideoIdStatusList: prevState.likedVideoIdStatusList.map(
          eachObj => {
            if (eachObj.id === id) {
              return {...eachObj, status}
            }
            return eachObj
          },
        ),
      }))
    }
  }

  render() {
    const {
      isDarkTheme,
      savedVideosList,
      selectedOption,
      likedVideoIdStatusList,
    } = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkTheme,
          savedVideosList,
          selectedOption,
          likedVideoIdStatusList,
          onToggleThemeIcon: this.onToggleThemeIcon,
          addSavedVideos: this.addSavedVideos,
          removeSavedVideos: this.removeSavedVideos,
          changeOption: this.changeOption,
          changeLikeStatus: this.changeLikeStatus,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetailsRoute}
          />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <Route exact path="/not-found" component={NotFoundRoute} />
          <Redirect to="not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
