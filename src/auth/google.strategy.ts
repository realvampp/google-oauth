import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy, VerifyCallback } from 'passport-google-oauth20'
import { getSaveEnv } from '../utils'


@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: getSaveEnv('GOOGLE_CLIENT_ID'),
      clientSecret: getSaveEnv('GOOGLE_SECRET'),
      callbackURL: getSaveEnv('GOOGLE_CALLBACK_URL'),
      scope: ['email', 'profile']
    })
  }

  async validate(accessToken: string, _refreshToken: string, profile: any, done: VerifyCallback) {
    const { name, emails, photos } = profile
    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      accessToken
    }

    done(null, user)
  }
}