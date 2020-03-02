import keepAlive from '@/views/keepAlive/father'
import keepAliveson1 from '@/views/keepAlive/son1'
import keepAliveson2 from '@/views/keepAlive/son2'
export default [
  {
    path: '/keepAlive',
    name: 'keepAlive',
    component: keepAlive,
    children: [
      {
        path: 'son1',
        name: 'son1',
        component: keepAliveson1
      },
      {
        path: 'son2',
        name: 'son2',
        component: keepAliveson2
      }
    ]
  }
]
