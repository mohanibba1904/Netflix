import React from 'react'

const CartContext = React.createContext({
  isLightThemeActive: true,
  alterTheme: () => {},
  activeRoute: '',
  alterActiveRoute: () => {},
  savedVideosList: [],
  isVideoSaved: false,
  saveOrDeleteVideo: () => {},
})

export default CartContext
