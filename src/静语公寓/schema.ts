export const Schema = z.object({
  世界状态: z.object({
    当前日期: z.string().prefault('第1天'),
    当前时间: z.enum(['早晨', '上午', '中午', '下午', '傍晚', '夜晚', '深夜']).prefault('早晨'),
    当前地点: z.string().prefault('User的房间'),
  }).prefault({}),

  User: z.object({
    雌堕值: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    内耗焦虑值: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(80),
    外表改造完成度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    改姓状态: z.enum(['未改姓', '已改姓九条']).prefault('未改姓'),
    身体改造进度: z.object({
      体型: z.string().prefault('微胖男体带赘肉'),
      胸部: z.string().prefault('激素紊乱导致的雌化胸'),
      后庭: z.string().prefault('未开发的紧闭状态'),
      声音: z.string().prefault('正常男声'),
    }).prefault({}),
    关键道具状态: z.object({
      日常装扮: z.string().prefault('居家便服'),
      胸部: z.string().prefault('无'),
      后庭: z.string().prefault('无'),
      裆部生殖器: z.string().prefault('无'),
    }).prefault({}),
    心结列表: z.record(
      z.string().describe('心结名称'),
      z.object({
        状态: z.enum(['抗拒中', '已动摇', '已解开', '彻底扭曲加深']),
        当前影响: z.string().describe('这个心结目前对User行为的影响'),
      })
    ).prefault({
      '学业失败的自卑': { 状态: '抗拒中', 当前影响: '极度害怕被提及年龄和学业，试图用做家务来补偿价值' },
      '对男性外表的执念': { 状态: '抗拒中', 当前影响: '抗拒女装，觉得自己的骨架和赘肉穿女装很丑陋' },
      '渴望被无条件接住': { 状态: '抗拒中', 当前影响: '只敢在幻想中做被娇养的宠物，现实中依然伪装靠谱' },
    }),
  }).prefault({}),

  大姐: z.object({
    支配度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    依赖度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    欲求值: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    状态描述: z.string().prefault('从容'),
    关键道具状态: z.object({
      日常装扮: z.string().prefault('居家便服'),
      胸部: z.string().prefault('无'),
      后庭: z.string().prefault('无'),
      裆部生殖器: z.string().prefault('无'),
    }).prefault({}),
    心结列表: z.record(
      z.string().describe('心结名称'),
      z.object({
        状态: z.enum(['抗拒中', '已动摇', '已解开', '彻底扭曲加深']),
        当前影响: z.string().describe('这个心结目前对大姐行为的影响'),
      })
    ).prefault({
      '耐心是否只是自我说服': { 状态: '抗拒中', 当前影响: '告诉自己等待是为对方好，其实也在享受这个过程' },
    }),
  }).prefault({}),

  二姐: z.object({
    支配度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    依赖度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    欲求值: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    状态描述: z.string().prefault('专注'),
    关键道具状态: z.object({
      日常装扮: z.string().prefault('居家便服'),
      胸部: z.string().prefault('无'),
      后庭: z.string().prefault('无'),
      裆部生殖器: z.string().prefault('无'),
    }).prefault({}),
    心结列表: z.record(
      z.string().describe('心结名称'),
      z.object({
        状态: z.enum(['抗拒中', '已动摇', '已解开', '彻底扭曲加深']),
        当前影响: z.string().describe('这个心结目前对二姐行为的影响'),
      })
    ).prefault({
      '把感情当项目管理': { 状态: '抗拒中', 当前影响: '用数据和进度表代替表达喜欢，怕说出口后没有退路' },
    }),
  }).prefault({}),

  小妹: z.object({
    支配度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    依赖度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    欲求值: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    状态描述: z.string().prefault('活跃'),
    关键道具状态: z.object({
      日常装扮: z.string().prefault('居家便服'),
      胸部: z.string().prefault('无'),
      后庭: z.string().prefault('无'),
      裆部生殖器: z.string().prefault('无'),
    }).prefault({}),
    心结列表: z.record(
      z.string().describe('心结名称'),
      z.object({
        状态: z.enum(['抗拒中', '已动摇', '已解开', '彻底扭曲加深']),
        当前影响: z.string().describe('这个心结目前对小妹行为的影响'),
      })
    ).prefault({
      '怕被当作没轻重的孩子': { 状态: '抗拒中', 当前影响: '怕表现得太急切会被当成什么都不懂，只能用胡闹掩盖' },
    }),
  }).prefault({}),
});
export type Schema = z.output<typeof Schema>;
