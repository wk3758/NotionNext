import SmartLink from '@/components/SmartLink'
import {
  isZhishenjuneiPost,
  ZHISHENJUNEI_INTERNAL_LINKS
} from '@/lib/seo/zhishenjunei'

const ZhishenjuneiInternalLinks = ({ currentPost, className = '' }) => {
  if (isZhishenjuneiPost(currentPost)) {
    return null
  }

  return (
    <aside
      aria-label='置身菊内相关文章'
      className={`my-4 rounded-xl border border-gray-200 bg-white/90 p-4 text-sm shadow-sm dark:border-gray-700 dark:bg-[#18171d]/90 ${className}`}>
      <div className='mb-3 font-semibold text-gray-900 dark:text-gray-100'>
        相关阅读
      </div>
      <div className='flex flex-wrap gap-2'>
        {ZHISHENJUNEI_INTERNAL_LINKS.map(link => (
          <SmartLink
            key={link.label}
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
