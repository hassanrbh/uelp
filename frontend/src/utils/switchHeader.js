export const switchHeaders = (path, Switcher, location, MainHeader, user, logout) => {
  return location.pathname === path ? <Switcher /> : <MainHeader user={user} logout={logout} />
}