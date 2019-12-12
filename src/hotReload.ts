// __VUE_HMR_RUNTIME__ is injected to global scope by @vue/runtime-core

export function genHotReloadCode(id: string, templateRequest?: string): string {
  return `
/* hot reload */
if (module.hot) {
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.isRecorded('${id}')) {
    api.createRecord('${id}', script)
  } else {
    api.reload('${id}', script)
  }
  ${templateRequest ? genTemplateHotReloadCode(id, templateRequest) : ''}
}
`
}

function genTemplateHotReloadCode(id: string, request: string) {
  return `
  module.hot.accept(${request}, () => {
    api.rerender('${id}', render)
  })
`
}
