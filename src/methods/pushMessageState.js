import eventBus from '@/methods/eventBus'

export default function (response, title = '更新') {
  if (response.data.success) {
    // 如果 HTTP status 200 就發送成功訊息
    eventBus.emit('push-message', {
      style: 'success',
      title: `成功--${title}`
    })
  } else {
    // 如果訊息是字串，就轉成陣列
    const message = typeof response.data.message === 'string'
      ? [response.data.message]
      : response.data.message
    eventBus.emit('push-message', {
      style: 'danger',
      title: `失敗--${title}`,
      content: message.join('、')
    })
  }
}
