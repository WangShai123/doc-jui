import { t } from 'vanilla-signal-i18n';
const locales = {
  en: {
    activeName: 'Active state',
    alertMood: 'alert',
    auroraBest: 'Status pages, data panels, and tool home pages.',
    auroraDes:
      'Combines information and success cues, suited to tool pages, status panels, and product home pages.',
    auroraName: 'Aurora',
    balancedMood: 'balanced',
    bestFor: 'Best for:',
    bgMeta: 'page base',
    blueBest: 'Information messages, charts, and action confirmations.',
    blueDes:
      'Strongly informational, suited to data, status, and technical expression.',
    blueName: 'Blue',
    borderDefaultName: 'Border default',
    borderStrongName: 'Border strong',
    borderSubtleName: 'Border subtle',
    calmMood: 'calm',
    codeMeta: 'code / snippet',
    coolMood: 'cool',
    dangerBest: 'Dangerous actions, error messages, and terminal states.',
    dangerDes: 'Delete actions, failures, and blocking errors.',
    dangerName: 'Danger',
    defaultTone: 'default',
    demoActionBest:
      'Best for primary buttons, core CTAs, and key navigation.',
    demoActionDes:
      'Use <span>--tone-solid</span> for strong contrast with <span>--tone-fg</span> for readability. Wrap it in <span>--ui-surface-raised</span> so actions feel clickable.',
    demoActionName: 'Primary Action Area',
    demoStateBest:
      'Best for prompting users to review, add information, or confirm risk.',
    demoStateDes:
      'Use subtle backgrounds for semantics instead of large solid blocks. State colors work best on titles, borders, icons, and local emphasis.',
    demoStateName: 'Status Notice',
    demoSurfaceName: 'Surface Hierarchy',
    deepMood: 'deep',
    duskBest: 'Dark home pages, night mode, and brand covers.',
    duskDes:
      'Better for nighttime or high-contrast scenes, with a steadier content silhouette.',
    duskName: 'Dusk',
    emberBest: 'Notice pages, campaign pages, and strong CTAs.',
    emberDes:
      'Attention-oriented, suited to emphasis, alerts, and promotional moments.',
    emberName: 'Ember',
    forestBest: 'Reading pages, knowledge pages, and dashboard home pages.',
    forestDes:
      'Natural and stable, suited to long-form reading and low-distraction interfaces.',
    forestName: 'Forest',
    freshMood: 'fresh',
    goldBest: 'Membership, awards, and exclusive benefits.',
    goldDes: 'Conveys rewards, achievement, and premium value.',
    goldGradBest: 'Membership pages, award pages, and benefit cards.',
    goldGradDes:
      'Rewarding and premium, suited to memberships, achievements, and exclusive benefits.',
    goldName: 'Gold',
    grassBest: 'Growth metrics, success states, and health data.',
    grassDes: 'Suggests growth, progress, and positive feedback.',
    grassName: 'Grass',
    grayBest: 'Light branding, dashboards, and low-distraction labels.',
    grayDes:
      'The safest neutral theme, suitable for interface chrome and admin systems.',
    grayName: 'Gray',
    hoverName: 'Hover state',
    indigoBest:
      'Default primary buttons, navigation, and core interactions.',
    indigoDes:
      'A highly versatile brand color, suitable as the default primary color.',
    indigoName: 'Indigo',
    infoBest: 'Help text, product explanations, and status notices.',
    infoDes: 'Explanation, knowledge, and state synchronization.',
    infoName: 'Info',
    limeBest: 'Highlights, data emphasis, and campaign notices.',
    limeDes:
      'High-visibility color for content that needs quick attention.',
    limeName: 'Lime',
    meadowBest: 'Health products, growth pages, and environmental themes.',
    meadowDes:
      'A lighter green palette, suited to health, growth, and natural styling.',
    meadowName: 'Meadow',
    mintBest: 'Health, care, and lightweight technology.',
    mintDes:
      'Light and clean, suited to fresh products, health, and lightweight information.',
    mintName: 'Mint',
    mutedBgName: 'Muted background',
    oceanBest: 'Technical pages, chart sections, and content-heavy pages.',
    oceanDes:
      'More rational and technical, suited to immersive content, charts, and technical products.',
    oceanName: 'Ocean',
    oliveBest: 'Reading, content-heavy dashboards, and natural themes.',
    oliveDes:
      'Natural and editorial, suited to knowledge, lifestyle, or environmental contexts.',
    oliveName: 'Olive',
    orangeBest: 'Promotions, secondary CTAs, and warm notices.',
    orangeDes:
      'Energetic, approachable, and warm, suited to promotions or action guidance.',
    orangeName: 'Orange',
    overlayMeta: 'modal backdrop',
    overlayName: 'Overlay',
    pinkBest: 'Content covers, campaign themes, and visual labels.',
    pinkDes:
      'Light and stylish, suited to creative or softer visual contexts.',
    pinkName: 'Pink',
    premiumMood: 'premium',
    raisedMeta: 'card layer',
    raisedName: 'Raised surface',
    rubyBest: 'Campaigns, expressive visuals, and emphasized cards.',
    rubyDes:
      'More brand-oriented than tomato, useful for campaigns, alerts, or expressive visuals.',
    rubyName: 'Ruby',
    shadeTone: 'shade',
    softBgName: 'Soft background',
    successBest: 'Successful results, passing states, and health metrics.',
    successDes: 'Saved, complete, healthy, or growing states.',
    successName: 'Success',
    sunriseBest: 'Hero sections, welcome pages, and campaign headers.',
    sunriseDes:
      'A warm branded opening, suited to hero sections, welcome screens, and primary CTA backgrounds.',
    sunriseName: 'Sunrise',
    surfaceMeta: 'main content',
    surfaceMutedName: 'Surface muted',
    surfaceName: 'Surface',
    surfaceSubtleName: 'Surface subtle',
    tagBackground: 'background',
    tagBorder: 'border',
    tagColor: 'color',
    tagElevated: 'elevated',
    tagInteraction: 'interaction',
    tagLayer: 'layer',
    tagOverlay: 'overlay',
    tagSurface: 'surface',
    tagText: 'text',
    tagUtility: 'utility',
    tealBest: 'Data tools, status messages, and technical UIs.',
    tealDes:
      'Clean, rational, and technical, suited to product data or tooling interfaces.',
    tealName: 'Teal',
    textPrimaryName: 'Text primary',
    tintTone: 'tint',
    tomatoBest: 'Delete actions, failures, and danger alerts.',
    tomatoDes:
      'Direct, clear, and expressive, suited to errors and destructive actions.',
    tomatoName: 'Tomato',
    uiBgDes:
      'The outermost page background. Keep it quiet so it does not compete with the theme color.',
    uiBgBest: 'Page shells, global backgrounds, and hero base layers.',
    uiBgName: 'App canvas',
    uiBorderBest: 'Inputs, cards, and section containers.',
    uiBorderDes:
      'The default border for most form controls and card edges.',
    uiBorderStrongBest:
      'Selected areas, emphasized cards, and clear separation.',
    uiBorderStrongDes:
      'Use when a clearer outline is needed. Avoid making every layer this strong.',
    uiBorderSubtleBest:
      'Subtle dividers, card outlines, and supporting surfaces.',
    uiBorderSubtleDes:
      'The lightest border, for separating layers without a strong outline.',
    uiHoverBest: 'Interactive lists, button hovers, and row hover states.',
    uiHoverDes:
      'Light feedback for hover states without adding heavy color.',
    uiMutedBest: 'Nested cards, lightweight containers, and list items.',
    uiMutedDes:
      'More visible than subtle, for a stronger layer that still stays neutral.',
    uiActiveBest:
      'Pressed states, selected states, and transient focus feedback.',
    uiActiveDes:
      'Short-lived feedback for pressed or active states, slightly stronger than hover.',
    uiOverlayBest: 'Modals, drawers, and global overlays.',
    uiOverlayDes:
      'A full-page overlay surface that reduces background distraction.',
    uiRaisedBest: 'Popovers, emphasized cards, and floating containers.',
    uiRaisedDes:
      'Highlights cards, popovers, or content containers on a higher layer.',
    uiSoftBest: 'Content sections, secondary blocks, and subtle dividers.',
    uiSoftDes:
      'One level above the main background, useful for sectioning and light grouping.',
    uiSurfaceBest: 'Cards, panels, and form sections.',
    uiSurfaceDes:
      'The standard content surface, commonly used for cards and panels.',
    uiSurfaceMutedBest:
      'Nested modules, item backgrounds, and supporting containers.',
    uiSurfaceMutedDes:
      'Adds a stable background for deeper nested content.',
    uiSurfaceSubtleBest:
      'Secondary cards, information areas, and lightly outlined panels.',
    uiSurfaceSubtleDes:
      'Close to the main surface, but useful for a slight hierarchy shift.',
    uiTextBest: 'Headings, body text, and important information.',
    uiTextDes:
      'Primary text color for body copy and the strongest information layer.',
    uiTooltipBest: 'Tooltips, lightweight help text, and floating hints.',
    uiTooltipDes:
      'Tooltip background. Keep it aligned with the neutral dark base instead of shifting blue.',
    uiTooltipName: 'Tooltip bg',
    violetBest: 'Creative products, inspiration pages, and brand themes.',
    violetDes:
      'Creative and slightly mysterious, suited to inspiration, product capability, or premium styling.',
    violetName: 'Violet',
    warmMood: 'warm',
    warningBest: 'Pending confirmation, risk notices, and caution notes.',
    warningDes: 'Needs attention, but is not necessarily an error.',
    warningName: 'Warning',
    variantBorder: 'border',
    variantSoft: 'soft',
    variantSolid: 'solid',
    variantSubtle: 'subtle',
    variantWarning: 'warning',
    stackBg: 'bg',
    stackCode: 'code',
    stackOverlay: 'overlay',
    stackRaised: 'raised',
    stackSurface: 'surface',
    yellowBest: 'Reminders, pending items, and caution notes.',
    yellowDes:
      'The clearest warning and attention color, useful when users should pause.',
    yellowName: 'Yellow',
  },
  zh: {
    activeName: '激活状态',
    alertMood: '提醒',
    auroraBest: '状态页、数据面板、工具首页。',
    auroraDes: '信息与成功感混合，适合工具页、状态面板和产品首页。',
    auroraName: '极光',
    balancedMood: '平衡',
    bestFor: '适合:',
    bgMeta: '页面基础层',
    blueBest: '信息提示、图表、操作确认。',
    blueDes: '信息感最强，适合数据、状态、技术类表达。',
    blueName: '蓝色',
    borderDefaultName: '默认边框',
    borderStrongName: '强边框',
    borderSubtleName: '浅边框',
    calmMood: '沉静',
    codeMeta: '代码 / 片段',
    coolMood: '冷静',
    dangerBest: '危险操作、错误提示、终止状态。',
    dangerDes: '删除、失败、阻断性错误。',
    dangerName: '危险',
    defaultTone: '默认',
    demoActionBest: '适合：主按钮、核心 CTA、关键导航。',
    demoActionDes:
      '用 <span>--tone-solid</span> 做强对比，搭配 <span>--tone-fg</span> 保证可读性，外层用 <span>--ui-surface-raised</span> 让按钮更像可点击的动作层。',
    demoActionName: '主操作区',
    demoStateBest: '适合：提醒用户检查、补充信息或确认风险。',
    demoStateDes:
      '用浅背景承载语义，避免整块纯色压住内容。状态色更适合做标题、边框、图标和局部强调。',
    demoStateName: '状态提醒',
    demoSurfaceName: '表面层级',
    deepMood: '深色',
    duskBest: '深色首页、夜间模式、品牌封面。',
    duskDes: '更适合夜间或高对比场景，能把内容轮廓压得更稳。',
    duskName: '暮色',
    emberBest: '提醒页、活动页、强 CTA。',
    emberDes: '偏提示与注意力，适合强调、告警和促销氛围。',
    emberName: '余烬',
    forestBest: '阅读页、知识页、后台首页。',
    forestDes: '更自然、稳定，适合内容长期阅读和低干扰界面。',
    forestName: '森林',
    freshMood: '清新',
    goldBest: '会员、奖项、稀缺权益。',
    goldDes: '有奖励、成就和高级感，适合荣誉或会员体系。',
    goldGradBest: '会员页、奖项页、权益卡。',
    goldGradDes: '偏奖励和质感，适合会员、成就、稀缺权益。',
    goldName: '金色',
    grassBest: '增长指标、成功状态、健康数据。',
    grassDes: '生长、进展、正向反馈，适合增长和成功语义。',
    grassName: '草绿色',
    grayBest: '弱品牌、控制台、低干扰标签。',
    grayDes: '最稳妥的中性主题，适合界面 chrome 和后台系统。',
    grayName: '灰色',
    hoverName: '悬停状态',
    indigoBest: '默认主按钮、导航、核心交互。',
    indigoDes: '通用性最好的一类品牌色，适合默认主色。',
    indigoName: '靛蓝',
    infoBest: '帮助信息、产品说明、状态通告。',
    infoDes: '说明、知识、状态同步。',
    infoName: '信息',
    limeBest: '重点标记、数据强调、活动提示。',
    limeDes: '高亮感强，适合需要被快速注意到的内容。',
    limeName: '青柠色',
    meadowBest: '健康产品、增长页、环保主题。',
    meadowDes: '更轻盈的绿色系，适合健康、增长和轻自然风格。',
    meadowName: '草地',
    mintBest: '健康、护理、轻量科技。',
    mintDes: '更轻、更干净，适合清新产品、健康和轻量信息。',
    mintName: '薄荷色',
    mutedBgName: '柔和背景',
    oceanBest: '技术页、图表区、内容承载页。',
    oceanDes: '更偏理性和技术感，适合内容沉浸、图表和技术产品。',
    oceanName: '海洋',
    oliveBest: '阅读、内容型后台、自然风格。',
    oliveDes: '带一点自然、编辑感，适合知识型、生活方式或环保场景。',
    oliveName: '橄榄色',
    orangeBest: '促销活动、辅助 CTA、温暖提示。',
    orangeDes: '活力、亲和、温暖，适合促销或动作引导。',
    orangeName: '橙色',
    overlayMeta: '模态遮罩',
    overlayName: '遮罩',
    pinkBest: '内容封面、活动主题、视觉标签。',
    pinkDes: '更轻盈、更时尚，适合女性化或创意型场景。',
    pinkName: '粉色',
    premiumMood: '高级',
    raisedMeta: '卡片层',
    raisedName: '浮起表面',
    rubyBest: '营销活动、情绪化视觉、强调卡片。',
    rubyDes: '比 tomato 更偏品牌感，适合活动、告警或热情型视觉。',
    rubyName: '宝石红',
    shadeTone: '深色',
    softBgName: '微妙背景',
    successBest: '成功结果、通过状态、健康指标。',
    successDes: '保存成功、完成、健康或增长。',
    successName: '成功',
    sunriseBest: 'Hero、欢迎页、活动头图。',
    sunriseDes: '偏暖的品牌开场，适合首屏、欢迎语和主 CTA 背景。',
    sunriseName: '日出',
    surfaceMeta: '主内容',
    surfaceMutedName: '柔和表面',
    surfaceName: '表面',
    surfaceSubtleName: '微妙表面',
    tagBackground: '背景',
    tagBorder: '边框',
    tagColor: '颜色',
    tagElevated: '浮层',
    tagInteraction: '交互',
    tagLayer: '层级',
    tagOverlay: '遮罩',
    tagSurface: '表面',
    tagText: '文本',
    tagUtility: '工具',
    tealBest: '数据工具、状态提示、科技感界面。',
    tealDes: '清爽、理性、偏科技气质，适合产品数据或工具类应用。',
    tealName: '蓝绿色',
    textPrimaryName: '主文本',
    tintTone: '淡色',
    tomatoBest: '删除、失败、危险提醒。',
    tomatoDes: '直接、明确、情绪强，适合出错与破坏性动作。',
    tomatoName: '番茄色',
    uiBgDes: '页面最外层的底色，应该尽量安静，避免抢夺主题色。',
    uiBgBest: '页面壳、全局背景、首屏基础底板。',
    uiBgName: '应用画布',
    uiBorderBest: '输入框、卡片、分区容器。',
    uiBorderDes: '默认边框，用于大多数表单和卡片外沿。',
    uiBorderStrongBest: '当前选中区域、重点卡片、明确分割。',
    uiBorderStrongDes: '需要更明确的轮廓时再使用，避免每一层都很重。',
    uiBorderSubtleBest: '弱分隔、卡片轮廓、辅助表面。',
    uiBorderSubtleDes: '最轻的边线，适合背景分层但不需要太强存在感。',
    uiHoverBest: '交互列表、按钮悬停、行 hover。',
    uiHoverDes: '鼠标悬停时的轻微反馈，不需要过强颜色。',
    uiMutedBest: '内嵌卡片、轻量容器、列表条目。',
    uiMutedDes: '比 subtle 更明显，适合强调一个仍然不抢戏的层级。',
    uiActiveBest: '按压态、选中态、短暂聚焦反馈。',
    uiActiveDes: '按下或激活时的短暂反馈，应该比 hover 稍重。',
    uiOverlayBest: '模态、抽屉、全局遮罩。',
    uiOverlayDes: '覆盖整页的遮罩背景，负责压低背景干扰。',
    uiRaisedBest: '弹出层、重点卡片、浮层容器。',
    uiRaisedDes: '用于突出卡片、弹层或更高层级的内容容器。',
    uiSoftBest: '内容分区、次级区块、弱分隔。',
    uiSoftDes: '比主背景更高一层，适合分隔区域和弱分组。',
    uiSurfaceBest: '卡片、面板、表单区。',
    uiSurfaceDes: '标准内容表面，最常见的卡片和面板底色。',
    uiSurfaceMutedBest: '嵌套模块、条目背景、辅助容器。',
    uiSurfaceMutedDes: '适合再往下一层，给列表项或嵌套区域一个稳定背景。',
    uiSurfaceSubtleBest: '次级卡片、信息区、轻描边面板。',
    uiSurfaceSubtleDes: '和主表面接近，但可以用来营造轻微层级差。',
    uiTextBest: '标题、正文、重要信息。',
    uiTextDes: '主要文本颜色，负责正文和最强信息层。',
    uiTooltipBest: 'Tooltip、轻量说明、悬浮提示。',
    uiTooltipDes: '提示层背景，建议和整体 dark 基底一致，不要再回到偏蓝冷感。',
    uiTooltipName: '提示层背景',
    violetBest: '创意产品、灵感页、品牌皮肤。',
    violetDes: '带一点神秘和创造感，适合灵感、产品能力或高级感。',
    violetName: '紫罗兰',
    warmMood: '暖色',
    warningBest: '待确认、风险提醒、注意事项。',
    warningDes: '需要注意，但不一定是错误。',
    warningName: '警告',
    variantBorder: '边框',
    variantSoft: '柔和',
    variantSolid: '实色',
    variantSubtle: '微妙',
    variantWarning: '警告',
    stackBg: '背景',
    stackCode: '代码',
    stackOverlay: '遮罩',
    stackRaised: '浮起',
    stackSurface: '表面',
    yellowBest: '提醒、待处理、注意事项。',
    yellowDes: '警示和提醒感最明显，适合让用户停一下。',
    yellowName: '黄色',
  },
};
const translate = (k) => t(k, locales);

const uiTokens = [
  {
    name: translate('uiBgName'),
    token: '--ui-bg',
    sampleFill: 'var(--ui-bg)',
    sampleInk: 'var(--ui-fg)',
    description: translate('uiBgDes'),
    best: translate('uiBgBest'),
    tag: translate('tagBackground'),
  },
  {
    name: translate('softBgName'),
    token: '--ui-bg-subtle',
    sampleFill: 'var(--ui-bg-subtle)',
    sampleInk: 'var(--ui-fg)',
    description: translate('uiSoftDes'),
    best: translate('uiSoftBest'),
    tag: translate('tagLayer'),
  },
  {
    name: translate('mutedBgName'),
    token: '--ui-bg-muted',
    sampleFill: 'var(--ui-bg-muted)',
    sampleInk: 'var(--ui-fg)',
    description: translate('uiMutedDes'),
    best: translate('uiMutedBest'),
    tag: translate('tagLayer'),
  },
  {
    name: translate('surfaceName'),
    token: '--ui-surface',
    sampleFill: 'var(--ui-surface)',
    sampleInk: 'var(--ui-fg)',
    description: translate('uiSurfaceDes'),
    best: translate('uiSurfaceBest'),
    tag: translate('tagSurface'),
  },
  {
    name: translate('surfaceSubtleName'),
    token: '--ui-surface-subtle',
    sampleFill: 'var(--ui-surface-subtle)',
    sampleInk: 'var(--ui-fg)',
    description: translate('uiSurfaceSubtleDes'),
    best: translate('uiSurfaceSubtleBest'),
    tag: translate('tagSurface'),
  },
  {
    name: translate('surfaceMutedName'),
    token: '--ui-surface-muted',
    sampleFill: 'var(--ui-surface-muted)',
    sampleInk: 'var(--ui-fg)',
    description: translate('uiSurfaceMutedDes'),
    best: translate('uiSurfaceMutedBest'),
    tag: translate('tagSurface'),
  },
  {
    name: translate('hoverName'),
    token: '--ui-surface-hover',
    sampleFill: 'var(--ui-surface-hover)',
    sampleInk: 'var(--ui-fg)',
    description: translate('uiHoverDes'),
    best: translate('uiHoverBest'),
    tag: translate('tagInteraction'),
  },
  {
    name: translate('activeName'),
    token: '--ui-surface-active',
    sampleFill: 'var(--ui-surface-active)',
    sampleInk: 'var(--ui-fg)',
    description: translate('uiActiveDes'),
    best: translate('uiActiveBest'),
    tag: translate('tagInteraction'),
  },
  {
    name: translate('raisedName'),
    token: '--ui-surface-raised',
    sampleFill: 'var(--ui-surface-raised)',
    sampleInk: 'var(--ui-fg)',
    description: translate('uiRaisedDes'),
    best: translate('uiRaisedBest'),
    tag: translate('tagElevated'),
  },
  {
    name: translate('overlayName'),
    token: '--ui-surface-overlay',
    sampleFill: 'var(--ui-surface-overlay)',
    sampleInk: 'var(--ui-fg)',
    description: translate('uiOverlayDes'),
    best: translate('uiOverlayBest'),
    tag: translate('tagOverlay'),
  },
  {
    name: translate('borderSubtleName'),
    token: '--ui-border-subtle',
    sampleFill: 'var(--ui-surface-raised)',
    sampleInk: 'var(--ui-fg-muted)',
    sampleBorder: 'var(--ui-border-subtle)',
    description: translate('uiBorderSubtleDes'),
    best: translate('uiBorderSubtleBest'),
    tag: translate('tagBorder'),
  },
  {
    name: translate('borderDefaultName'),
    token: '--ui-border',
    sampleFill: 'var(--ui-surface-raised)',
    sampleInk: 'var(--ui-fg-muted)',
    sampleBorder: 'var(--ui-border)',
    description: translate('uiBorderDes'),
    best: translate('uiBorderBest'),
    tag: translate('tagBorder'),
  },
  {
    name: translate('borderStrongName'),
    token: '--ui-border-strong',
    sampleFill: 'var(--ui-surface-raised)',
    sampleInk: 'var(--ui-fg)',
    sampleBorder: 'var(--ui-border-strong)',
    description: translate('uiBorderStrongDes'),
    best: translate('uiBorderStrongBest'),
    tag: translate('tagBorder'),
  },
  {
    name: translate('uiTooltipName'),
    token: '--ui-tooltip-bg',
    sampleFill: 'var(--ui-tooltip-bg)',
    sampleInk: 'var(--ui-tooltip-fg)',
    description: translate('uiTooltipDes'),
    best: translate('uiTooltipBest'),
    tag: translate('tagUtility'),
  },
  {
    name: translate('textPrimaryName'),
    token: '--ui-fg',
    sampleFill: 'var(--ui-surface-raised)',
    sampleInk: 'var(--ui-fg)',
    description: translate('uiTextDes'),
    best: translate('uiTextBest'),
    tag: translate('tagText'),
  },
];

const themeTokens = [
  {
    name: translate('grayName'),
    token: '--ui-gray',
    swatches: [
      [translate('tintTone'), '--ui-gray-tint', 'var(--ui-gray-tint)', '#111827'],
      [translate('defaultTone'), '--ui-gray', 'var(--ui-gray)', 'var(--ui-bg)'],
      [translate('shadeTone'), '--ui-gray-shade', 'var(--ui-gray-shade)', '#ffffff'],
    ],
    description: translate('grayDes'),
    best: translate('grayBest'),
  },
  {
    name: translate('oliveName'),
    token: '--ui-olive',
    swatches: [
      [translate('tintTone'), '--ui-olive-tint', 'var(--ui-olive-tint)', '#111827'],
      [translate('defaultTone'), '--ui-olive', 'var(--ui-olive)', 'var(--ui-bg)'],
      [translate('shadeTone'), '--ui-olive-shade', 'var(--ui-olive-shade)', '#ffffff'],
    ],
    description: translate('oliveDes'),
    best: translate('oliveBest'),
  },
  {
    name: translate('tomatoName'),
    token: '--ui-tomato',
    swatches: [
      [translate('tintTone'), '--ui-tomato-tint', 'var(--ui-tomato-tint)', '#111827'],
      [translate('defaultTone'), '--ui-tomato', 'var(--ui-tomato)', '#ffffff'],
      [translate('shadeTone'), '--ui-tomato-shade', 'var(--ui-tomato-shade)', '#ffffff'],
    ],
    description: translate('tomatoDes'),
    best: translate('tomatoBest'),
  },
  {
    name: translate('rubyName'),
    token: '--ui-ruby',
    swatches: [
      [translate('tintTone'), '--ui-ruby-tint', 'var(--ui-ruby-tint)', '#111827'],
      [translate('defaultTone'), '--ui-ruby', 'var(--ui-ruby)', '#ffffff'],
      [translate('shadeTone'), '--ui-ruby-shade', 'var(--ui-ruby-shade)', '#ffffff'],
    ],
    description: translate('rubyDes'),
    best: translate('rubyBest'),
  },
  {
    name: translate('pinkName'),
    token: '--ui-pink',
    swatches: [
      [translate('tintTone'), '--ui-pink-tint', 'var(--ui-pink-tint)', '#111827'],
      [translate('defaultTone'), '--ui-pink', 'var(--ui-pink)', '#111827'],
      [translate('shadeTone'), '--ui-pink-shade', 'var(--ui-pink-shade)', '#ffffff'],
    ],
    description: translate('pinkDes'),
    best: translate('pinkBest'),
  },
  {
    name: translate('violetName'),
    token: '--ui-violet',
    swatches: [
      [translate('tintTone'), '--ui-violet-tint', 'var(--ui-violet-tint)', '#111827'],
      [translate('defaultTone'), '--ui-violet', 'var(--ui-violet)', '#111827'],
      [translate('shadeTone'), '--ui-violet-shade', 'var(--ui-violet-shade)', '#ffffff'],
    ],
    description: translate('violetDes'),
    best: translate('violetBest'),
  },
  {
    name: translate('indigoName'),
    token: '--ui-indigo',
    swatches: [
      [translate('tintTone'), '--ui-indigo-tint', 'var(--ui-indigo-tint)', '#111827'],
      [translate('defaultTone'), '--ui-indigo', 'var(--ui-indigo)', '#ffffff'],
      [translate('shadeTone'), '--ui-indigo-shade', 'var(--ui-indigo-shade)', '#ffffff'],
    ],
    description: translate('indigoDes'),
    best: translate('indigoBest'),
  },
  {
    name: translate('blueName'),
    token: '--ui-blue',
    swatches: [
      [translate('tintTone'), '--ui-blue-tint', 'var(--ui-blue-tint)', '#111827'],
      [translate('defaultTone'), '--ui-blue', 'var(--ui-blue)', '#ffffff'],
      [translate('shadeTone'), '--ui-blue-shade', 'var(--ui-blue-shade)', '#ffffff'],
    ],
    description: translate('blueDes'),
    best: translate('blueBest'),
  },
  {
    name: translate('tealName'),
    token: '--ui-teal',
    swatches: [
      [translate('tintTone'), '--ui-teal-tint', 'var(--ui-teal-tint)', '#111827'],
      [translate('defaultTone'), '--ui-teal', 'var(--ui-teal)', '#111827'],
      [translate('shadeTone'), '--ui-teal-shade', 'var(--ui-teal-shade)', '#ffffff'],
    ],
    description: translate('tealDes'),
    best: translate('tealBest'),
  },
  {
    name: translate('grassName'),
    token: '--ui-grass',
    swatches: [
      [translate('tintTone'), '--ui-grass-tint', 'var(--ui-grass-tint)', '#111827'],
      [translate('defaultTone'), '--ui-grass', 'var(--ui-grass)', '#111827'],
      [translate('shadeTone'), '--ui-grass-shade', 'var(--ui-grass-shade)', '#ffffff'],
    ],
    description: translate('grassDes'),
    best: translate('grassBest'),
  },
  {
    name: translate('mintName'),
    token: '--ui-mint',
    swatches: [
      [translate('tintTone'), '--ui-mint-tint', 'var(--ui-mint-tint)', '#111827'],
      [translate('defaultTone'), '--ui-mint', 'var(--ui-mint)', '#111827'],
      [translate('shadeTone'), '--ui-mint-shade', 'var(--ui-mint-shade)', '#ffffff'],
    ],
    description: translate('mintDes'),
    best: translate('mintBest'),
  },
  {
    name: translate('limeName'),
    token: '--ui-lime',
    swatches: [
      [translate('tintTone'), '--ui-lime-tint', 'var(--ui-lime-tint)', '#111827'],
      [translate('defaultTone'), '--ui-lime', 'var(--ui-lime)', '#111827'],
      [translate('shadeTone'), '--ui-lime-shade', 'var(--ui-lime-shade)', '#ffffff'],
    ],
    description: translate('limeDes'),
    best: translate('limeBest'),
  },
  {
    name: translate('yellowName'),
    token: '--ui-yellow',
    swatches: [
      [translate('tintTone'), '--ui-yellow-tint', 'var(--ui-yellow-tint)', '#111827'],
      [translate('defaultTone'), '--ui-yellow', 'var(--ui-yellow)', '#111827'],
      [translate('shadeTone'), '--ui-yellow-shade', 'var(--ui-yellow-shade)', '#ffffff'],
    ],
    description: translate('yellowDes'),
    best: translate('yellowBest'),
  },
  {
    name: translate('orangeName'),
    token: '--ui-orange',
    swatches: [
      [translate('tintTone'), '--ui-orange-tint', 'var(--ui-orange-tint)', '#111827'],
      [translate('defaultTone'), '--ui-orange', 'var(--ui-orange)', '#111827'],
      [translate('shadeTone'), '--ui-orange-shade', 'var(--ui-orange-shade)', '#ffffff'],
    ],
    description: translate('orangeDes'),
    best: translate('orangeBest'),
  },
  {
    name: translate('goldName'),
    token: '--ui-gold',
    swatches: [
      [translate('tintTone'), '--ui-gold-tint', 'var(--ui-gold-tint)', '#111827'],
      [translate('defaultTone'), '--ui-gold', 'var(--ui-gold)', '#111827'],
      [translate('shadeTone'), '--ui-gold-shade', 'var(--ui-gold-shade)', '#ffffff'],
    ],
    description: translate('goldDes'),
    best: translate('goldBest'),
  },
];

const stateTokens = [
  {
    name: translate('dangerName'),
    token: '--state-danger',
    sampleFill: 'var(--state-danger)',
    sampleInk: 'var(--state-danger-fg)',
    description: translate('dangerDes'),
    best: translate('dangerBest'),
    variants: [
      [translate('variantSolid'), 'var(--state-danger)'],
      [translate('variantSoft'), 'var(--state-danger-soft)'],
      [translate('variantSubtle'), 'var(--state-danger-subtle)'],
      [translate('variantBorder'), 'var(--state-danger-border)'],
    ],
  },
  {
    name: translate('successName'),
    token: '--state-success',
    sampleFill: 'var(--state-success)',
    sampleInk: 'var(--state-success-fg)',
    description: translate('successDes'),
    best: translate('successBest'),
    variants: [
      [translate('variantSolid'), 'var(--state-success)'],
      [translate('variantSoft'), 'var(--state-success-soft)'],
      [translate('variantSubtle'), 'var(--state-success-subtle)'],
      [translate('variantBorder'), 'var(--state-success-border)'],
    ],
  },
  {
    name: translate('warningName'),
    token: '--state-warning',
    sampleFill: 'var(--state-warning)',
    sampleInk: 'var(--state-warning-fg)',
    description: translate('warningDes'),
    best: translate('warningBest'),
    variants: [
      [translate('variantSolid'), 'var(--state-warning)'],
      [translate('variantSoft'), 'var(--state-warning-soft)'],
      [translate('variantSubtle'), 'var(--state-warning-subtle)'],
      [translate('variantBorder'), 'var(--state-warning-border)'],
    ],
  },
  {
    name: translate('infoName'),
    token: '--state-info',
    sampleFill: 'var(--state-info)',
    sampleInk: 'var(--state-info-fg)',
    description: translate('infoDes'),
    best: translate('infoBest'),
    variants: [
      [translate('variantSolid'), 'var(--state-info)'],
      [translate('variantSoft'), 'var(--state-info-soft)'],
      [translate('variantSubtle'), 'var(--state-info-subtle)'],
      [translate('variantBorder'), 'var(--state-info-border)'],
    ],
  },
];

const gradientTokens = [
  {
    name: translate('sunriseName'),
    token: '.bg-gradient-sunrise',
    className: 'bg-gradient-sunrise',
    description: translate('sunriseDes'),
    best: translate('sunriseBest'),
    mood: translate('warmMood'),
  },
  {
    name: translate('auroraName'),
    token: '.bg-gradient-aurora',
    className: 'bg-gradient-aurora',
    description: translate('auroraDes'),
    best: translate('auroraBest'),
    mood: translate('balancedMood'),
  },
  {
    name: translate('oceanName'),
    token: '.bg-gradient-ocean',
    className: 'bg-gradient-ocean',
    description: translate('oceanDes'),
    best: translate('oceanBest'),
    mood: translate('coolMood'),
  },
  {
    name: translate('meadowName'),
    token: '.bg-gradient-meadow',
    className: 'bg-gradient-meadow',
    description: translate('meadowDes'),
    best: translate('meadowBest'),
    mood: translate('freshMood'),
  },
  {
    name: translate('emberName'),
    token: '.bg-gradient-ember',
    className: 'bg-gradient-ember',
    description: translate('emberDes'),
    best: translate('emberBest'),
    mood: translate('alertMood'),
  },
  {
    name: translate('duskName'),
    token: '.bg-gradient-dusk',
    className: 'bg-gradient-dusk',
    description: translate('duskDes'),
    best: translate('duskBest'),
    mood: translate('deepMood'),
  },
  {
    name: translate('goldName'),
    token: '.bg-gradient-gold',
    className: 'bg-gradient-gold',
    description: translate('goldGradDes'),
    best: translate('goldGradBest'),
    mood: translate('premiumMood'),
  },
  {
    name: translate('forestName'),
    token: '.bg-gradient-forest',
    className: 'bg-gradient-forest',
    description: translate('forestDes'),
    best: translate('forestBest'),
    mood: translate('calmMood'),
  },
];

function renderCards(containerSelector, items) {
  const container = document.querySelector(containerSelector);
  if (!container) {
    return;
  }

  container.innerHTML = items
    .map((item) => {
      const swatches = Array.isArray(item.swatches)
        ? item.swatches.map(([label, token, fill, ink]) => ({
            label,
            token,
            fill,
            ink,
          }))
        : null;
      const defaultSwatch = swatches
        ? swatches.find((swatch) => swatch.token === item.token) || swatches[0]
        : null;
      const previewFill =
        item.sampleFill || defaultSwatch?.fill || 'transparent';
      const previewInk = item.sampleInk || defaultSwatch?.ink || 'currentColor';
      const borderStyle = item.sampleBorder
        ? `--sample-border: ${item.sampleBorder};`
        : '';
      const toneMarkup = swatches
        ? `
                    <div class="tone-ladder">
                        ${swatches
                          .filter(
                            (swatch) =>
                              swatch.token.endsWith('-tint') ||
                              swatch.token.endsWith('-shade')
                          )
                          .map(
                            (swatch) => `
                                    <div class="tone-row" style="--sample-fill: ${swatch.fill}; --sample-ink: ${swatch.ink};">
                                        <div class="tone-chip-fill"></div>
                                        <div class="tone-row-meta">
                                            <div class="tone-row-label">${swatch.label}</div>
                                            <div class="tone-row-token">${swatch.token}</div>
                                        </div>
                                    </div>
                                `
                          )
                          .join('')}
                    </div>
                `
        : '';
      const variantMarkup = Array.isArray(item.variants)
        ? `
                    <div class="token-strip">
                        ${item.variants
                          .map(
                            ([label, value]) => `
                                    <div class="tone-chip" style="--sample-fill: ${value}; --sample-ink: ${item.sampleInk};">
                                        ${label}
                                    </div>
                                `
                          )
                          .join('')}
                    </div>
                `
        : '';

      return `
                <article class="token-card">
                    <div class="token-swatch" style="--sample-fill: ${previewFill}; --sample-ink: ${previewInk}; ${borderStyle}">
                        <div class="token-swatch-meta">
                            <span class="token-swatch-token">${item.token}</span>
                            <span class="token-tag">${item.tag || translate('tagColor')}</span>
                        </div>
                    </div>
                    <div class="token-body">
                        <div class="token-head">
                            <p class="token-name">${item.name}</p>
                        </div>
                        <p class="token-desc">${item.description}</p>
                        <p class="token-note"><strong>${translate('bestFor')}</strong> ${item.best}</p>
                        ${toneMarkup}
                        ${variantMarkup}
                    </div>
                </article>
            `;
    })
    .join('');
}

function renderDemoCards() {
  const container = document.querySelector('#demo-cards');
  if (!container) {
    return;
  }

  container.innerHTML = `
        <article class="demo-card">
            <h4>${translate('demoActionName')}</h4>
            <div class="callout">
                <strong>${translate('demoActionBest')}</strong>
                <p>${translate('demoActionDes')}</p>
            </div>
            <div class="token-strip">
                <div class="tone-chip" style="--sample-fill: var(--tone-solid); --sample-ink: var(--tone-fg);">${translate('variantSolid')}</div>
                <div class="tone-chip" style="--sample-fill: var(--tone-subtle); --sample-ink: var(--tone-text);">${translate('variantSubtle')}</div>
                <div class="tone-chip" style="--sample-fill: var(--tone-soft); --sample-ink: var(--tone-text);">${translate('variantSoft')}</div>
            </div>
        </article>
        <article class="demo-card">
            <h4>${translate('demoStateName')}</h4>
            <div
                class="callout"
                style="border-color: color-mix(in srgb, var(--state-warning) 35%, var(--ui-border)); background: linear-gradient(180deg, var(--state-warning-subtle), var(--ui-surface-subtle));"
            >
                <strong>${translate('demoStateBest')}</strong>
                <p>${translate('demoStateDes')}</p>
            </div>
            <div class="token-strip">
                <div class="tone-chip" style="--sample-fill: var(--state-warning); --sample-ink: var(--state-warning-fg);">${translate('variantWarning')}</div>
                <div class="tone-chip" style="--sample-fill: var(--state-warning-subtle); --sample-ink: var(--state-warning-text);">${translate('variantSubtle')}</div>
                <div class="tone-chip" style="--sample-fill: var(--state-warning-soft); --sample-ink: var(--state-warning-text);">${translate('variantSoft')}</div>
            </div>
        </article>
        <article class="demo-card">
            <h4>${translate('demoSurfaceName')}</h4>
            <div class="stack" id="surface-stack"></div>
        </article>
    `;
}

function renderSurfaceStack() {
  const stack = document.querySelector('#surface-stack');
  if (!stack) {
    return;
  }

  const rows = [
    [translate('stackBg'), 'var(--ui-bg)', translate('bgMeta')],
    [translate('stackSurface'), 'var(--ui-surface)', translate('surfaceMeta')],
    [translate('stackRaised'), 'var(--ui-surface-raised)', translate('raisedMeta')],
    [translate('stackOverlay'), 'var(--ui-surface-overlay)', translate('overlayMeta')],
    [translate('stackCode'), 'var(--tone-code-bg)', translate('codeMeta')],
  ];

  stack.innerHTML = rows
    .map(
      ([label, fill, meta]) => `
                <div class="stack-row">
                    <div class="stack-label">${label}</div>
                    <div class="stack-bar" style="--sample-fill: ${fill};"></div>
                    <div class="stack-meta">${meta}</div>
                </div>
            `
    )
    .join('');
}

function renderGradientCards() {
  const container = document.querySelector('#gradient-grid');
  if (!container) {
    return;
  }

  container.innerHTML = gradientTokens
    .map(
      (item) => `
                <article class="gradient-card">
                    <div class="gradient-preview ${item.className}">
                        <span class="gradient-preview-title">${item.name}</span>
                        <span class="gradient-preview-token">${item.token}</span>
                    </div>
                    <div class="gradient-desc">
                        <p>${item.description}</p>
                        <p><strong>${translate('bestFor')}</strong> ${item.best}</p>
                    </div>
                    <div class="gradient-note">
                        <div class="gradient-meta">
                            <span class="gradient-pill">${item.mood}</span>
                            <span class="gradient-pill">${translate('tagBackground')}</span>
                        </div>
                    </div>
                </article>
            `
    )
    .join('');
}

renderCards('#ui-grid', uiTokens);
renderCards('#theme-grid', themeTokens);
renderCards('#state-grid', stateTokens);
renderDemoCards();
renderSurfaceStack();
renderGradientCards();
