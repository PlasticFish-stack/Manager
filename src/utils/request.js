import { check } from '@/api/permission.js'
import { UseTitleState } from '@/store/webTitle.js'



export async function getTitle() {
  const titleState = UseTitleState()
  let res = await check()
  document.title = res.data.title
  titleState.titleManager(res.data.title)
}
