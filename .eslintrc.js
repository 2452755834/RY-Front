module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    //这里写自定义规则
    // 允许无括号箭头功能 allow paren-less arrow functions
    'arrow-parens': 0,
    // 生成器函数前后空格
    'generator-star-spacing': 0,
    // production 环境 不允许出现debugger语句
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 强制缩进风格为空格2
    indent: ['error', 2],
    // 强制函数方法前需要一个空格
    // "space-before-function-paren": [2, "always"],
    // 禁止重复的函数声明
    'no-func-assign': 2,
    // 禁止无效的this，只能用在构造器，类，对象字面量
    'no-invalid-this': 2,
    // 不能有不规则的空格
    'no-irregular-whitespace': 2,
    // 空行最多不能超过2行
    'no-multiple-empty-lines': [1, { max: 2 }],
    // 禁止重复声明变量
    'no-redeclare': 2,
    // 函数调用时 函数名与()之间不能有空格
    'no-spaced-func': 2,
    // switch语句最后必须有default
    'default-case': 2,
    // 必须使用全等
    eqeqeq: 2,
    // 不能用多余的空格
    'no-multi-spaces': 2,
    // 一行结束后面不要有空格
    'no-trailing-spaces': 2,
    'vue/html-closing-bracket-newline': 2, // 结束标签换行（包括多个值时）
    // 强制vue每行最大的属性数目
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 3, //单行每行不超过10个属性
        multiline: {
          //多行每行不能超过一个，而且不允许在多行的情况下第一行有属性
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    // 格式对齐配置
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: false,
        ignores: [],
      },
    ],
    // 对Vue组件中的name属性强制使用特定大小写 kebab-case '-'
    'vue/name-property-casing': ['error', 'PascalCase'],
    //强制getter/setter成对出现在对象中
    'accessor-pairs': 2,
    //在箭头功能的箭头之前/之后需要空格
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    //强制在块内使用空格
    'block-spacing': [2, 'always'],
    //强制使用一种真正的花括号样式 花括号后缩进
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    //驼峰
    camelcase: [
      0,
      {
        properties: 'always', //对属性名称强制使用驼峰样式
      },
    ],
    //逗号结尾
    'comma-dangle': [2, 'never'],
    //加强逗号之间的间距
    'comma-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ],
    //逗号样式
    'comma-style': [2, 'last'], //（默认）在数组元素，对象属性或变量声明的同一行之后和同一行需要逗号
    //验证super()在构造函数中的调用
    'constructor-super': 2,
    //强制在模板字符串中使用间距
    //省略花括号的块
    curly: [2, 'multi-line'],
    //表达式中的点之前或之后放置换行符
    'dot-location': [2, 'property'], //点跟随属性值
    //在非空文件的末尾强制执行至少一个换行符
    'eol-last': 2,
    //使用全等 允许判断nulll的时候用==
    // 'eqeqeq':  ["error", "always"],
    //在生成器函数中的*周围加空格
    'generator-star-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    //强制执行回调错误处理
    'handle-callback-err': [2, '^(err|error)$'],
    //缩进
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    //强制在JSX属性中一致使用双引号或单引号。
    'jsx-quotes': [2, 'prefer-single'], //对不包含单引号的所有JSX属性值强制使用单引号
    //在对象文字属性中的键和值之间强制保持一致的间距
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    //在关键字前后强制保持一致的间距
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    //造函数名称以大写字母开头
    'new-cap': [
      2,
      {
        newIsCap: true, //要求new使用大写开头的函数来调用所有运算符。
        capIsNew: false, //要求所有大写字母开头的函数都必须由new运算符调用
      },
    ],
    //调用不带参数的构造函数时需要括号
    'new-parens': 2,
    //禁止Array构造函数
    'no-array-constructor': 2,
    //禁止使用的鼓励使用过时和次优码arguments.caller和arguments.callee
    'no-caller': 2,
    //禁止使用console
    'no-console': 'off',
    //禁止修改类声明的变量
    'no-class-assign': 2,
    //在条件语句中禁止赋值运算符
    'no-cond-assign': 2,
    //禁止修改使用const声明的变量
    'no-const-assign': 2,
    //禁止在正则表达式中使用控制字符
    'no-control-regex': 1,
    //禁止删除变量
    'no-delete-var': 2,
    // 禁止在function定义中使用重复的参数
    'no-dupe-args': 2,
    //禁止class中使用重复名称
    'no-dupe-class-members': 2,
    //禁止在对象文字中使用重复键
    'no-dupe-keys': 2,
    // 不允许在case语句子句中使用重复的测试表达式switch
    'no-duplicate-case': 2,
    //禁止在正则表达式中使用空字符类
    'no-empty-character-class': 2,
    //禁止使用空的销毁模式
    // 'no-empty-pattern': 2,
    //禁止eval（）
    'no-eval': 1,
    //禁止在catch子句中重新分配异常
    'no-ex-assign': 2,
    //禁止覆盖了一个内置方法
    'no-extend-native': 2,
    //禁止不必要的功能绑定
    'no-extra-bind': 2,
    //禁止不必要的布尔类型转换
    'no-extra-boolean-cast': 2,
    //禁止不必要的括号
    'no-extra-parens': [2, 'functions'], //仅在函数表达式周围禁止不必要的括号
    //case 加break
    'no-fallthrough': 2,
    //禁止浮动小数 .5
    'no-floating-decimal': 2,
    //禁止重新分配function声明
    'no-func-assign': 2,
    //禁止隐含eval（）
    'no-implied-eval': 2,
    //不允许function在嵌套块中进行声明
    'no-inner-declarations': [2, 'functions'],
    //禁止在RegExp构造函数中使用无效的正则表达式字符串
    'no-invalid-regexp': 2,
    //禁止不规则的空格
    'no-irregular-whitespace': 2,
    //防止由于使用该__iterator__属性而引起的错误
    'no-iterator': 2,
    //禁止使用标签作为变量名
    'no-label-var': 2,
    //禁止带标签的语句
    'no-labels': [
      2,
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ],
    //禁止不必要的嵌套块
    'no-lone-blocks': 2,
    //禁止使用空格和制表符进行缩进
    'no-mixed-spaces-and-tabs': 2,
    //禁止多个空格
    'no-multi-spaces': 2,
    //禁止多行字符串
    'no-multi-str': 2,
    //禁止多行空行
    'no-multiple-empty-lines': [
      2,
      {
        max: 1,
      },
    ],
    //禁止重新分配window
    'no-native-reassign': 2,
    //不允许在in表达式中取反左操作数
    'no-negated-in-lhs': 2,
    //禁止Object构造函数
    // 'no-new-object': 2,
    //消除对new require表达式的使用
    // 'no-new-require': 2,
    //禁止符号构造器
    // 'no-new-symbol': 2,
    //禁止原始包装器实例
    // 'no-new-wrappers': 2,
    //禁止将全局对象属性作为函数调用
    'no-obj-calls': 2,
    // 'no-octal': 2,
    //禁止在字符串文字中使用八进制转义序列
    // 'no-octal-escape': 2,
    //使用__dirname和__filename（no-path-concat）时禁止字符串连接
    // 'no-path-concat': 2,
    //禁止使用__proto__
    // 'no-proto': 2,
    //禁止重新声明变量
    'no-redeclare': 2,
    //禁止在正则表达式文字中使用多个空格
    'no-regex-spaces': 2,
    //禁止在return语句中进行赋值
    // 'no-return-assign': [2, 'except-parens'], //除非将它们括在括号中
    //禁止自我分配
    // 'no-self-assign': 2,
    //禁止自我比较
    'no-self-compare': 2,
    // 'no-sequences': 2,
    //禁止使用逗号运算符
    'no-shadow-restricted-names': 2,
    //不允许在函数标识符及其应用程序之间使用空格
    'no-spaced-func': 2,
    //禁止稀疏数组[,,]
    'no-sparse-arrays': 2,
    //在调用构造函数之前，禁止使用this
    'no-this-before-super': 2,
    // 限制可以抛出的异常
    // 'no-throw-literal': 2,
    // 禁止在行尾使用尾随空格
    'no-trailing-spaces': 2,
    //禁止未声明的变量
    'no-undef': 2,
    //禁止初始化为未定义
    // 'no-undef-init': 2,
    //禁止混淆多行表达式
    'no-unexpected-multiline': 2,
    //禁止未修改的循环条件
    'no-unmodified-loop-condition': 2,
    //存在更简单的选择时禁止三元运算符
    'no-unneeded-ternary': [
      2,
      {
        defaultAssignment: false,
      },
    ],
    'no-unreachable': 0,
    'no-unsafe-finally': 2,
    'no-unused-vars': [
      0,
      {
        vars: 'all',
        args: 'none',
      },
    ],
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-whitespace-before-property': 2,
    'no-with': 2,
    'one-var': [
      2,
      {
        initialized: 'never',
      },
    ],
    'operator-linebreak': [
      2,
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
        },
      },
    ],
    'padded-blocks': [2, 'never'],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],

    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false,
      },
    ],
    'spaced-comment': [
      2,
      'always',
      {
        markers: [
          'global',
          'globals',
          'eslint',
          'eslint-disable',
          '*package',
          '!',
          ',',
        ],
      },
    ],
    'template-curly-spacing': [2, 'never'],
    'use-isnan': 2,
    'valid-typeof': 2,
    'wrap-iife': [2, 'any'],
    'yield-star-spacing': [2, 'both'],
    yoda: [2, 'never'],
    'prefer-const': 2,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'object-curly-spacing': [
      2,
      'always',
      {
        objectsInObjects: false,
      },
    ],
    'array-bracket-spacing': [2, 'never'],
  }
}
