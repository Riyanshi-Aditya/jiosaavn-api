import { Hono } from 'hono'
import { AlbumController, ArtistController, SearchController, SongController } from '#modules/index'
import { PlaylistController } from '#modules/playlists/controllers'
import { App } from './app'
import { serve } from '@hono/node-server'

const app = new App([
  new SearchController(),
  new SongController(),
  new AlbumController(),
  new ArtistController(),
  new PlaylistController()
]).getApp()

if (process.env.VERCEL !== '1' && process.env.NODE_ENV !== 'test') {
  const port = Number(process.env.PORT) || 3000
  serve({ fetch: app.fetch, port }, (info) => {
    console.log(`JioSaavn API is running on port ${info.port}`)
  })
}

export default app
