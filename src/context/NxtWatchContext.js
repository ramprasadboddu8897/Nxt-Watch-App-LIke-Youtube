import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  savedVideosList: [],
  selectedOption: '',
  likedVideoIdStatusList: [],
  onToggleThemeIcon: () => {},
  addSavedVideos: () => {},
  removeSavedVideos: () => {},
  changeOption: () => {},
  changeLikeStatus: () => {},
})

export default NxtWatchContext
