const fs = require('fs');
let content = fs.readFileSync('src/data/jabalpurBlogsData.ts', 'utf8');

content = content.replace(
  "While most government mushroom training is conducted in person due to the hands-on nature of cultivation, several agricultural institutes publish online resources, recorded sessions, and e-learning material through platforms linked to ICAR and state agricultural universities. This page outlines what online options exist and where they fall short compared to in-person, hands-on training.",
  "Most government mushroom training happens in person because you need hands-on practice. However, some farming institutes share online resources and recorded classes. You can find these on websites linked to ICAR and state universities. This page explains the online options and why hands-on training is often better."
);
content = content.replace(
  "Looking for government-backed mushroom farming training online? Here is what's available and how it compares to in-person courses.",
  "Looking for government mushroom farming training online? See what is available and how it compares to in-person classes."
);
content = content.replace(
  "Online resources are useful for understanding theory, but most experienced trainers recommend hands-on practice for the practical skills involved, like recognising contamination.",
  "Online learning is good for the basics. But trainers say you need hands-on practice for skills like spotting bad molds."
);
content = content.replace(
  "ICAR-affiliated institutes and state agricultural universities sometimes publish guides and recorded sessions on their official websites.",
  "State farming universities and ICAR institutes often put guides and videos on their websites."
);
content = content.replace(
  "Yes, reviewing basic concepts online before attending hands-on training can help you get more out of the practical sessions.",
  "Yes! Learning the basics online first can help you understand more during the hands-on classes."
);

fs.writeFileSync('src/data/jabalpurBlogsData.ts', content, 'utf8');
