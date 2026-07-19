const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// The incorrect replacement made it: `element={<Comp metaDesc="..." />>} />`
// Let's replace `/>>} />` with `/>} />`
code = code.replace(/\/>>\} \/>/g, '/>} />');
code = code.replace(/\/>>\}><\/Route>/g, '/>}></Route>');

// What if the regex produced `/>>} />` but we already did `sed` and it became `/>} />`?
// Wait, `<Comp metaDesc="..." />>} />` -> sed -> `<Comp metaDesc="..." /> } />`
// Then I reverted `/ }` to `/>}` -> `<Comp metaDesc="..." />>}` ?? No, `/> }` is not `/>}`.
// Let's just find `metaDesc="[^"]+"\s*\/>[> ]*\}(\s*\/>|\s*><\/Route>)`
code = code.replace(/metaDesc="([^"]+)"\s*\/>[> ]*\}(\s*\/>|\s*><\/Route>)/g, 'metaDesc="$1" />}$2');

fs.writeFileSync('src/App.tsx', code, 'utf8');
