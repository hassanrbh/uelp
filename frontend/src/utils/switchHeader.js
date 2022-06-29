export const switchHeaders = (path, Switcher, location, MainHeader) => {
  return location.pathname === path ? <Switcher /> : <MainHeader />
}