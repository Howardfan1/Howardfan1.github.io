import DefaultTheme from 'vitepress/theme'
import PostList from './components/PostList.vue'
import ArchiveList from './components/ArchiveList.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PostList', PostList)
    app.component('ArchiveList', ArchiveList)
  },
}
