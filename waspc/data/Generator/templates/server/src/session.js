import cookieSession from 'cookie-session'
import csrf from 'csurf'

import config from './config.js'

const sessionConfig = {
  name: config.session.cookie.name,
  secret: config.session.cookie.secret,
  httpOnly: false, // Need to be able to remove in JS
  signed: true,
  maxAge: config.session.cookie.maxAgeMs,
}

const csrfConfig = {
  cookie: {
    key: config.csrf.cookie.name,
    httpOnly: true,
  },
}

export function useSession(app) {
  if (config.env === 'production') {
    sessionConfig.secure = true
    sessionConfig.sameSite = 'none'
    csrfConfig.cookie.secure = true
    csrfConfig.cookie.sameSite = 'none'
  }

  app.use(cookieSession(sessionConfig))
  app.use(csrf(csrfConfig))
}