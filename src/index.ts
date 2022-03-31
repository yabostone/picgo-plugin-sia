import picgo from 'picgo'

export = (ctx: picgo) => {
  const register = () => {
    ctx.helper.uploader.register('sia', {
      handle (ctx) {
        console.log(ctx)
      }
    })
    ctx.helper.transformer.register('sia', {
      handle (ctx) {
        console.log(ctx)
      }
    })
  }


  return {
    uploader: 'sia',
    transformer: 'sia',
    register
  }
}
