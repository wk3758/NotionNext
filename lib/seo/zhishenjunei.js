export const HUAWEI_MEME_ORIGIN = 'https://www.huawei.meme'
export const ZHISHENJUNEI_SLUG = 'article/zhishenjunei'
export const ZHISHENJUNEI_URL = `${HUAWEI_MEME_ORIGIN}/${ZHISHENJUNEI_SLUG}`
export const ZHISHENJUNEI_COVER = `${HUAWEI_MEME_ORIGIN}/images/zhishenjunei-cover.png`

export const ZHISHENJUNEI_TITLE =
  '置身菊内：华为离职长文与大厂管理复盘'

export const ZHISHENJUNEI_DESCRIPTION =
  '《置身菊内》是一篇以华为前海外员工视角写成的离职长文，复盘增长乏力、分红下降、干部任期制、战略预备队、周末大会、AI 失速与组织内耗等话题。它适合关注华为吃瓜、华为裁员、华为分红、华为思想与华为管理争议的读者作为入口阅读。'

export const ZHISHENJUNEI_KEYWORDS = [
  '置身菊内',
  '置身钉内',
  '置身团内',
  '华为',
  'Huawei',
  'HUAWEI',
  '华为离职',
  '华为离职长文',
  '华为吃瓜',
  '华为吃瓜合集',
  '华为爆料',
  '华为内部爆料',
  '华为员工吐槽',
  '华为负面新闻',
  '华为事件',
  '华为xx事件',
  '华为裁员',
  '华为变相裁员',
  '华为 PIP',
  '华为 OD 裁员',
  '华为分红',
  '华为分红下降',
  '华为虚拟股',
  '华为 ESOP',
  '华为思想',
  '华为思想争议',
  '华为管理',
  '华为管理问题',
  '华为管理模式争议',
  '华为狼性文化',
  '华为奋斗者文化',
  '华为干部任期制',
  '华为战略预备队',
  '华为周末大会',
  '华为内耗',
  '任正非',
  '任正非管理思想',
  '孟晚舟',
  '大厂管理',
  '大厂离职长文',
  'AI大模型',
  '华为AI'
]

export const ZHISHENJUNEI_INTERNAL_LINKS = [
  {
    label: '置身菊内',
    href: `/${ZHISHENJUNEI_SLUG}`
  },
  {
    label: '华为离职长文',
    href: `/${ZHISHENJUNEI_SLUG}`
  },
  {
    label: '华为管理复盘',
    href: `/${ZHISHENJUNEI_SLUG}`
  }
]

export const normalizeHuaweiMemeUrl = value => {
  if (!value || typeof value !== 'string') return value

  try {
    const url = new URL(value.trim())
    if (url.hostname === 'huawei.meme' || url.hostname === 'www.huawei.meme') {
      url.protocol = 'https:'
      url.hostname = 'www.huawei.meme'
    }
    return url.toString().replace(/\/+$/, '')
  } catch (error) {
    return value.trim().replace(/\/+$/, '')
  }
}

export const isZhishenjuneiSlug = slug => {
  if (!slug || typeof slug !== 'string') return false
  const normalizedSlug = slug.trim().replace(/^\/+/, '').replace(/\/+$/, '')
  return normalizedSlug === ZHISHENJUNEI_SLUG
}

export const isZhishenjuneiPost = post => {
  return (
    isZhishenjuneiSlug(post?.slug) ||
    post?.href === `/${ZHISHENJUNEI_SLUG}` ||
    post?.href === ZHISHENJUNEI_URL ||
    post?.title === '置身菊内'
  )
}

export const withZhishenjuneiSeoMeta = meta => {
  if (!meta || !isZhishenjuneiSlug(meta.slug)) return meta

  return {
    ...meta,
    seoKey: 'zhishenjunei',
    canonical: ZHISHENJUNEI_URL,
    title: ZHISHENJUNEI_TITLE,
    description: ZHISHENJUNEI_DESCRIPTION,
    image: ZHISHENJUNEI_COVER,
    keywords: ZHISHENJUNEI_KEYWORDS.join(','),
    tags: ZHISHENJUNEI_KEYWORDS,
    category: '大厂管理'
  }
}

export const getZhishenjuneiFaqSchema = () => ({
  '@type': 'FAQPage',
  '@id': `${ZHISHENJUNEI_URL}#faq`,
  mainEntity: [
    {
      '@type': 'Question',
      name: '《置身菊内》是什么？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '《置身菊内》是一篇以华为前海外员工视角写成的组织反思长文，聚焦华为离职、华为管理、海外高压文化、分红下降、干部任期制、战略预备队、周末大会和 AI 大模型等话题。'
      }
    },
    {
      '@type': 'Question',
      name: '《置身菊内》和《置身钉内》《置身团内》有什么关系？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '《置身菊内》借用了《置身钉内》《置身团内》的命名和大厂复盘方式。《置身钉内》偏向钉钉 AI 产品复盘，《置身团内》偏向美团组织文化批判，《置身菊内》则聚焦华为管理与离职员工视角。'
      }
    },
    {
      '@type': 'Question',
      name: '为什么搜索华为吃瓜、华为裁员、华为分红会看到这篇文章？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '这篇文章围绕华为离职员工视角、组织管理、战略预备队、周末大会、干部任期制、分红下降与 AI 失速等议题展开，适合作为华为争议和大厂离职长文的入口阅读。'
      }
    }
  ]
})
