import { NestFactory } from '@nestjs/core'
import { Logger } from '@nestjs/common'
import { AppModule } from './app.module'
import { getSaveEnv } from './utils'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const port = getSaveEnv('PORT')
  app.setGlobalPrefix('api')

  await app.listen(port, () => {
    Logger.log(`Server is running on ${port} port`)
  })
}

bootstrap()
