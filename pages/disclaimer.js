import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { fetchGlobalAllData } from '@/lib/db/SiteDataApi'

const LAST_UPDATED = '2026-07-01'

const disclaimerSections = [
  {
    title: '一、站点性质与非关联声明',
    body: [
      'HUAWEI.MEME 是一个独立运营的信息整理、资料索引、评论与研究性质网站。本网站并非华为技术有限公司、其关联公司、员工、代理人或官方授权渠道，也不代表上述主体发布声明、提供服务或作出背书。',
      '本网站中出现的“华为”“HUAWEI”以及相关公司、产品、人物或项目名称，仅用于指称、识别、评论、检索和资料归档目的，不表示本网站对相关商标、字号、商业标识或官方身份享有任何权利。'
    ]
  },
  {
    title: '二、内容来源与使用目的',
    body: [
      '本网站可能收录、引用、摘编、链接或评论来自公开网络、公开媒体、公开社交平台、公开文档、搜索结果、历史存档及其他可公开访问渠道的信息。相关内容用于公共议题观察、事实线索整理、新闻评论、研究分析、资料保存和读者检索。',
      '本网站尊重原作者、发布者、权利人及信息来源。能够识别来源的内容，将尽力保留来源提示、作者信息、发布时间或原始链接；若信息来源存在遗漏、错误或权利归属争议，欢迎权利人或知情人士提出更正。'
    ]
  },
  {
    title: '三、知识产权与商标声明',
    body: [
      '除本网站原创内容外，文章、图片、截图、商标、标识、公司名称、产品名称、人物姓名及其他受法律保护的内容，其知识产权和相关权益归原权利人所有。',
      '本网站对第三方内容的引用、摘录、缩略展示或链接，目的在于说明事实背景、进行评论分析、辅助检索或保存公共讨论语境，并无冒充官方、混淆来源、损害商誉或替代原作品市场的意图。',
      '如果任何内容超出了合理引用、必要展示或公共讨论所需范围，本网站愿意在收到有效通知后及时采取删除、遮蔽、补充署名、增加来源链接、调整展示方式或其他合理措施。'
    ]
  },
  {
    title: '四、事实准确性、时效性与观点边界',
    body: [
      '本网站尽力基于公开资料进行整理，但公开信息可能存在不完整、过期、误传、上下文缺失或后续变化。本网站不保证所有内容在任何时间均为完整、准确、最新或适用于特定目的。',
      '本网站中的评论、标题、专题归纳、关键词和编辑性表达，仅代表站点编辑或相应作者基于公开资料作出的观察和意见，不当然构成对事实的最终认定，也不构成法律、投资、职业、商业或其他专业建议。',
      '涉及企业、个人、劳动关系、管理争议、知识产权或其他法律问题的内容，读者应结合原始资料、官方回应、司法或行政机关公开文件以及专业人士意见独立判断。'
    ]
  },
  {
    title: '五、第三方链接与用户生成内容',
    body: [
      '本网站可能包含指向第三方网站、平台、文档或媒体内容的链接。第三方内容由其发布者或运营者负责，本网站不对第三方页面的真实性、合法性、持续可访问性、安全性或后续变更承担责任。',
      '如本网站未来开放评论、投稿、留言、镜像、聚合或其他用户生成内容功能，相关内容仅代表发布者本人观点。发布者应确保其内容不侵犯他人合法权益，不含违法、诽谤、侮辱、隐私泄露、商业秘密泄露或恶意误导信息。'
    ]
  },
  {
    title: '六、权利人通知与处理机制',
    body: [
      '如果您认为本网站任何内容侵犯了您的著作权、商标权、名誉权、隐私权、商业秘密或其他合法权益，请通过网站页脚展示的公开联系方式、域名所有者可达渠道或本网站关联项目页联系维护者，并尽量提供以下材料：',
      '1. 权利人或代理人的姓名、单位名称、联系方式及授权证明；2. 能够证明权利归属或合法权益受影响的材料；3. 被投诉内容的具体 URL、标题、截图或定位说明；4. 希望采取的处理方式，例如删除、遮蔽、补充署名、添加来源链接、更正事实或调整表达；5. 您对通知内容真实性、准确性和合法性的承诺。',
      '本网站收到完整、有效的通知后，将在合理期限内进行复核，并根据具体情况采取删除、断链、遮蔽、补充说明、更正来源、调整关键词、保留争议标注或其他合理措施。对明显恶意、虚假、材料不足或无法核实的请求，本网站保留要求补充材料或不予处理的权利。'
    ]
  },
  {
    title: '七、责任限制',
    body: [
      '在法律允许的范围内，本网站不因读者基于本站内容作出的判断、传播、引用、商业决策、劳动争议处理、媒体报道或其他行为承担直接或间接责任。',
      '本网站可能因资料更新、权利人通知、技术维护、合规要求或编辑判断，随时修改、删除、迁移、隐藏或停止展示部分内容，而无需另行通知。'
    ]
  },
  {
    title: '八、声明更新',
    body: [
      `本免责声明最近更新于 ${LAST_UPDATED}。本网站可根据运营情况、法律法规变化、平台规则、权利人反馈或内容管理需要，不定期修订本声明。修订后的声明一经发布即对本网站内容与访问行为适用。`
    ]
  }
]

const DisclaimerPage = () => {
  return (
    <article className='mx-auto w-full max-w-4xl rounded-lg border border-gray-200 bg-white px-5 py-6 text-gray-900 shadow-sm dark:border-gray-800 dark:bg-hexo-black-gray dark:text-gray-100 md:px-8 md:py-8'>
      <header className='border-b border-gray-200 pb-6 dark:border-gray-800'>
        <div className='mb-4 flex flex-wrap gap-2 text-xs font-medium uppercase tracking-wide text-red-700 dark:text-red-300'>
          <span>HUAWEI.MEME</span>
          <span>Disclaimer</span>
          <span>Updated {LAST_UPDATED}</span>
        </div>
        <h1 className='text-3xl font-bold leading-tight text-gray-950 dark:text-white md:text-4xl'>
          免责声明
        </h1>
        <p className='mt-4 text-base leading-8 text-gray-700 dark:text-gray-300'>
          本声明用于说明 HUAWEI.MEME 对公开资料、第三方内容、知识产权、商标标识、事实准确性、读者使用风险以及权利人通知删除机制的基本立场。访问、浏览、引用或使用本网站，即视为您已经阅读并理解本声明。
        </p>
        <p className='mt-4 rounded border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-7 text-amber-900 dark:border-amber-900/60 dark:bg-amber-950/30 dark:text-amber-100'>
          重要提示：本声明为一般性网站合规与风险提示，不构成正式法律意见。若您面临具体争议、投诉、诉讼、行政调查或权利主张，请咨询具有相应资质的专业律师。
        </p>
      </header>

      <div className='mt-8 space-y-8'>
        {disclaimerSections.map(section => (
          <section key={section.title} className='space-y-3'>
            <h2 className='text-2xl font-semibold text-gray-950 dark:text-white'>
              {section.title}
            </h2>
            {section.body.map(paragraph => (
              <p
                key={paragraph}
                className='leading-8 text-gray-700 dark:text-gray-300'>
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </article>
  )
}

export async function getStaticProps({ locale }) {
  const props = (await fetchGlobalAllData({ from: 'disclaimer', locale })) || {}

  return {
    props,
    revalidate: process.env.EXPORT
      ? undefined
      : siteConfig(
          'NEXT_REVALIDATE_SECOND',
          BLOG.NEXT_REVALIDATE_SECOND,
          props.NOTION_CONFIG
        )
  }
}

export default DisclaimerPage
