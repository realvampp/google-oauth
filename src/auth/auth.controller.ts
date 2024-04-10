import { Controller, Get, Req, UseGuards } from '@nestjs/common'
import { Request } from 'express'
import { AuthService } from './auth.service'
import { GoogleOauthGuard } from './google-oauth.guard'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @Get('google')
  @UseGuards(GoogleOauthGuard)
  googleAuth() {
  }

  @Get('google/redirect')
  @UseGuards(GoogleOauthGuard)
  googleAuthCallback(@Req() req: Request) {
    return this.authService.googleLogin(req.user)
  }
}
