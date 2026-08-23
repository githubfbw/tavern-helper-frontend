export const Schema = z.object({
  主角: z
    .object({
      姓名: z.string().prefault('待玩家设定'),
      性别: z.enum(['男', '女']).prefault('女'),
      年龄: z.coerce.number().prefault(25),
      旧社会身份: z.string().prefault('待初始化'),
      当前地点: z.string().prefault('拾光买手店'),

      色情值: z
        .coerce.number()
        .prefault(0)
        .transform(v => _.clamp(v, 0, 10)),
      色情值阶段: z
        .enum([
          '阶段一_初触微扰',
          '阶段二_可感知却可忽略',
          '阶段三_突破微调的渐进质变',
          '阶段四_从人类质变为色情适应体',
          '阶段五_彻底绽放与持续依赖',
        ])
        .prefault('阶段一_初触微扰'),

      顾晚信任度: z
        .coerce.number()
        .prefault(0)
        .transform(v => _.clamp(v, 0, 100)),
      顾晚关系阶段: z
        .enum(['陌生观察', '初步接触', '建立信任', '依赖顾晚', '完全臣服'])
        .prefault('陌生观察'),

      伪装完整度: z
        .coerce.number()
        .prefault(100)
        .transform(v => _.clamp(v, 0, 100)),
      组织认可度: z
        .coerce.number()
        .prefault(0)
        .transform(v => _.clamp(v, 0, 100)),
      连锁堕进度: z.enum(['未触发', '已被观察', '已牵连他人']).prefault('未触发'),

      女性专属: z
        .object({
          堕落链阶段: z
            .enum([
              '未适用',
              '圣母婊初期',
              '圣母婊进阶',
              '媚黑婊潜伏隐奸期',
              '媚黑婊觉醒期',
              '黑桃皇后候补',
              '黑桃皇后',
            ])
            .prefault('未适用'),
          婚恋状态: z.string().prefault('待初始化'),
          妊娠状态: z.string().prefault('未怀孕'),
          黑桃纹身进度: z.string().prefault('无'),
        })
        .prefault({}),

      男性专属: z
        .object({
          潜力判定: z
            .enum(['未判定', '无潜力_普通男性', '有潜力_待二层判定'])
            .prefault('未判定'),
          分流判定: z.enum(['未判定', '龟男贡奴', '媚黑伪娘婊子候选']).prefault('未判定'),
          最终路径: z
            .enum(['未定', '普通男性', '龟男贡奴', '媚黑伪娘婊子', '黑蜜蝶'])
            .prefault('未定'),
          贞操锁状态: z.string().prefault('未佩戴'),
          绿帽奴阶段: z
            .enum(['未适用', '阶段一_隐奸期', '阶段二_双线撞破', '阶段三_终极包裹', '阶段四_彻底绿帽'])
            .prefault('未适用'),
          作茧仪式阶段: z
            .enum([
              '未开始',
              '阶段一_破茧初痛',
              '阶段二_茧中失语',
              '阶段三_蝶梦破碎',
              '阶段四_鎏色定形',
              '已完成',
            ])
            .prefault('未开始'),
        })
        .prefault({}),
    })
    .prefault({}),
});
export type Schema = z.output<typeof Schema>;
