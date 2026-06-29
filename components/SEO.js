import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import {
  getZhishenjuneiFaqSchema,
  normalizeHuaweiMemeUrl,
  withZhishenjuneiSeoMeta
} from '@/lib/seo/zhishenjunei'
import {
  getHuaweiTopicKeywords,
  getHuaweiTopicUrl,
  getHuaweiTopicWordCount
} from '@/lib/seo/huaweiTopics'
import { loadExternalResource } from '@/lib/utils'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

/**
 * 页面的Head头，有用于SEO
 * @param {*} param0
 * @returns
 */
const SEO = props => {
  const { children, siteInfo, post, NOTION_CONFIG } = props
  const PATH = siteConfig('PATH')
  const LINK = normalizeHuaweiMemeUrl(siteConfig('LINK'))
  const SUB_PATH = siteConfig('SUB_PATH', '')
  let url = PATH?.length ? `${LINK}/${SUB_PATH}` : LINK
  let image
  const router = useRouter()
  const meta = withZhishenjuneiSeoMeta(
    getSEOMeta(props, router, useGlobal()?.locale)
  )
  const webFontUrl = siteConfig('FONT_URL')

  useEffect(() => {
    // 使用WebFontLoader字体加载
    loadExternalResource(
      'https://cdnjs.cloudflare.com/ajax/libs/webfont/1.6.28/webfontloader.js',
      'js'
    ).then(url => {
      const WebFont = window?.WebFont
      if (WebFont) {
        // console.log('LoadWebFont', webFontUrl)
        WebFont.load({
          custom: {
            // families: ['"LXGW WenKai"'],
            urls: webFontUrl
          }
        })
      }
    })
  }, [webFontUrl])

  // SEO关键词
  const KEYWORDS = siteConfig('KEYWORDS')
  let keywords = meta?.tags || KEYWORDS
  if (post?.tags && post?.tags?.length > 0) {
    keywords = post?.tags?.join(',')
  }
  if (meta?.tags && meta.tags?.length > 0) {
    keywords = Array.isArray(meta.tags) ? meta.tags.join(',') : meta.tags
  }
  if (meta?.keywords) {
    keywords = meta.keywords
  }
  if (meta) {
    url = meta.canonical || normalizeHuaweiMemeUrl(`${url}/${meta.slug}`)
    image = normalizeSeoImage(meta.image || '/bg_image.jpg', LINK)
  }
  const TITLE = siteConfig('TITLE')
  const title = meta?.title || TITLE
  const description = meta?.description || `${siteInfo?.description}`
  const type = meta?.type || 'website'
  const isArticle = meta?.type === 'Post' || meta?.type === 'Article'
  const ogType = isArticle ? 'article' : type
  const robots = meta?.robots || 'follow, index, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
  const lang = siteConfig('LANG').replace('-', '_') // Facebook OpenGraph 要 zh_CN 這樣的格式才抓得到語言
  const category = meta?.category || KEYWORDS // section 主要是像是 category 這樣的分類，Facebook 用這個來抓連結的分類
  const favicon = siteConfig('BLOG_FAVICON')
  const BACKGROUND_DARK = siteConfig('BACKGROUND_DARK', '', NOTION_CONFIG)

  const SEO_BAIDU_SITE_VERIFICATION = siteConfig(
    'SEO_BAIDU_SITE_VERIFICATION',
    null,
    NOTION_CONFIG
  )

  const SEO_GOOGLE_SITE_VERIFICATION = siteConfig(
    'SEO_GOOGLE_SITE_VERIFICATION',
    null,
    NOTION_CONFIG
  )

  const BLOG_FAVICON = siteConfig('BLOG_FAVICON', null, NOTION_CONFIG)

  const COMMENT_WEBMENTION_ENABLE = siteConfig(
    'COMMENT_WEBMENTION_ENABLE',
    null,
    NOTION_CONFIG
  )

  const COMMENT_WEBMENTION_HOSTNAME = siteConfig(
    'COMMENT_WEBMENTION_HOSTNAME',
    null,
    NOTION_CONFIG
  )
  const COMMENT_WEBMENTION_AUTH = siteConfig(
    'COMMENT_WEBMENTION_AUTH',
    null,
    NOTION_CONFIG
  )
  const ANALYTICS_BUSUANZI_ENABLE = siteConfig(
    'ANALYTICS_BUSUANZI_ENABLE',
    null,
    NOTION_CONFIG
  )

  const FACEBOOK_PAGE = siteConfig('FACEBOOK_PAGE', null, NOTION_CONFIG)

  const AUTHOR = siteConfig('AUTHOR')
  const logo = normalizeSeoLogo(siteInfo, LINK, BLOG_FAVICON || favicon)
  const publishedTime = normalizeSeoDate(meta?.publishDate || meta?.publishDay)
  const modifiedTime = normalizeSeoDate(
    meta?.lastEditedDate || meta?.lastEditedDay || meta?.publishDate || meta?.publishDay
  )
  const keywordList = normalizeKeywordList(meta?.tags || keywords)
  return (
    <Head>
      <link rel='icon' href={favicon} />
      <title>{title}</title>
      <meta name='theme-color' content={BACKGROUND_DARK} />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0'
      />
      <meta name='robots' content={robots} />
      <meta charSet='UTF-8' />
      <meta name='format-detection' content='telephone=no' />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='apple-mobile-web-app-title' content={title} />

      {/* 搜索引擎验证 */}
      {SEO_GOOGLE_SITE_VERIFICATION && (
        <meta
          name='google-site-verification'
          content={SEO_GOOGLE_SITE_VERIFICATION}
        />
      )}
      {SEO_BAIDU_SITE_VERIFICATION && (
        <meta
          name='baidu-site-verification'
          content={SEO_BAIDU_SITE_VERIFICATION}
        />
      )}

      {/* 基础SEO元数据 */}
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta name='author' content={AUTHOR} />
      <meta name='generator' content='NotionNext' />
      <link rel='canonical' href={url} />

      {/* 语言和地区 */}
      <meta httpEquiv='content-language' content={siteConfig('LANG')} />
      <meta name='geo.region' content={siteConfig('GEO_REGION', 'CN')} />
      <meta name='geo.country' content={siteConfig('GEO_COUNTRY', 'CN')} />
      {/* Open Graph 元数据 */}
      <meta property='og:locale' content={lang} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={url} />
      <meta property='og:image' content={image} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:image:alt' content={title} />
      <meta property='og:site_name' content={siteConfig('TITLE')} />
      <meta property='og:type' content={ogType} />

      {/* Twitter Card 元数据 */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content={siteConfig('TWITTER_SITE', '@NotionNext')} />
      <meta name='twitter:creator' content={siteConfig('TWITTER_CREATOR', '@NotionNext')} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
      <meta name='twitter:image:alt' content={title} />

      <link rel='icon' href={BLOG_FAVICON} />
      <link
        rel='alternate'
        type='application/rss+xml'
        title={`${siteConfig('TITLE')} RSS`}
        href={`${LINK}/rss/feed.xml`}
      />

      {COMMENT_WEBMENTION_ENABLE && (
        <>
          <link
            rel='webmention'
            href={`https://webmention.io/${COMMENT_WEBMENTION_HOSTNAME}/webmention`}
          />
          <link
            rel='pingback'
            href={`https://webmention.io/${COMMENT_WEBMENTION_HOSTNAME}/xmlrpc`}
          />
          {COMMENT_WEBMENTION_AUTH && (
            <link href={COMMENT_WEBMENTION_AUTH} rel='me' />
          )}
        </>
      )}

      {ANALYTICS_BUSUANZI_ENABLE && (
        <meta name='referrer' content='no-referrer-when-downgrade' />
      )}
      {/* 文章特定元数据 */}
      {isArticle && (
        <>
          {publishedTime && (
            <meta property='article:published_time' content={publishedTime} />
          )}
          {modifiedTime && (
            <meta property='article:modified_time' content={modifiedTime} />
          )}
          <meta property='article:author' content={AUTHOR} />
          <meta property='article:section' content={category} />
          {keywordList.map(keyword => (
            <meta key={keyword} property='article:tag' content={keyword} />
          ))}
          {FACEBOOK_PAGE && (
            <meta property='article:publisher' content={FACEBOOK_PAGE} />
          )}
        </>
      )}

      {/* 结构化数据 */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateStructuredData(meta, siteInfo, url, image, AUTHOR, logo)
          )
        }}
      />

      {/* DNS预取和预连接 */}
      <link rel='dns-prefetch' href='//fonts.googleapis.com' />
      <link rel='dns-prefetch' href='//www.google-analytics.com' />
      <link rel='dns-prefetch' href='//www.googletagmanager.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />

      {children}
    </Head>
  )
}

const normalizeSeoImage = (image, link) => {
  if (!image || typeof image !== 'string') {
    return image
  }
  if (/^https?:\/\//i.test(image)) {
    return normalizeHuaweiMemeUrl(image)
  }
  const path = image.startsWith('/') ? image : `/${image}`
  return `${link}${path}`
}

const isSeoImageCandidate = image => {
  if (!image || typeof image !== 'string') return false
  const value = image.trim()
  return /^https?:\/\//i.test(value) || value.startsWith('/')
}

const normalizeSeoLogo = (siteInfo, link, favicon) => {
  const candidates = [siteInfo?.icon, favicon, '/favicon.ico']
  const logo = candidates.find(isSeoImageCandidate)
  return normalizeSeoImage(logo || '/favicon.ico', link)
}

const normalizeSeoDate = dateInput => {
  if (!dateInput) return undefined
  const date = new Date(dateInput)
  if (Number.isNaN(date.getTime())) return undefined
  return date.toISOString()
}

const normalizeKeywordList = keywords => {
  if (Array.isArray(keywords)) {
    return keywords.map(keyword => `${keyword}`.trim()).filter(Boolean)
  }
  if (typeof keywords === 'string') {
    return keywords.split(',').map(keyword => keyword.trim()).filter(Boolean)
  }
  return []
}

/**
 * 生成结构化数据
 * @param {*} meta
 * @param {*} siteInfo
 * @param {*} url
 * @param {*} image
 * @param {*} author
 * @returns
 */
const generateStructuredData = (meta, siteInfo, url, image, author, logo) => {
  const siteUrl = normalizeHuaweiMemeUrl(siteConfig('LINK'))
  const lang = siteConfig('LANG')
  const organization = {
    '@type': 'Organization',
    name: siteInfo?.title,
    logo: {
      '@type': 'ImageObject',
      url: logo
    }
  }

  const baseData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteInfo?.title,
    description: siteInfo?.description,
    url: siteUrl,
    inLanguage: lang,
    author: {
      '@type': 'Person',
      name: author
    },
    publisher: organization,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?s={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  }

  const isArticle = meta?.type === 'Post' || meta?.type === 'Article'
  if (isArticle) {
    const article = {
      '@context': 'https://schema.org',
      '@type': meta?.schemaType || (meta?.type === 'Post' ? 'BlogPosting' : 'Article'),
      headline: meta.title,
      description: meta.description,
      image: image,
      url: url,
      inLanguage: lang,
      datePublished: normalizeSeoDate(meta.publishDate || meta.publishDay),
      dateModified: normalizeSeoDate(
        meta.lastEditedDate || meta.lastEditedDay || meta.publishDate || meta.publishDay
      ),
      author: {
        '@type': 'Person',
        name: author
      },
      publisher: organization,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url
      },
      keywords: normalizeKeywordList(meta.tags || meta.keywords).join(', '),
      articleSection: meta.category,
      wordCount: meta.wordCount,
      isAccessibleForFree: true
    }

    const graph = [article]

    if (meta?.seoKey === 'zhishenjunei') {
      graph.push(getZhishenjuneiFaqSchema())
    }

    if (Array.isArray(meta?.faqs) && meta.faqs.length > 0) {
      graph.push({
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: meta.faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      })
    }

    if (graph.length > 1) {
      return {
        '@context': 'https://schema.org',
        '@graph': graph
      }
    }

    return article
  }

  return baseData
}

/**
 * 获取SEO信息
 * @param {*} props
 * @param {*} router
 */
const getSEOMeta = (props, router, locale) => {
  const { post, siteInfo, tag, category, page, topic, NOTION_CONFIG } = props
  const keyword = router?.query?.s

  const TITLE = siteConfig('TITLE')
  switch (router.route) {
    case '/':
      return {
        title: `${siteInfo?.title} | ${siteInfo?.description}`,
        description: `${siteInfo?.description}`,
        image: `${siteInfo?.pageCover}`,
        slug: '',
        type: 'website'
      }
    case '/archive':
      return {
        title: `${locale.NAV.ARCHIVE} | ${siteInfo?.title}`,
        description: `${siteInfo?.description}`,
        image: `${siteInfo?.pageCover}`,
        slug: 'archive',
        type: 'website'
      }
    case '/page/[page]':
      return {
        title: `${page} | Page | ${siteInfo?.title}`,
        description: `${siteInfo?.description}`,
        image: `${siteInfo?.pageCover}`,
        slug: 'page/' + page,
        type: 'website'
      }
    case '/category/[category]':
      return {
        title: `${category} | ${locale.COMMON.CATEGORY} | ${siteInfo?.title}`,
        description: `${siteInfo?.description}`,
        slug: 'category/' + category,
        image: `${siteInfo?.pageCover}`,
        type: 'website'
      }
    case '/category/[category]/page/[page]':
      return {
        title: `${category} | ${locale.COMMON.CATEGORY} | ${siteInfo?.title}`,
        description: `${siteInfo?.description}`,
        slug: 'category/' + category,
        image: `${siteInfo?.pageCover}`,
        type: 'website'
      }
    case '/tag/[tag]':
    case '/tag/[tag]/page/[page]':
      return {
        title: `${tag} | ${locale.COMMON.TAGS} | ${siteInfo?.title}`,
        description: `${siteInfo?.description}`,
        image: `${siteInfo?.pageCover}`,
        slug: 'tag/' + tag,
        type: 'website'
      }
    case '/search':
      return {
        title: `${keyword || ''}${keyword ? ' | ' : ''}${locale.NAV.SEARCH} | ${siteInfo?.title}`,
        description: `${siteInfo?.description}`,
        image: `${siteInfo?.pageCover}`,
        slug: 'search',
        type: 'website',
        robots: 'noindex, follow'
      }
    case '/search/[keyword]':
    case '/search/[keyword]/page/[page]':
      return {
        title: `${keyword || ''}${keyword ? ' | ' : ''}${locale.NAV.SEARCH} | ${siteInfo?.title}`,
        description: TITLE,
        image: `${siteInfo?.pageCover}`,
        slug: 'search/' + (keyword || ''),
        type: 'website',
        robots: 'noindex, follow'
      }
    case '/topic/[slug]':
      if (!topic) {
        return {
          title: `${siteInfo?.title} | Topic`,
          description: `${siteInfo?.description}`,
          image: `${siteInfo?.pageCover}`,
          slug: `topic/${router?.query?.slug || ''}`,
          type: 'website',
          robots: 'noindex, follow'
        }
      }
      return {
        title: topic.metaTitle || `${topic.title} | ${siteInfo?.title}`,
        description: topic.description,
        canonical: getHuaweiTopicUrl(
          normalizeHuaweiMemeUrl(siteConfig('LINK', siteInfo?.link, NOTION_CONFIG)),
          topic
        ),
        image: topic.image || `${siteInfo?.pageCover}`,
        slug: `topic/${topic.slug}`,
        type: 'Article',
        schemaType: 'Article',
        category: topic.category || '华为争议事实核查',
        tags: getHuaweiTopicKeywords(topic),
        keywords: getHuaweiTopicKeywords(topic).join(','),
        publishDate: topic.publishedAt || '2026-06-28',
        lastEditedDate: topic.updatedAt || '2026-06-28',
        wordCount: getHuaweiTopicWordCount(topic)
      }
    case '/404':
      return {
        title: `${siteInfo?.title} | ${locale.NAV.PAGE_NOT_FOUND}`,
        image: `${siteInfo?.pageCover}`,
        robots: 'noindex, follow'
      }
    case '/tag':
      return {
        title: `${locale.COMMON.TAGS} | ${siteInfo?.title}`,
        description: `${siteInfo?.description}`,
        image: `${siteInfo?.pageCover}`,
        slug: 'tag',
        type: 'website'
      }
    case '/category':
      return {
        title: `${locale.COMMON.CATEGORY} | ${siteInfo?.title}`,
        description: `${siteInfo?.description}`,
        image: `${siteInfo?.pageCover}`,
        slug: 'category',
        type: 'website'
      }
    default:
      return {
        title: post
          ? `${post?.title} | ${siteInfo?.title}`
          : `${siteInfo?.title} | loading`,
        description: post?.summary,
        type: post?.type,
        slug: post?.slug,
        image: post?.pageCoverThumbnail || `${siteInfo?.pageCover}`,
        category: Array.isArray(post?.category) ? post.category[0] : post?.category,
        tags: post?.tags,
        keywords: post?.tags?.join(','),
        publishDate: post?.publishDate,
        publishDay: post?.publishDay,
        lastEditedDate: post?.lastEditedDate,
        lastEditedDay: post?.lastEditedDay,
        wordCount: post?.wordCount
      }
  }
}

export default SEO
