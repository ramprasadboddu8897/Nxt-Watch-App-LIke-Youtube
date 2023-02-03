import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import SideBarMenu from '../SideBarMenu'
import TrendingVideoCard from '../TrendingVideoCard'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  SavedVideosBgContainer,
  SavedVideosListContainer,
  SavedVideosList,
  SavedVideosHeadingContainer,
  SavedVideosIconContainer,
  SavedVideosHeading,
  LoaderBgContainer,
  FailureViewImage,
  ErrorText,
  ErrorDescription,
  SideBarMenuContainer,
} from './styledComponents'

const SavedVideosRoute = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideosList} = value
      const renderHeading = () => (
        <SavedVideosHeadingContainer isDarkTheme={isDarkTheme}>
          <SavedVideosIconContainer isDarkTheme={isDarkTheme}>
            <MdPlaylistAdd />
          </SavedVideosIconContainer>
          <SavedVideosHeading isDarkTheme={isDarkTheme}>
            Saved Videos
          </SavedVideosHeading>
        </SavedVideosHeadingContainer>
      )

      const renderGamingPageFailureView = () => (
        <LoaderBgContainer>
          <FailureViewImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <ErrorText isDarkTheme={isDarkTheme}>No saved videos found</ErrorText>
          <ErrorDescription>
            You can save your videos while watching them
          </ErrorDescription>
        </LoaderBgContainer>
      )

      const renderVideosList = () => (
        <SavedVideosList>
          {savedVideosList.map(eachItem => (
            <TrendingVideoCard
              isDarkTheme={isDarkTheme}
              videoCard={eachItem}
              key={eachItem.id}
            />
          ))}
        </SavedVideosList>
      )

      return (
        <>
          <Header />
          <SavedVideosBgContainer
            isDarkTheme={isDarkTheme}
            data-testid="savedVideos"
          >
            <SideBarMenuContainer>
              <SideBarMenu />
            </SideBarMenuContainer>
            {savedVideosList.length === 0 ? (
              renderGamingPageFailureView()
            ) : (
              <SavedVideosListContainer>
                {renderHeading()}
                {renderVideosList()}
              </SavedVideosListContainer>
            )}
          </SavedVideosBgContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideosRoute
