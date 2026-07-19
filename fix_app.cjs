const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Undo the sed: / } back to />}
code = code.replace(/\/ \}/g, '/>}');

// Now fix the `metaDesc="..." />>}` error.
// The regex in patch_app.cjs produced `<Route path="..." element={<Comp metaDesc="..." />>} />`
// Let's replace `/>>} />` with `/>} />`
code = code.replace(/\/>>\} \/>/g, '/>} />');
code = code.replace(/\/>>\}><\/Route>/g, '/>}></Route>');

fs.writeFileSync('src/App.tsx', code, 'utf8');
