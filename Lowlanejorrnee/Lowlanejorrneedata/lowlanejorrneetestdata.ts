/** A=0 B=1 C=2 D=3 — correct index */
export type LowlanejorrneeTestQ = {
  text: string;
  options: [string, string, string, string];
  correct: 0 | 1 | 2 | 3;
};

export type LowlanejorrneeTestLevel = {
  title: string;
  questions: LowlanejorrneeTestQ[];
};

export const lowlanejorrneeTestLevels: LowlanejorrneeTestLevel[] = [
  {
    title: 'Level 1 — Basics',
    questions: [
      {
        text: 'What is called when you knock down all pins on the first throw?',
        options: ['Spare', 'Strike', 'Frame', 'Bonus'],
        correct: 1,
      },
      {
        text: 'How many pins are on the lane at the start?',
        options: ['9', '12', '10', '8'],
        correct: 2,
      },
      {
        text: 'What is the line you must not cross called?',
        options: ['Throw line', 'Limit line', 'Foul line', 'End line'],
        correct: 2,
      },
      {
        text: 'If you knock all pins in two throws, it is called:',
        options: ['Spare', 'Double', 'Finish', 'Strike'],
        correct: 0,
      },
      {
        text: 'What happens if you step over the foul line?',
        options: ['You retry', 'Extra throw', 'Points are doubled', 'Throw does not count'],
        correct: 3,
      },
      {
        text: 'How many throws are normally in one frame?',
        options: ['3', 'Unlimited', '2', '1'],
        correct: 2,
      },
    ],
  },
  {
    title: 'Level 2 — Rules & Flow',
    questions: [
      {
        text: 'If you get a strike, how many throws remain in that frame?',
        options: ['Two', 'None', 'One', 'Three'],
        correct: 1,
      },
      {
        text: 'What is the maximum score in one game?',
        options: ['300', '200', '350', '250'],
        correct: 0,
      },
      {
        text: 'What is a “double”?',
        options: ['Two players', 'Two throws', 'Two strikes in a row', 'Two spares'],
        correct: 2,
      },
      {
        text: 'When does a frame end?',
        options: [
          'After time runs out',
          'After pins fall',
          'After two throws or a strike',
          'After one throw',
        ],
        correct: 2,
      },
      {
        text: 'How many frames are in a game?',
        options: ['12', '9', '8', '10'],
        correct: 3,
      },
      {
        text: 'What happens after a strike in scoring?',
        options: [
          'No points added',
          'Frame repeats',
          'Next two throws are added as bonus',
          'Game ends',
        ],
        correct: 2,
      },
    ],
  },
  {
    title: 'Level 3 — Situations',
    questions: [
      {
        text: 'You hit 9 pins, then 1 pin — what is it?',
        options: ['Spare', 'Split', 'Strike', 'Miss'],
        correct: 0,
      },
      {
        text: 'You hit no pins on first throw, all on second — result?',
        options: ['Strike', 'Spare', 'Repeat', 'Zero'],
        correct: 1,
      },
      {
        text: 'Ball goes into the gutter — what happens?',
        options: ['Retry', 'Half points', 'Counts as zero pins', 'Frame resets'],
        correct: 2,
      },
      {
        text: 'Pins fall after delay — are they counted?',
        options: [
          'Only first pin',
          'No',
          'Yes, if part of the same throw',
          'Only half',
        ],
        correct: 2,
      },
      {
        text: 'You knock down 5 pins twice — total?',
        options: ['5', '15', '10 (spare)', '10 + bonus'],
        correct: 2,
      },
      {
        text: 'Ball hits side and returns — result?',
        options: ['Invalid', 'Retry', 'Half score', 'Counts if pins fall'],
        correct: 3,
      },
    ],
  },
  {
    title: 'Level 4 — Advanced Understanding',
    questions: [
      {
        text: 'Why aim slightly off-center?',
        options: ['Easier control', 'Better angle for pin action', 'Faster throw', 'Less effort'],
        correct: 1,
      },
      {
        text: 'Which factor affects ball movement most?',
        options: ['Color', 'Size', 'Weight', 'Spin'],
        correct: 3,
      },
      {
        text: 'What helps control direction?',
        options: ['Shoes', 'Lane color', 'Balance and release', 'Speed only'],
        correct: 2,
      },
      {
        text: 'Why use different balls?',
        options: ['Decoration', 'Color matching', 'Noise', 'Weight and grip differences'],
        correct: 3,
      },
      {
        text: 'What is important for consistent throws?',
        options: [
          'Same position and motion',
          'Faster speed',
          'Random movement',
          'Stronger force',
        ],
        correct: 0,
      },
      {
        text: 'What affects pin reaction most?',
        options: ['Sound', 'Time', 'Light', 'Ball angle and speed'],
        correct: 3,
      },
    ],
  },
  {
    title: 'Level 5 — Expert Situations',
    questions: [
      {
        text: 'You leave two far pins (split) — best approach?',
        options: ['Restart', 'Throw faster', 'Aim at one pin edge', 'Straight center'],
        correct: 2,
      },
      {
        text: 'Why adjust position on the approach?',
        options: ['For style', 'To move faster', 'To reduce steps', 'To change angle of entry'],
        correct: 3,
      },
      {
        text: 'Lane feels slippery — what to adjust?',
        options: ['Nothing', 'Throw harder', 'Change score', 'Slow down and adjust release'],
        correct: 3,
      },
      {
        text: 'Pins often stay on one side — reason?',
        options: ['Random', 'Weak lighting', 'Ball color', 'Incorrect angle of entry'],
        correct: 3,
      },
      {
        text: 'What improves accuracy over time?',
        options: ['Faster play', 'Stronger ball', 'Repetition and control', 'Random throws'],
        correct: 2,
      },
      {
        text: 'Best way to recover after a miss?',
        options: ['Throw harder', 'Ignore', 'Repeat same throw', 'Adjust approach and angle'],
        correct: 3,
      },
    ],
  },
  {
    title: 'Level 6 — Precision Situations',
    questions: [
      {
        text: 'You consistently hit the head pin but leave corner pins. What should you adjust?',
        options: ['Increase speed', 'Use heavier ball', 'Change entry angle', 'Stand still'],
        correct: 2,
      },
      {
        text: 'Ball goes too straight with no curve — what to change?',
        options: ['Throw slower', 'Add spin on release', 'Aim center', 'Reduce steps'],
        correct: 1,
      },
      {
        text: 'You release too early — what happens?',
        options: ['Better control', 'Ball curves more', 'More power', 'Loss of accuracy'],
        correct: 3,
      },
      {
        text: 'Why is follow-through important?',
        options: [
          'Improves direction control',
          'Looks better',
          'Adds speed',
          'Reduces steps',
        ],
        correct: 0,
      },
      {
        text: 'Pins scatter weakly after impact — reason?',
        options: [
          'Lane color',
          'Too many steps',
          'Low ball energy or poor angle',
          'Too much spin',
        ],
        correct: 2,
      },
      {
        text: 'Best position for stable throw?',
        options: ['Lean forward', 'Fast approach', 'Balanced posture', 'Random stance'],
        correct: 2,
      },
    ],
  },
  {
    title: 'Level 7 — Lane Reading',
    questions: [
      {
        text: 'Ball drifts left more than expected — what to adjust?',
        options: ['Throw harder', 'Aim more right', 'Walk faster', 'Use lighter ball'],
        correct: 1,
      },
      {
        text: 'Lane feels dry — ball reaction?',
        options: [
          'Stronger hook earlier',
          'Less movement',
          'Slower motion',
          'No change',
        ],
        correct: 0,
      },
      {
        text: 'Lane feels oily — result?',
        options: ['Faster hook', 'More grip', 'Higher bounce', 'Less hook (slides longer)'],
        correct: 3,
      },
      {
        text: 'Why change starting position slightly?',
        options: ['Reduce speed', 'Adjust trajectory path', 'Style', 'Comfort'],
        correct: 1,
      },
      {
        text: 'Ball misses right side repeatedly — reason?',
        options: ['Too many steps', 'Too slow', 'Incorrect aim or release angle', 'Too much hook'],
        correct: 2,
      },
      {
        text: 'What helps adapt to lane changes?',
        options: [
          'Same throw always',
          'Faster movement',
          'Ignoring result',
          'Observing ball reaction',
        ],
        correct: 3,
      },
    ],
  },
  {
    title: 'Level 8 — Control & Technique',
    questions: [
      {
        text: 'Why keep steps consistent?',
        options: ['Faster throw', 'Looks clean', 'Builds rhythm and accuracy', 'Less effort'],
        correct: 2,
      },
      {
        text: 'What defines a clean release?',
        options: [
          'Fast throw',
          'Smooth motion without force',
          'Loud impact',
          'Strong grip',
        ],
        correct: 1,
      },
      {
        text: 'What happens with too much force?',
        options: ['Better control', 'More spin', 'Better score', 'Reduced accuracy'],
        correct: 3,
      },
      {
        text: 'Why focus on timing?',
        options: [
          'For style',
          'For speed',
          'For balance only',
          'For coordinated movement and control',
        ],
        correct: 3,
      },
      {
        text: 'What improves consistency most?',
        options: [
          'Changing balls',
          'Faster play',
          'Repeating controlled motion',
          'Random adjustments',
        ],
        correct: 2,
      },
      {
        text: 'What helps maintain direction?',
        options: ['Faster steps', 'Arm swing alignment', 'Strong grip', 'Heavy ball'],
        correct: 1,
      },
    ],
  },
  {
    title: 'Level 9 — Strategic Thinking',
    questions: [
      {
        text: 'You leave a single corner pin — best move?',
        options: ['Throw harder', 'Restart', 'Aim directly at it', 'Use slight angle approach'],
        correct: 3,
      },
      {
        text: 'Why avoid straight center throws every time?',
        options: ['Hard to aim', 'Too simple', 'Less effective pin action', 'Too slow'],
        correct: 2,
      },
      {
        text: 'What creates stronger pin movement?',
        options: ['Ball color', 'Faster steps', 'Entry angle into pins', 'Straight hit'],
        correct: 2,
      },
      {
        text: 'You miss same way repeatedly — what to do?',
        options: ['Throw faster', 'Repeat same throw', 'Ignore', 'Adjust position or angle'],
        correct: 3,
      },
      {
        text: 'Why control speed carefully?',
        options: [
          'For style',
          'For timing only',
          'For balance between power and accuracy',
          'For noise',
        ],
        correct: 2,
      },
      {
        text: 'What is key for spare attempts?',
        options: ['Maximum force', 'Precision targeting', 'Fast movement', 'Random throw'],
        correct: 1,
      },
    ],
  },
  {
    title: 'Level 10 — Expert Control',
    questions: [
      {
        text: 'What defines a high-level throw?',
        options: [
          'Strong grip',
          'Maximum speed',
          'Controlled motion and precision',
          'Loud impact',
        ],
        correct: 2,
      },
      {
        text: 'Why adjust both position and angle together?',
        options: ['For speed', 'For comfort', 'For full trajectory control', 'For balance only'],
        correct: 2,
      },
      {
        text: 'What is the biggest mistake in advanced play?',
        options: ['Too much thinking', 'Slow movement', 'Ignoring consistency', 'Light ball'],
        correct: 2,
      },
      {
        text: 'Why is repeatability important?',
        options: ['Faster throws', 'Builds predictable results', 'Less effort', 'Looks clean'],
        correct: 1,
      },
      {
        text: 'What leads to stable results over time?',
        options: ['Strong force', 'Quick throws', 'Controlled adjustments', 'Random variation'],
        correct: 2,
      },
      {
        text: 'What separates advanced from basic level?',
        options: [
          'Stronger throw',
          'Faster movement',
          'More steps',
          'Better understanding of angle and control',
        ],
        correct: 3,
      },
    ],
  },
  {
    title: 'Level 11 — Advanced Scenarios',
    questions: [
      {
        text: 'You consistently over-hook — what to adjust?',
        options: ['Add more spin', 'Aim further left', 'Reduce spin or change angle', 'Throw harder'],
        correct: 2,
      },
      {
        text: 'Ball hits too light (weak contact) — reason?',
        options: [
          'Good angle',
          'Weak entry angle or low energy',
          'Too much spin',
          'Perfect timing',
        ],
        correct: 1,
      },
      {
        text: 'Why control release timing precisely?',
        options: ['For style', 'For speed', 'For consistent ball behavior', 'For balance only'],
        correct: 2,
      },
      {
        text: 'What causes inconsistent direction?',
        options: [
          'Stable steps',
          'Controlled motion',
          'Irregular release timing',
          'Good posture',
        ],
        correct: 2,
      },
      {
        text: 'Best adjustment after repeated misses?',
        options: [
          'Repeat same throw',
          'Increase speed',
          'Change position and targeting',
          'Ignore result',
        ],
        correct: 2,
      },
      {
        text: 'Why analyze previous throws?',
        options: ['For fun', 'To adjust next decisions', 'To move faster', 'To reduce effort'],
        correct: 1,
      },
    ],
  },
  {
    title: 'Level 12 — Precision Control',
    questions: [
      {
        text: 'What improves targeting accuracy most?',
        options: ['Faster throw', 'Visual focus and alignment', 'Strong grip', 'Random movement'],
        correct: 1,
      },
      {
        text: 'Why keep arm swing consistent?',
        options: ['Looks clean', 'Controls ball direction', 'Adds power', 'Reduces steps'],
        correct: 1,
      },
      {
        text: 'Ball lands too early — adjustment?',
        options: ['Shorten steps', 'Adjust release timing forward', 'Throw slower', 'Aim center'],
        correct: 1,
      },
      {
        text: 'Why avoid sudden changes in technique?',
        options: ['For comfort', 'For speed', 'Reduces consistency', 'Looks better'],
        correct: 2,
      },
      {
        text: 'What defines good balance?',
        options: [
          'Lean forward',
          'Stable body control during motion',
          'Fast movement',
          'Strong throw',
        ],
        correct: 1,
      },
      {
        text: 'What creates smoother motion?',
        options: ['Tension', 'Controlled relaxed movement', 'Speed', 'Force'],
        correct: 1,
      },
    ],
  },
  {
    title: 'Level 13 — Deep Understanding',
    questions: [
      {
        text: 'Why does angle matter more than speed?',
        options: [
          'Looks better',
          'Affects pin interaction directly',
          'Easier to control',
          'Faster result',
        ],
        correct: 1,
      },
      {
        text: 'What is key for consistent results?',
        options: [
          'Random variation',
          'Repeating same mechanics',
          'Changing speed',
          'Strong grip',
        ],
        correct: 1,
      },
      {
        text: 'Why adjust based on lane reaction?',
        options: ['For fun', 'For speed', 'To improve accuracy and control', 'For balance'],
        correct: 2,
      },
      {
        text: 'Ball deflects too much — reason?',
        options: ['Perfect angle', 'Too much energy', 'Weak entry or angle issue', 'Good timing'],
        correct: 2,
      },
      {
        text: 'What defines efficient motion?',
        options: ['Fast steps', 'Minimal unnecessary movement', 'Strong throw', 'Loud release'],
        correct: 1,
      },
      {
        text: 'Why control both speed and spin?',
        options: [
          'For style',
          'For full control of trajectory and impact',
          'For faster play',
          'For balance',
        ],
        correct: 1,
      },
    ],
  },
  {
    title: 'Level 14 — Master Level',
    questions: [
      {
        text: 'What defines mastery in bowling control?',
        options: ['Speed', 'Power', 'Consistency and precision', 'Force'],
        correct: 2,
      },
      {
        text: 'Why small adjustments matter most?',
        options: [
          'They look better',
          'They fine-tune results precisely',
          'They increase speed',
          'They reduce steps',
        ],
        correct: 1,
      },
      {
        text: 'What is the hardest skill to maintain?',
        options: ['Speed', 'Power', 'Consistency over time', 'Grip'],
        correct: 2,
      },
      {
        text: 'Why control mental focus?',
        options: ['For fun', 'For stable performance', 'For speed', 'For balance'],
        correct: 1,
      },
      {
        text: 'What improves long-term performance?',
        options: [
          'Random practice',
          'Controlled repetition and adjustment',
          'Faster throws',
          'Strong grip',
        ],
        correct: 1,
      },
      {
        text: 'What defines a perfect execution?',
        options: [
          'Maximum power',
          'Fast motion',
          'Balanced technique and control',
          'Loud impact',
        ],
        correct: 2,
      },
    ],
  },
];
