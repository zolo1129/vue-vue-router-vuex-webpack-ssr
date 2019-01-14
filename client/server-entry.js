import createApp from './create-app'
import { promises } from 'fs';
import { resolve } from 'url';
import { reject } from 'async';

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp()

    router.push(context.url)

    router.onReady(() => {
      const matchedComponents = router.matchedComponents()
      if (!matchedComponents) {
        return reject(new Error('no component matched'))
      }
      resolve(app)
    })
  })
}
