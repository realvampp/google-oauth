import { Injectable } from '@nestjs/common'

@Injectable()
export class AuthService {

  googleLogin(user) {
    if (!user) return { message: 'No user found' }

    return {
      message: 'User information from google',
      user: user
    }
  }
}
