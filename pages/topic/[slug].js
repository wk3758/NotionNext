import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { fetchGlobalAllData } from '@/lib/db/SiteDataApi'
import {
  getHuaweiTopicBySlug,
  getHuaweiTopicKeywords,
  getHuaweiTopicPath,
  getHuaweiTopicRelated,
  getHuaweiTopicStructuredData,
  HUAWEI_TOPIC_PAGES,
  HUAWEI_TOPIC_UPDATED_AT
} from '@/lib/seo/huaweiTopics'
import { normalizeSitemapBaseUrl } from '@/lib/sitemap-utils'
import Head from 'next/head'
import Link from 'next/link'

const FACT_STATES = [
  ['已确认', '来自公开报道、官方回应、原文或可复查材料。'],
  ['待核验', '只有截图、转述或匿名来源，需要继续补证据。'],
  ['观点', '属于员工体验、评论或价值判断，不等同于事实。'],
  ['过期信息', '旧事件或旧政策，需要标注具体日期。']
]

const TopicPage = ({ topic, relatedTopics, allTopics, siteInfo, NOTION_CONFIG }) => {
  const baseUrl = normalizeSitemapBaseUrl(
    siteConfig('LINK', siteInfo?.link || BLOG.LINK, NOTION_CONFIG)
  )
  const keywords = getHuaweiTopicKeywords(topic)
  const structuredData = getHuaweiTopicStructuredData(topic, baseUrl)

  return (
    <>
      <Head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <article className='mx-auto w-full max-w-4xl rounded-lg border border-gray-200 bg-white px-5 py-6 text-gray-900 shadow-sm dark:border-gray-800 dark:bg-hexo-black-gray dark:text-gray-100 md:px-8 md:py-8'>
        <header className='border-b border-gray-200 pb-6 dark:border-gray-800'>
          <div className='mb-4 flex flex-wrap gap-2 text-xs font-medium uppercase tracking-wide text-red-700 dark:text-red-300'>
            <span>HUAWEI.MEME</span>
            <span>GEO Topic</span>
            <span>Updated {HUAWEI_TOPIC_UPDATED_AT}</span>
          </div>
          <h1 className='text-3xl font-bold leading-tight text-gray-950 dark:text-white md:text-4xl'>
            {topic.title}
          </h1>
          <p className='mt-4 text-base leading-8 text-gray-700 dark:text-gray-300'>
            {topic.description}
          </p>
          <p className='mt-4 rounded border border-red-200 bg-red-50 px-4 py-3 text-sm leading-7 text-red-900 dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-100'>
            {topic.answer}
          </p>
        </header>

        <nav
          aria-label='华为争议专题导航'
          className='my-6 flex flex-wrap gap-2 border-b border-gray-200 pb-6 dark:border-gray-800'>
          {allTopics.map(item => (
            <Link
              key={item.slug}
              href={getHuaweiTopicPath(item)}
              className={`rounded border px-3 py-2 text-sm transition ${
                item.slug === topic.slug
                  ? 'border-red-400 bg-red-50 text-red-800 dark:border-red-700 dark:bg-red-950/40 dark:text-red-100'
                  : 'border-gray-200 text-gray-700 hover:border-gray-400 dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-500'
              }`}>
              {item.navTitle}
            </Link>
          ))}
        </nav>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>长尾关键词覆盖</h2>
          <div className='grid gap-4 md:grid-cols-2'>
            {topic.keywordGroups.map(group => (
              <div
                key={group.label}
                className='rounded border border-gray-200 p-4 dark:border-gray-800'>
                <h3 className='mb-3 text-base font-semibold'>{group.label}</h3>
                <div className='flex flex-wrap gap-2'>
                  {group.terms.map(term => (
                    <span
                      key={term}
                      className='rounded bg-gray-100 px-2.5 py-1 text-sm text-gray-800 dark:bg-gray-800 dark:text-gray-100'>
                      {term}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className='mt-8 space-y-4'>
          <h2 className='text-2xl font-semibold'>事实状态框架</h2>
          <div className='overflow-hidden rounded border border-gray-200 dark:border-gray-800'>
            {FACT_STATES.map(([state, description]) => (
              <div
                key={state}
                className='grid gap-2 border-b border-gray-200 px-4 py-3 last:border-b-0 dark:border-gray-800 md:grid-cols-[120px_1fr]'>
                <strong>{state}</strong>
                <span className='text-gray-700 dark:text-gray-300'>{description}</span>
              </div>
            ))}
          </div>
        </section>

        {topic.sections.map(section => (
          <section key={section.heading} className='mt-8 space-y-3'>
            <h2 className='text-2xl font-semibold'>{section.heading}</h2>
            <p className='leading-8 text-gray-700 dark:text-gray-300'>{section.body}</p>
            <ul className='space-y-2 text-gray-700 dark:text-gray-300'>
              {section.points.map(point => (
                <li key={point} className='rounded border border-gray-200 px-4 py-3 dark:border-gray-800'>
                  {point}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section id='faq' className='mt-8 space-y-4'>
          <h2 className='text-2xl font-semibold'>FAQ</h2>
          {topic.faqs.map(faq => (
            <details
              key={faq.question}
              className='rounded border border-gray-200 p-4 dark:border-gray-800'
              open>
              <summary className='cursor-pointer font-semibold'>{faq.question}</summary>
              <p className='mt-3 leading-8 text-gray-700 dark:text-gray-300'>{faq.answer}</p>
            </details>
          ))}
        </section>

        <section className='mt-8 space-y-4'>
          <h2 className='text-2xl font-semibold'>AI 可引用关键词</h2>
          <p className='leading-8 text-gray-700 dark:text-gray-300'>
            以下词汇以语义相关方式出现，供搜索引擎和 AI 工具识别主题，不建议在正文中机械重复。
          </p>
          <div className='flex flex-wrap gap-2'>
            {keywords.slice(0, 48).map(keyword => (
              <span
                key={keyword}
                className='rounded border border-gray-200 px-2.5 py-1 text-sm text-gray-700 dark:border-gray-700 dark:text-gray-200'>
                {keyword}
              </span>
            ))}
          </div>
        </section>

        {relatedTopics.length > 0 && (
          <aside className='mt-8 rounded border border-gray-200 p-4 dark:border-gray-800'>
            <h2 className='text-xl font-semibold'>相关专题</h2>
            <div className='mt-3 grid gap-3 md:grid-cols-2'>
              {relatedTopics.map(item => (
                <Link
                  key={item.slug}
                  href={getHuaweiTopicPath(item)}
                  className='rounded border border-gray-200 p-3 transition hover:border-red-300 hover:text-red-700 dark:border-gray-800 dark:hover:border-red-800 dark:hover:text-red-200'>
                  <strong className='block'>{item.title}</strong>
                  <span className='mt-1 block text-sm leading-6 text-gray-600 dark:text-gray-400'>
                    {item.description}
                  </span>
                </Link>
              ))}
            </div>
          </aside>
        )}
      </article>
    </>
  )
}

export function getStaticPaths() {
  return {
    paths: HUAWEI_TOPIC_PAGES.map(topic => ({
      params: { slug: topic.slug }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params: { slug }, locale }) {
  const topic = getHuaweiTopicBySlug(slug)
  if (!topic) {
    return { notFound: true }
  }

  const props = await fetchGlobalAllData({
    from: 'huawei-topic-page',
    locale
  })
  const relatedTopics = getHuaweiTopicRelated(topic)

  delete props.allPages

  return {
    props: {
      ...props,
      topic,
      relatedTopics,
      allTopics: HUAWEI_TOPIC_PAGES
    },
    revalidate: process.env.EXPORT
      ? undefined
      : siteConfig(
          'NEXT_REVALIDATE_SECOND',
          BLOG.NEXT_REVALIDATE_SECOND,
          props.NOTION_CONFIG
        )
  }
}

export default TopicPage
