import SmartLink from '@/components/SmartLink'
import { HUAWEI_TOPIC_NAV_LINKS } from '@/lib/seo/huaweiTopics'
import {
  isZhishenjuneiPost,
  ZHISHENJUNEI_INTERNAL_LINKS
} from '@/lib/seo/zhishenjunei'

const ZhishenjuneiInternalLinks = ({ currentPost, className = '' }) => {
  const articleLinks = isZhishenjuneiPost(currentPost)
    ? []
    : ZHISHENJUNEI_INTERNAL_LINKS
  const links = [...articleLinks, ...HUAWEI_TOPIC_NAV_LINKS]

  if (links.length === 0) return null

  return (
    <aside
      aria-label='华为争议专题与相关阅读'
      className={`my-4 rounded-xl border border-gray-200 bg-white/90 p-4 text-sm shadow-sm dark:border-gray-700 dark:bg-[#18171d]/90 ${className}`}>
      <div className='mb-3 font-semibold text-gray-900 dark:text-gray-100'>
        华为争议专题
      </div>
      <div className='flex flex-wrap gap-2'>
        {links.map(link => (
          <SmartLink
            key={link.href}
            href={link.href}
            className='rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-red-700 transition hover:border-red-400 hover:bg-red-100 dark:border-red-900/70 dark:bg-red-950/30 dark:text-red-200'>
            {link.label}
          </SmartLink>
        ))}
      </div>
    </aside>
  )
}

export default ZhishenjuneiInternalLinks
