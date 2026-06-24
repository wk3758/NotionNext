export const HUAWEI_MEME_ORIGIN = 'https://www.huawei.meme'
export const ZHISHENJUNEI_SLUG = 'article/zhishenjunei'
export const ZHISHENJUNEI_URL = `${HUAWEI_MEME_ORIGIN}/${ZHISHENJUNEI_SLUG}`
export const ZHISHENJUNEI_COVER = `${HUAWEI_MEME_ORIGIN}/images/zhishenjunei-cover.png`

export const ZHISHENJUNEI_TITLE =
  '置身菊内｜华为离职长文：从置身钉内、置身团内看大厂管理'

export const ZHISHENJUNEI_DESCRIPTION =
  '《置身菊内》是一篇以华为前海外员工口吻写成的离职长文，复盘华为增长乏力、分红下降、干部任期制、战略预备队、周末大会、AI失速与组织内耗。它与《置身钉内》《置身团内》同属大厂管理反思类文本，适合关注华为离职、华为吃瓜、华为管理问题的读者阅读。'

export const ZHISHENJUNEI_KEYWORDS = [
  '置身菊内',
  '置身钉内',
  '置身团内',
  '华为',
  'Huawei',
  'HUAWEI',
  '华为离职',
  '华为吃瓜',
  '华为管理',
  '华为管理问题',
  '华为心声社区',
  '华为海外',
  '华为战略预备队',
  '华为分红',
  '华为干部任期制',
  '任正非',
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
    label: '从置身钉内置身团内到置身菊内',
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
        text: '《置身菊内》是一篇以华为前海外员工口吻写成的组织反思长文，聚焦华为离职、华为管理、海外高压文化、分红下降、干部任期制、战略预备队、周末大会和 AI 大模型等话题。'
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
      name: '为什么搜索华为离职、华为吃瓜会看到这篇文章？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '这篇文章围绕华为离职员工视角、组织管理、战略预备队、周末会议、干部任期制、分红下降与 AI 失速等议题展开，适合关注华为吃瓜、华为管理问题和大厂离职长文的读者阅读。'
      }
    }
  ]
})
