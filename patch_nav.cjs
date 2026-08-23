const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

const replacement = `    ]
  },
  {
    name: "Test ₹1",
    href: "/test-payment",
    isExternal: false,
    icon: Zap
  }
];`;

content = content.replace(`    ]
  }
];`, replacement);

fs.writeFileSync('src/App.tsx', content, 'utf8');
