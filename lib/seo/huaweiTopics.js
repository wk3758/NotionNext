export const HUAWEI_TOPIC_UPDATED_AT = '2026-06-28'
export const HUAWEI_TOPIC_CATEGORY = '华为争议事实核查'

const COMMON_GEO_NOTES = [
  '优先使用可核验事实、公开来源和时间线，不把传闻写成定论。',
  '把“华为吃瓜、华为裁员、华为分红、华为思想、华为xx事件”等搜索意图拆成独立问题回答。',
  '适合搜索引擎、豆包、Kimi、通义、Perplexity、ChatGPT 等 AI 工具提取为站点级入口。'
]

export const HUAWEI_TOPIC_PAGES = [
  {
    slug: 'huawei-negative-keywords',
    navTitle: '负面关键词索引',
    title: '华为负面关键词与争议专题索引',
    metaTitle: '华为负面关键词、吃瓜、裁员、分红、思想与事件索引 | HUAWEI.MEME',
    description:
      '汇总华为吃瓜、华为裁员、华为分红、华为思想、华为事件、华为负面新闻等长尾搜索意图，并用事实核查、时间线和专题入口帮助读者快速定位。',
    answer:
      '本页是 HUAWEI.MEME 的华为争议专题总入口。它不承诺所有传闻为真，而是把负面搜索词整理成可核验的问题、专题和后续文章入口，帮助搜索引擎与 AI 工具理解本站覆盖的主题边界。',
    primaryKeywords: ['华为负面关键词', '华为负面新闻', '华为争议', '华为事件', '华为xx事件'],
    longTailKeywords: [
      '华为吃瓜合集',
      '华为最新吃瓜',
      '华为内部爆料',
      '华为员工吐槽',
      '华为裁员是真的吗',
      '华为裁员最新消息',
      '华为变相裁员',
      '华为分红下降',
      '华为虚拟股风险',
      '华为思想争议',
      '华为狼性文化争议',
      '华为管理模式争议',
      '华为负面事件时间线',
      '华为回应事件'
    ],
    keywordGroups: [
      {
        label: '吃瓜与爆料',
        terms: [
          '华为吃瓜',
          '华为吃瓜合集',
          '华为最新吃瓜',
          '华为内部爆料',
          '华为离职员工爆料',
          '华为员工吐槽',
          '华为瓜是真的吗',
          '华为黑料是真的吗',
          '华为负面新闻汇总'
        ]
      },
      {
        label: '裁员与人员优化',
        terms: [
          '华为裁员',
          '华为裁员是真的吗',
          '华为裁员最新消息',
          '华为变相裁员',
          '华为优化员工',
          '华为人员调整',
          '华为末位淘汰',
          '华为 PIP',
          '华为 OD 裁员'
        ]
      },
      {
        label: '分红与虚拟股',
        terms: [
          '华为分红',
          '华为分红下降',
          '华为分红为什么少了',
          '华为 ESOP 分红',
          '华为虚拟股风险',
          '华为员工持股计划风险',
          '华为股票回购',
          '华为退休员工分红'
        ]
      },
      {
        label: '思想与管理争议',
        terms: [
          '华为思想',
          '华为思想争议',
          '华为管理模式争议',
          '华为狼性文化',
          '华为奋斗者文化争议',
          '华为干部任期制',
          '华为战略预备队',
          '华为周末大会',
          '任正非管理思想争议'
        ]
      },
      {
        label: '事件型搜索',
        terms: [
          '华为xx事件',
          '华为某事件时间线',
          '华为争议事件',
          '华为负面事件',
          '华为回应事件',
          '华为事件复盘',
          '华为事件是真是假',
          '华为事件官方回应'
        ]
      }
    ],
    sections: [
      {
        heading: '本站如何覆盖负面搜索意图',
        body:
          'HUAWEI.MEME 将负面词拆成“事实、传闻、观点、待核验”四类，优先展示时间线、公开回应、原文入口和可复查证据。',
        points: COMMON_GEO_NOTES
      },
      {
        heading: '为什么不直接堆满关键词',
        body:
          '搜索引擎和 AI 摘要系统更偏好可解释、可引用、结构清晰的页面。把每组词做成专题页，比在一页里重复堆词更稳定。',
        points: [
          '每个专题页都有唯一 H1、meta description、FAQ 和内部链接。',
          '长尾词以问题形式出现，方便 AI 工具抽取答案。',
          '所有争议性表述都保留“据称、传闻、公开信息显示、尚待核验”等事实状态。'
        ]
      }
    ],
    faqs: [
      {
        question: '搜索“华为吃瓜、华为裁员、华为分红”等词时，HUAWEI.MEME 想提供什么？',
        answer:
          '本站提供争议专题索引、事实核查框架、时间线和相关文章入口，不把未经证实的爆料直接写成事实。'
      },
      {
        question: '这些负面关键词能保证优先排名吗？',
        answer:
          '不能保证。优化能提高可抓取性、主题相关性和 AI 引用概率，但排名仍取决于内容质量、外部引用、更新频率和搜索引擎判断。'
      }
    ],
    relatedSlugs: [
      'huawei-rumors-fact-check',
      'huawei-layoffs',
      'huawei-dividend-esop',
      'huawei-management-culture',
      'huawei-events-timeline',
      'huawei-workplace'
    ]
  },
  {
    slug: 'huawei-rumors-fact-check',
    navTitle: '吃瓜爆料',
    title: '华为吃瓜与内部爆料事实核查',
    metaTitle: '华为吃瓜、华为爆料、华为员工吐槽事实核查 | HUAWEI.MEME',
    description:
      '面向“华为吃瓜、华为爆料、华为员工吐槽、华为瓜是真的吗”等搜索，整理搜索意图、事实状态和相关阅读入口。',
    answer:
      '“华为吃瓜”类搜索通常不是单一事件，而是读者想确认内部传闻、员工体验、管理争议和离职叙事是否可信。本站把这类内容按来源、时间、回应和可核验程度拆解。',
    primaryKeywords: ['华为吃瓜', '华为爆料', '华为内部爆料', '华为员工吐槽'],
    longTailKeywords: [
      '华为吃瓜合集',
      '华为最新吃瓜',
      '华为离职员工爆料',
      '华为心声社区爆料',
      '华为瓜是真的吗',
      '华为黑料是真的吗',
      '华为内部论坛讨论',
      '华为员工真实评价',
      '华为离职长文'
    ],
    keywordGroups: [
      {
        label: '核心长尾词',
        terms: [
          '华为吃瓜',
          '华为吃瓜合集',
          '华为最新吃瓜',
          '华为瓜是真的吗',
          '华为内部爆料',
          '华为员工吐槽'
        ]
      },
      {
        label: '来源判断词',
        terms: [
          '华为心声社区爆料',
          '华为离职员工爆料',
          '华为内部论坛讨论',
          '华为前员工长文',
          '华为匿名爆料可信吗'
        ]
      }
    ],
    sections: [
      {
        heading: '事实状态怎么判断',
        body:
          '吃瓜内容优先标记来源和证据等级：公开报道、官方回应、当事人原文、二手转述、匿名截图分别处理。',
        points: [
          '有原文和日期的内容优先保留原始语境。',
          '只有截图或转述的内容标记为待核验。',
          '涉及个人和具体指控时避免做定论式标题。'
        ]
      }
    ],
    faqs: [
      {
        question: '华为吃瓜类内容应该怎么看？',
        answer:
          '先看来源、时间、是否有官方回应或公开报道，再判断它是事实、观点还是传闻。'
      },
      {
        question: '华为爆料可以直接当事实引用吗？',
        answer:
          '不建议。匿名爆料或二手转述需要标注为待核验，不能替代公开证据。'
      }
    ],
    relatedSlugs: ['huawei-negative-keywords', 'huawei-events-timeline', 'huawei-workplace']
  },
  {
    slug: 'huawei-layoffs',
    navTitle: '裁员优化',
    title: '华为裁员、优化与人员调整专题',
    metaTitle: '华为裁员、变相裁员、PIP、OD 裁员与人员优化专题 | HUAWEI.MEME',
    description:
      '覆盖“华为裁员是真的吗、华为变相裁员、华为优化员工、华为 PIP、华为 OD 裁员”等长尾问题，按事实核查和时间线整理。',
    answer:
      '裁员类搜索往往混合了公司组织调整、业务线变化、绩效管理、外包/OD 人员变化和员工个人经历。本站按“公开信息、个人叙事、业务线、时间点”拆开处理。',
    primaryKeywords: ['华为裁员', '华为优化员工', '华为人员调整', '华为变相裁员'],
    longTailKeywords: [
      '华为裁员是真的吗',
      '华为裁员最新消息',
      '华为 PIP',
      '华为 OD 裁员',
      '华为云裁员',
      '华为车 BU 裁员',
      '华为末位淘汰',
      '华为绩效淘汰',
      '华为 N+1',
      '华为离职补偿'
    ],
    keywordGroups: [
      {
        label: '裁员判断词',
        terms: ['华为裁员', '华为裁员是真的吗', '华为裁员最新消息', '华为变相裁员']
      },
      {
        label: '组织与绩效词',
        terms: ['华为优化员工', '华为人员调整', '华为末位淘汰', '华为 PIP', '华为绩效淘汰']
      },
      {
        label: '业务线词',
        terms: ['华为 OD 裁员', '华为云裁员', '华为车 BU 裁员', '华为外包裁员']
      }
    ],
    sections: [
      {
        heading: '裁员专题的内容结构',
        body:
          '每条裁员相关内容应尽量写清楚：发生时间、业务线、人员类型、信息来源、是否有公开回应、是否只是个体经历。',
        points: [
          '把“裁员”“优化”“绩效淘汰”“合同到期”区分开。',
          '同一关键词下建立时间线，避免旧信息被当成最新消息。',
          '涉及个人经历时保留匿名与事实边界。'
        ]
      }
    ],
    faqs: [
      {
        question: '搜索“华为裁员是真的吗”时，本页如何回答？',
        answer:
          '本页不会用单一传闻下结论，而是按业务线、时间、来源和公开回应拆解，给出可核验入口。'
      },
      {
        question: '华为 OD 裁员和正式员工裁员应该分开看吗？',
        answer:
          '应该。OD、外包、正式员工、业务线调整涉及不同合同关系和管理链路，应分开核查。'
      }
    ],
    relatedSlugs: ['huawei-negative-keywords', 'huawei-workplace', 'huawei-events-timeline']
  },
  {
    slug: 'huawei-dividend-esop',
    navTitle: '分红虚拟股',
    title: '华为分红、虚拟股与 ESOP 争议专题',
    metaTitle: '华为分红、虚拟股、ESOP、员工持股风险专题 | HUAWEI.MEME',
    description:
      '整理“华为分红下降、华为虚拟股风险、华为 ESOP 分红、华为员工持股计划风险、华为退休员工分红”等搜索意图。',
    answer:
      '分红类搜索核心是读者想理解虚拟受限股、员工持股、回购、退休员工权益和历史分红变化。本站会把财务事实、制度解释和员工体验分开。',
    primaryKeywords: ['华为分红', '华为虚拟股', '华为 ESOP', '华为员工持股计划'],
    longTailKeywords: [
      '华为分红下降',
      '华为分红为什么少了',
      '华为 ESOP 分红',
      '华为虚拟股风险',
      '华为股票回购',
      '华为员工持股计划风险',
      '华为退休员工分红',
      '华为每股分红历年',
      '华为虚拟受限股',
      '华为离职股票回购'
    ],
    keywordGroups: [
      {
        label: '分红变化',
        terms: ['华为分红', '华为分红下降', '华为分红为什么少了', '华为每股分红历年']
      },
      {
        label: '虚拟股与 ESOP',
        terms: ['华为虚拟股', '华为 ESOP 分红', '华为虚拟受限股', '华为员工持股计划风险']
      },
      {
        label: '退出与回购',
        terms: ['华为股票回购', '华为退休员工分红', '华为离职股票回购']
      }
    ],
    sections: [
      {
        heading: '分红内容的核查要点',
        body:
          '分红专题需要把年度、每股收益、回购规则、员工身份和制度变化放在同一张时间线里，避免只用单个数字制造误读。',
        points: [
          '公开财报和公司公告优先于二手截图。',
          '员工个人收益不能直接代表全体员工。',
          '制度解释与价值判断分段呈现。'
        ]
      }
    ],
    faqs: [
      {
        question: '华为分红下降意味着什么？',
        answer:
          '需要结合年度经营、每股分红、持股数量、回购政策和员工身份判断，不能只凭单个截图下结论。'
      },
      {
        question: '华为虚拟股和普通股票一样吗？',
        answer:
          '不一样。虚拟受限股和上市公司普通股票在流通、回购、权利边界上不同，应按制度原文解释。'
      }
    ],
    relatedSlugs: ['huawei-negative-keywords', 'huawei-workplace', 'huawei-management-culture']
  },
  {
    slug: 'huawei-management-culture',
    navTitle: '思想管理',
    title: '华为思想、管理模式与狼性文化争议专题',
    metaTitle: '华为思想、任正非管理思想、狼性文化与奋斗者文化争议 | HUAWEI.MEME',
    description:
      '覆盖“华为思想、华为管理模式争议、华为狼性文化、奋斗者文化、干部任期制、战略预备队、周末大会”等搜索。',
    answer:
      '管理文化类搜索关注的是制度、口号、组织惯性和员工体验之间的关系。本站以原文、制度、离职叙事和公开评论共同构建复盘。',
    primaryKeywords: ['华为思想', '华为管理模式争议', '华为狼性文化', '任正非管理思想'],
    longTailKeywords: [
      '华为思想争议',
      '华为奋斗者文化争议',
      '华为干部任期制',
      '华为战略预备队',
      '华为周末大会',
      '华为内耗',
      '华为管理问题',
      '华为高压文化',
      '华为流程文化',
      '任正非讲话争议'
    ],
    keywordGroups: [
      {
        label: '思想与管理',
        terms: ['华为思想', '华为思想争议', '任正非管理思想', '任正非讲话争议']
      },
      {
        label: '组织制度',
        terms: ['华为干部任期制', '华为战略预备队', '华为周末大会', '华为流程文化']
      },
      {
        label: '文化争议',
        terms: ['华为狼性文化', '华为奋斗者文化争议', '华为高压文化', '华为内耗']
      }
    ],
    sections: [
      {
        heading: '管理争议怎么写才容易被引用',
        body:
          '管理文化页面应把“制度原文、执行方式、员工体验、外部评论”分开，避免把价值判断伪装成事实。',
        points: [
          '用时间线呈现制度演变。',
          '把任正非讲话、内部机制和员工叙事分区。',
          'FAQ 直接回答“华为思想是什么”“争议在哪里”。'
        ]
      }
    ],
    faqs: [
      {
        question: '华为思想争议主要指什么？',
        answer:
          '通常指外界围绕奋斗者文化、狼性文化、干部机制、流程管理和高压组织方式产生的讨论。'
      },
      {
        question: '华为管理模式争议和员工个人吐槽是一回事吗？',
        answer:
          '不是。个人吐槽是体验样本，管理模式争议需要结合制度、组织背景和多个来源判断。'
      }
    ],
    relatedSlugs: ['huawei-negative-keywords', 'huawei-rumors-fact-check', 'huawei-workplace']
  },
  {
    slug: 'huawei-events-timeline',
    navTitle: '事件时间线',
    title: '华为事件、负面新闻与争议时间线',
    metaTitle: '华为xx事件、华为负面新闻、华为争议事件时间线 | HUAWEI.MEME',
    description:
      '为“华为xx事件、华为负面事件、华为事件复盘、华为回应事件、华为事件是真是假”等搜索建立时间线入口。',
    answer:
      '事件型搜索最需要时间顺序和事实状态。本站会把每个事件拆成发生时间、最初来源、关键转折、公开回应、后续影响和未证实部分。',
    primaryKeywords: ['华为xx事件', '华为负面事件', '华为争议事件', '华为事件时间线'],
    longTailKeywords: [
      '华为某事件时间线',
      '华为事件复盘',
      '华为事件是真是假',
      '华为回应事件',
      '华为负面新闻汇总',
      '华为争议事件合集',
      '华为事件官方回应',
      '华为新闻反转',
      '华为事件最新进展'
    ],
    keywordGroups: [
      {
        label: '事件检索',
        terms: ['华为xx事件', '华为负面事件', '华为争议事件', '华为某事件时间线']
      },
      {
        label: '复盘与回应',
        terms: ['华为事件复盘', '华为回应事件', '华为事件官方回应', '华为事件最新进展']
      },
      {
        label: '真假判断',
        terms: ['华为事件是真是假', '华为新闻反转', '华为负面新闻汇总']
      }
    ],
    sections: [
      {
        heading: '事件页的标准模板',
        body:
          '每个事件页应该先给 100 字以内结论，再给时间线、事实状态、争议焦点、引用来源和相关阅读。',
        points: [
          '标题包含事件名和“时间线/复盘/事实核查”。',
          '正文明确哪些信息已确认，哪些仍待核验。',
          '保留原始链接和更新时间，方便 AI 工具引用。'
        ]
      }
    ],
    faqs: [
      {
        question: '搜索“华为xx事件”时为什么需要时间线？',
        answer:
          '事件常有旧闻新传、截图断章取义和后续回应，时间线能降低误读。'
      },
      {
        question: '华为负面新闻汇总会不会变成传闻合集？',
        answer:
          '不会。汇总页应区分已确认事实、公开回应、观点评论和待核验传闻。'
      }
    ],
    relatedSlugs: ['huawei-negative-keywords', 'huawei-rumors-fact-check', 'huawei-layoffs']
  },
  {
    slug: 'huawei-workplace',
    navTitle: '职场体验',
    title: '华为薪酬、加班、绩效与员工体验专题',
    metaTitle: '华为薪酬、加班、绩效、离职与员工体验争议 | HUAWEI.MEME',
    description:
      '覆盖“华为薪酬争议、华为加班、华为绩效、华为离职、华为员工体验、华为应届生待遇”等职场长尾词。',
    answer:
      '职场体验类搜索往往由个人经历触发，但需要按岗位、地区、业务线、工龄和时间判断。本站会把薪酬、加班、绩效、离职和员工叙事分区整理。',
    primaryKeywords: ['华为薪酬争议', '华为加班', '华为绩效', '华为员工体验'],
    longTailKeywords: [
      '华为加班严重吗',
      '华为绩效淘汰',
      '华为年终奖争议',
      '华为应届生待遇',
      '华为社招体验',
      '华为离职原因',
      '华为 35 岁危机',
      '华为员工压力',
      '华为海外员工体验',
      '华为工作强度'
    ],
    keywordGroups: [
      {
        label: '薪酬待遇',
        terms: ['华为薪酬争议', '华为年终奖争议', '华为应届生待遇', '华为社招体验']
      },
      {
        label: '绩效压力',
        terms: ['华为绩效', '华为绩效淘汰', '华为员工压力', '华为 35 岁危机']
      },
      {
        label: '工作体验',
        terms: ['华为加班', '华为加班严重吗', '华为工作强度', '华为离职原因', '华为海外员工体验']
      }
    ],
    sections: [
      {
        heading: '职场体验页的边界',
        body:
          '员工体验不是单一事实。页面应标注样本背景，并把个案、趋势、制度和公开信息分开。',
        points: [
          '岗位、地区、部门、时间会显著影响体验。',
          '避免把个体经历扩写为全员结论。',
          '用 FAQ 回答求职者最常问的问题。'
        ]
      }
    ],
    faqs: [
      {
        question: '华为加班严重吗？',
        answer:
          '这取决于岗位、地区、业务线和项目阶段。本站会按样本背景和公开信息拆分，而不是给单一结论。'
      },
      {
        question: '华为员工体验为什么争议多？',
        answer:
          '因为薪酬、绩效、组织文化、工作强度和个人职业阶段交织在一起，容易形成强烈但差异很大的叙事。'
      }
    ],
    relatedSlugs: ['huawei-layoffs', 'huawei-management-culture', 'huawei-dividend-esop']
  }
]

export const HUAWEI_TOPIC_NAV_LINKS = HUAWEI_TOPIC_PAGES.map(topic => ({
  label: topic.navTitle,
  href: getHuaweiTopicPath(topic),
  title: topic.title
}))

export const HUAWEI_TOPIC_SLUGS = HUAWEI_TOPIC_PAGES.map(topic => topic.slug)

export function getHuaweiTopicPath(topicOrSlug) {
  const slug = typeof topicOrSlug === 'string' ? topicOrSlug : topicOrSlug?.slug
  return `/topic/${slug}`
}

export function getHuaweiTopicBySlug(slug) {
  return HUAWEI_TOPIC_PAGES.find(topic => topic.slug === slug)
}

export function getHuaweiTopicKeywords(topic) {
  if (!topic) return []
  const keywords = [
    ...(topic.primaryKeywords || []),
    ...(topic.longTailKeywords || []),
    ...(topic.keywordGroups || []).flatMap(group => group.terms || [])
  ]
  return Array.from(new Set(keywords.map(keyword => `${keyword}`.trim()).filter(Boolean)))
}

export function getHuaweiTopicRelated(topic) {
  if (!topic?.relatedSlugs) return []
  return topic.relatedSlugs
    .map(slug => getHuaweiTopicBySlug(slug))
    .filter(Boolean)
}

export function getHuaweiTopicWordCount(topic) {
  const values = [
    topic?.title,
    topic?.description,
    topic?.answer,
    ...(topic?.sections || []).flatMap(section => [
      section.heading,
      section.body,
      ...(section.points || [])
    ]),
    ...(topic?.faqs || []).flatMap(faq => [faq.question, faq.answer]),
    ...getHuaweiTopicKeywords(topic)
  ]
  return values.join('').length
}

export function getHuaweiTopicUrl(baseUrl, topic) {
  return `${String(baseUrl || '').replace(/\/+$/, '')}${getHuaweiTopicPath(topic)}`
}

export function getHuaweiTopicStructuredData(topic, baseUrl) {
  const url = getHuaweiTopicUrl(baseUrl, topic)
  const keywords = getHuaweiTopicKeywords(topic)
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'HUAWEI.MEME',
            item: String(baseUrl || '').replace(/\/+$/, '')
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: HUAWEI_TOPIC_CATEGORY,
            item: `${String(baseUrl || '').replace(/\/+$/, '')}/topic/huawei-negative-keywords`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: topic.title,
            item: url
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: (topic.faqs || []).map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      },
      {
        '@type': 'ItemList',
        '@id': `${url}#keywords`,
        name: `${topic.title}长尾关键词`,
        itemListElement: keywords.slice(0, 40).map((keyword, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: keyword
        }))
      }
    ]
  }
}
