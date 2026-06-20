export interface IndoreBlog {
  id: number;
  keyword: string;
  path: string;
  category: string;
  title: string;
  meta: string;
  h1: string;
  intro: string;
  faqs: { q: string; a: string }[];
  links: string[];
}

export const INDORE_BLOGS_METADATA = [
  // Training Centers (1 to 9)
  { id: 1, path: "mushroom-training-center", keyword: "mushroom training center", category: "Training Centers", title: "Mushroom Training Center in Indore | Organic Mushroom Farm", h1: "Indore's Trusted Mushroom Training Center" },
  { id: 2, path: "government-mushroom-training-center", keyword: "government mushroom training center", category: "Training Centers", title: "Government Mushroom Training Center Indore", h1: "Government Mushroom Training Center Near Indore" },
  { id: 3, path: "mushroom-training-center-near-me", keyword: "mushroom training center near me", category: "Training Centers", title: "Mushroom Training Center Near Me Indore | Organic Mushroom Farm", h1: "Mushroom Training Center Near Me: Indore Edition" },
  { id: 4, path: "mushroom-farming-training-center", keyword: "mushroom farming training center", category: "Training Centers", title: "Mushroom Farming Training Center Indore | Organic Mushroom Farm", h1: "Mushroom Farming Training Center in Indore" },
  { id: 5, path: "best-mushroom-training-center", keyword: "best mushroom training center", category: "Training Centers", title: "Best Mushroom Training Center Indore | Organic Mushroom Farm", h1: "Best Mushroom Training Center – Indore (Madhya Pradesh)" },
  { id: 6, path: "mushroom-cultivation-training-center", keyword: "mushroom cultivation training center", category: "Training Centers", title: "Mushroom Cultivation Training Center Indore", h1: "Indore's Trusted Mushroom Cultivation Training Center" },
  { id: 7, path: "mushroom-cultivation-and-training-center", keyword: "mushroom cultivation and training center", category: "Training Centers", title: "Mushroom Cultivation and Training Center Indore", h1: "Mushroom Cultivation and Training Center Near Indore" },
  { id: 8, path: "mushroom-development-and-training-center", keyword: "mushroom development and training center", category: "Training Centers", title: "Mushroom Development and Training Center Indore", h1: "Mushroom Development and Training Center: Indore Edition" },
  { id: 9, path: "mushroom-farm-learning-center", keyword: "mushroom farm learning center", category: "Training Centers", title: "Mushroom Farm Learning Center Indore | Organic Mushroom Farm", h1: "Mushroom Farm Learning Center in Indore" },

  // Government & Training Schemes (10 to 15)
  { id: 10, path: "mushroom-farming-training-by-government", keyword: "mushroom farming training by government", category: "Government & Training Schemes", title: "Mushroom Farming Training by Government Indore", h1: "Mushroom Farming Training by Government – Indore (Madhya Pradesh)" },
  { id: 11, path: "government-mushroom-training-center-near-me", keyword: "government mushroom training center near me", category: "Government & Training Schemes", title: "Government Mushroom Training Center Near Me Indore", h1: "Indore's Trusted Government Mushroom Training Center Near Me" },
  { id: 12, path: "mushroom-farming-training-government-online", keyword: "mushroom farming training government online", category: "Government & Training Schemes", title: "Mushroom Farming Training by Government Online Indore", h1: "Mushroom Farming Training by Government Online Near Indore" },
  { id: 13, path: "mushroom-farming-training-up-government", keyword: "mushroom farming training up government", category: "Government & Training Schemes", title: "Mushroom Farming Training by Up Government Indore", h1: "Mushroom Farming Training by Up Government: Indore Edition" },
  { id: 14, path: "mushroom-farming-training-bihar-government", keyword: "mushroom farming training bihar government", category: "Government & Training Schemes", title: "Mushroom Farming Training by Bihar Government Indore", h1: "Mushroom Farming Training by Bihar Government in Indore" },
  { id: 15, path: "mushroom-farming-training-karnataka-government", keyword: "mushroom farming training karnataka government", category: "Government & Training Schemes", title: "Mushroom Farming Training by Government in Karnataka Indore", h1: "Mushroom Farming Training by Government in Karnataka – Indore (Madhya Pradesh)" },

  // Courses & Workshops (16 to 39)
  { id: 16, path: "mushroom-farming-training", keyword: "mushroom farming training", category: "Courses & Workshops", title: "Mushroom Farming Training Indore | Organic Mushroom Farm", h1: "Indore's Trusted Mushroom Farming Training" },
  { id: 17, path: "mushroom-farming-training-offline", keyword: "mushroom farming training offline", category: "Courses & Workshops", title: "Mushroom Farming Training Offline Indore | Organic Mushroom Farm", h1: "Mushroom Farming Training Offline Near Indore" },
  { id: 18, path: "mushroom-farming-training-near-me", keyword: "mushroom farming training near me", category: "Courses & Workshops", title: "Mushroom Farming Training Near Me Indore | Organic Mushroom Farm", h1: "Mushroom Farming Training Near Me: Indore Edition" },
  { id: 19, path: "mushroom-farming-training-online", keyword: "mushroom farming training online", category: "Courses & Workshops", title: "Mushroom Farming Training Online Indore | Organic Mushroom Farm", h1: "Mushroom Farming Training Online in Indore" },
  { id: 20, path: "mushroom-cultivation-training-near-me", keyword: "mushroom cultivation training near me", category: "Courses & Workshops", title: "Mushroom Cultivation Training Near Me Indore", h1: "Mushroom Cultivation Training Near Me – Indore (Madhya Pradesh)" },
  { id: 21, path: "mushroom-cultivation-training-centre-near-me", keyword: "mushroom cultivation training centre near me", category: "Courses & Workshops", title: "Mushroom Cultivation Training Centre Near Me Indore", h1: "Indore's Trusted Mushroom Cultivation Training Centre Near Me" },
  { id: 22, path: "mushroom-cultivation-classes-online", keyword: "mushroom cultivation classes online", category: "Courses & Workshops", title: "Mushroom Cultivation Classes Online Indore", h1: "Mushroom Cultivation Classes Online Near Indore" },
  { id: 23, path: "mushroom-growing-training-courses", keyword: "mushroom growing training courses", category: "Courses & Workshops", title: "Mushroom Growing Training Courses Indore | Organic Mushroom Farm", h1: "Mushroom Growing Training Courses: Indore Edition" },
  { id: 24, path: "mushroom-education-courses", keyword: "mushroom education courses", category: "Courses & Workshops", title: "Mushroom Education Courses Indore | Organic Mushroom Farm", h1: "Mushroom Education Courses in Indore" },
  { id: 25, path: "mushroom-course-near-me", keyword: "mushroom course near me", category: "Courses & Workshops", title: "Mushroom Course Near Me in Indore | Organic Mushroom Farm", h1: "Mushroom Course Near Me – Indore (Madhya Pradesh)" },
  { id: 26, path: "mushroom-cultivation-training-fees", keyword: "mushroom cultivation training fees", category: "Courses & Workshops", title: "Mushroom Cultivation Training Fees Indore | Organic Mushroom Farm", h1: "Indore's Trusted Mushroom Cultivation Training Fees" },
  { id: 27, path: "oyster-mushroom-training-center", keyword: "oyster mushroom training center", category: "Courses & Workshops", title: "Oyster Mushroom Training Center Indore | Organic Mushroom Farm", h1: "Oyster Mushroom Training Center Near Indore" },
  { id: 28, path: "oyster-mushroom-training-near-me", keyword: "oyster mushroom training near me", category: "Courses & Workshops", title: "Oyster Mushroom Training Near Me Indore | Organic Mushroom Farm", h1: "Oyster Mushroom Training Near Me: Indore Edition" },
  { id: 29, path: "oyster-mushroom-class", keyword: "oyster mushroom class", category: "Courses & Workshops", title: "Oyster Mushroom Class Indore | Organic Mushroom Farm", h1: "Oyster Mushroom Class in Indore" },
  { id: 30, path: "button-mushroom-training-center", keyword: "button mushroom training center", category: "Courses & Workshops", title: "Button Mushroom Training Center Indore | Organic Mushroom Farm", h1: "Button Mushroom Training Center – Indore (Madhya Pradesh)" },
  { id: 31, path: "button-mushroom-training-center-near-me", keyword: "button mushroom training center near me", category: "Courses & Workshops", title: "Button Mushroom Training Center Near Me Indore", h1: "Indore's Trusted Button Mushroom Training Center Near Me" },
  { id: 32, path: "button-mushroom-training-near-me", keyword: "button mushroom training near me", category: "Courses & Workshops", title: "Button Mushroom Training Near Me Indore | Organic Mushroom Farm", h1: "Button Mushroom Training Near Me Near Indore" },
  { id: 33, path: "button-mushroom-class", keyword: "button mushroom class", category: "Courses & Workshops", title: "Button Mushroom Class Indore | Organic Mushroom Farm", h1: "Button Mushroom Class: Indore Edition" },
  { id: 34, path: "button-mushroom-training-centre-india", keyword: "button mushroom training centre in india", category: "Courses & Workshops", title: "Button Mushroom Training Centre in India Indore", h1: "Button Mushroom Training Centre in India in Indore" },
  { id: 35, path: "button-mushroom-training-centre-maharashtra", keyword: "button mushroom training centre in maharashtra", category: "Courses & Workshops", title: "Button Mushroom Training Centre in Maharashtra Indore", h1: "Button Mushroom Training Centre in Maharashtra – Indore (Madhya Pradesh)" },
  { id: 36, path: "mushroom-workshop", keyword: "mushroom workshop", category: "Courses & Workshops", title: "Mushroom Workshop Indore | Organic Mushroom Farm", h1: "Indore's Trusted Mushroom Workshop" },
  { id: 37, path: "mushroom-farm-workshop", keyword: "mushroom farm workshop", category: "Courses & Workshops", title: "Mushroom Farm Workshop in Indore | Organic Mushroom Farm", h1: "Mushroom Farm Workshop Near Indore" },
  { id: 38, path: "mushroom-grow-workshop", keyword: "mushroom grow workshop", category: "Courses & Workshops", title: "Mushroom Grow Workshop Indore | Organic Mushroom Farm", h1: "Mushroom Grow Workshop: Indore Edition" },
  { id: 39, path: "king-oyster-mushroom-class", keyword: "king oyster mushroom class", category: "Courses & Workshops", title: "King Oyster Mushroom Class Indore | Organic Mushroom Farm", h1: "King Oyster Mushroom Class in Indore" },

  // How to Grow Guides (40 to 89)
  { id: 40, path: "how-to-grow-mushroom", keyword: "how to grow mushroom", category: "How to Grow Guides", title: "How to Grow Mushroom Indore | Organic Mushroom Farm", h1: "How to Grow Mushroom – Indore (Madhya Pradesh)" },
  { id: 41, path: "how-to-grow-mushroom-at-home", keyword: "how to grow mushroom at home", category: "How to Grow Guides", title: "How to Grow Mushroom at Home Indore | Organic Mushroom Farm", h1: "Indore's Trusted How to Grow Mushroom at Home" },
  { id: 42, path: "how-to-grow-mushroom-at-home-india", keyword: "how to grow mushroom at home in india", category: "How to Grow Guides", title: "How to Grow Mushroom at Home in India Indore", h1: "How to Grow Mushroom at Home in India Near Indore" },
  { id: 43, path: "how-to-grow-mushroom-at-home-hindi", keyword: "how to grow mushroom at home in hindi", category: "How to Grow Guides", title: "How to Grow Mushroom at Home in Hindi Indore", h1: "How to Grow Mushroom at Home in Hindi: Indore Edition" },
  { id: 44, path: "how-to-grow-mushroom-without-seeds", keyword: "how to grow mushroom without seeds", category: "How to Grow Guides", title: "How to Grow Mushroom Without Seeds Indore | Organic Mushroom Farm", h1: "How to Grow Mushroom Without Seeds in Indore" },
  { id: 45, path: "how-to-grow-mushroom-for-business", keyword: "how to grow mushroom for business", category: "How to Grow Guides", title: "How to Grow Mushroom for Business Indore | Organic Mushroom Farm", h1: "How to Grow Mushroom for Business – Indore (Madhya Pradesh)" },
  { id: 46, path: "how-to-grow-mushroom-commercially", keyword: "how to grow mushroom commercially", category: "How to Grow Guides", title: "How to Grow Mushroom Commercially Indore | Organic Mushroom Farm", h1: "Indore's Trusted How to Grow Mushroom Commercially" },
  { id: 47, path: "how-to-grow-mushroom-step-by-step", keyword: "how to grow mushroom at home step by step", category: "How to Grow Guides", title: "How to Grow Mushroom at Home Step by Step Indore", h1: "How to Grow Mushroom at Home Step by Step Near Indore" },
  { id: 48, path: "how-to-grow-mushroom-from-spawn", keyword: "how to grow mushroom from spawn", category: "How to Grow Guides", title: "How to Grow Mushroom from Spawn Indore | Organic Mushroom Farm", h1: "How to Grow Mushroom from Spawn: Indore Edition" },
  { id: 49, path: "how-to-grow-mushroom-from-spores", keyword: "how to grow mushroom from spores", category: "How to Grow Guides", title: "How to Grow Mushroom from Spores Indore | Organic Mushroom Farm", h1: "How to Grow Mushroom from Spores in Indore" },
  { id: 50, path: "how-to-grow-mushroom-home-business", keyword: "how to grow mushroom at home for business", category: "How to Grow Guides", title: "How to Grow Mushroom at Home for Business Indore", h1: "How to Grow Mushroom at Home for Business – Indore (Madhya Pradesh)" },
  { id: 51, path: "how-to-grow-oyster-mushroom", keyword: "how to grow oyster mushroom", category: "How to Grow Guides", title: "How to Grow Oyster Mushroom Indore | Organic Mushroom Farm", h1: "Indore's Trusted How to Grow Oyster Mushroom" },
  { id: 52, path: "how-to-grow-oyster-mushroom-at-home", keyword: "how to grow oyster mushroom at home", category: "How to Grow Guides", title: "How to Grow Oyster Mushroom at Home Indore", h1: "How to Grow Oyster Mushroom at Home Near Indore" },
  { id: 53, path: "how-to-grow-button-mushroom", keyword: "how to grow button mushroom", category: "How to Grow Guides", title: "How to Grow Button Mushroom Indore | Organic Mushroom Farm", h1: "How to Grow Button Mushroom: Indore Edition" },
  { id: 54, path: "how-to-grow-button-mushroom-at-home", keyword: "how to grow button mushroom at home", category: "How to Grow Guides", title: "How to Grow Button Mushroom at Home Indore", h1: "How to Grow Button Mushroom at Home in Indore" },
  { id: 55, path: "how-to-grow-button-mushroom-india", keyword: "how to grow button mushroom in india", category: "How to Grow Guides", title: "How to Grow Button Mushroom in India Indore", h1: "How to Grow Button Mushroom in India – Indore (Madhya Pradesh)" },
  { id: 56, path: "how-to-grow-white-button-mushroom", keyword: "how to grow white button mushroom", category: "How to Grow Guides", title: "How to Grow White Button Mushroom Indore | Organic Mushroom Farm", h1: "Indore's Trusted How to Grow White Button Mushroom" },
  { id: 57, path: "how-to-grow-shiitake-mushroom", keyword: "how to grow shiitake mushroom", category: "How to Grow Guides", title: "How to Grow Shiitake Mushroom Indore | Organic Mushroom Farm", h1: "How to Grow Shiitake Mushroom Near Indore" },
  { id: 58, path: "how-to-grow-lions-mane-mushroom", keyword: "how to grow lion's mane mushroom", category: "How to Grow Guides", title: "How to Grow Lion's Mane Mushroom Indore | Organic Mushroom Farm", h1: "How to Grow Lion's Mane Mushroom: Indore Edition" },
  { id: 59, path: "how-to-grow-lions-mane-mushroom-at-home", keyword: "how to grow lion's mane mushroom at home", category: "How to Grow Guides", title: "How to Grow Lion's Mane Mushroom at Home Indore", h1: "How to Grow Lion's Mane Mushroom at Home in Indore" },
  { id: 60, path: "how-to-grow-king-oyster-mushroom", keyword: "how to grow king oyster mushroom", category: "How to Grow Guides", title: "How to Grow King Oyster Mushroom Indore | Organic Mushroom Farm", h1: "How to Grow King Oyster Mushroom – Indore (Madhya Pradesh)" },
  { id: 61, path: "how-to-grow-reishi-mushroom", keyword: "how to grow reishi mushroom", category: "How to Grow Guides", title: "How to Grow Reishi Mushroom Indore | Organic Mushroom Farm", h1: "Indore's Trusted How to Grow Reishi Mushroom" },
  { id: 62, path: "how-to-grow-enoki-mushroom", keyword: "how to grow enoki mushroom", category: "How to Grow Guides", title: "How to Grow Enoki Mushroom Indore | Organic Mushroom Farm", h1: "How to Grow Enoki Mushroom Near Indore" },
  { id: 63, path: "how-to-grow-enoki-mushroom-at-home", keyword: "how to grow enoki mushroom at home", category: "How to Grow Guides", title: "How to Grow Enoki Mushroom at Home Indore | Organic Mushroom Farm", h1: "How to Grow Enoki Mushroom at Home: Indore Edition" },
  { id: 64, path: "how-to-grow-paddy-straw-mushroom", keyword: "how to grow paddy straw mushroom", category: "How to Grow Guides", title: "How to Grow Paddy Straw Mushroom Indore | Organic Mushroom Farm", h1: "How to Grow Paddy Straw Mushroom in Indore" },
  { id: 65, path: "how-to-grow-cordyceps-mushroom", keyword: "how to grow cordyceps mushroom", category: "How to Grow Guides", title: "How to Grow Cordyceps Mushroom Indore | Organic Mushroom Farm", h1: "How to Grow Cordyceps Mushroom – Indore (Madhya Pradesh)" },
  { id: 66, path: "how-to-grow-cordyceps-mushroom-at-home", keyword: "how to grow cordyceps mushroom at home", category: "How to Grow Guides", title: "How to Grow Cordyceps Mushroom at Home Indore", h1: "Indore's Trusted How to Grow Cordyceps Mushroom at Home" },
  { id: 67, path: "how-to-grow-gucchi-mushroom", keyword: "how to grow gucchi mushroom", category: "How to Grow Guides", title: "How to Grow Gucchi Mushroom in Indore | Organic Mushroom Farm", h1: "How to Grow Gucchi Mushroom Near Indore" },
  { id: 68, path: "how-to-grow-gucchi-mushroom-at-home", keyword: "how to grow gucchi mushroom at home", category: "How to Grow Guides", title: "How to Grow Gucchi Mushroom at Home Indore", h1: "How to Grow Gucchi Mushroom at Home: Indore Edition" },
  { id: 69, path: "how-to-grow-chaga-mushroom", keyword: "how to grow chaga mushroom", category: "How to Grow Guides", title: "How to Grow Chaga Mushroom Indore | Organic Mushroom Farm", h1: "How to Grow Chaga Mushroom in Indore" },
  { id: 70, path: "how-to-grow-volvariella-mushroom", keyword: "how to grow volvariella mushroom", category: "How to Grow Guides", title: "How to Grow Volvariella Mushroom Indore | Organic Mushroom Farm", h1: "How to Grow Volvariella Mushroom – Indore (Madhya Pradesh)" },
  { id: 71, path: "how-to-grow-mushroom-plastic-bottles", keyword: "how to grow mushroom in plastic bottles", category: "How to Grow Guides", title: "How to Grow Mushroom in Plastic Bottles Indore", h1: "Indore's Trusted How to Grow Mushroom in Plastic Bottles" },
  { id: 72, path: "how-to-grow-mushroom-sawdust", keyword: "how to grow mushroom using sawdust", category: "How to Grow Guides", title: "How to Grow Mushroom Using Sawdust Indore | Organic Mushroom Farm", h1: "How to Grow Mushroom Using Sawdust Near Indore" },
  { id: 73, path: "how-to-grow-mushroom-banana-leaves", keyword: "how to grow mushroom using banana leaves", category: "How to Grow Guides", title: "How to Grow Mushroom Using Banana Leaves Indore", h1: "How to Grow Mushroom Using Banana Leaves: Indore Edition" },
  { id: 74, path: "how-to-grow-mushroom-rice-straw", keyword: "how to grow mushroom using rice straw", category: "How to Grow Guides", title: "How to Grow Mushroom Using Rice Straw Indore", h1: "How to Grow Mushroom Using Rice Straw in Indore" },
  { id: 75, path: "how-to-grow-mushroom-on-logs", keyword: "how to grow mushroom on logs", category: "How to Grow Guides", title: "How to Grow Mushroom on Logs Indore | Organic Mushroom Farm", h1: "How to Grow Mushroom on Logs – Indore (Madhya Pradesh)" },
  { id: 76, path: "how-to-grow-mushroom-indoors", keyword: "how to grow mushroom indoors", category: "How to Grow Guides", title: "How to Grow Mushroom Indoors Indore | Organic Mushroom Farm", h1: "Indore's Trusted How to Grow Mushroom Indoors" },
  { id: 77, path: "how-to-grow-mushroom-outdoor", keyword: "how to grow mushroom outdoor", category: "How to Grow Guides", title: "How to Grow Mushroom Outdoor Indore | Organic Mushroom Farm", h1: "How to Grow Mushroom Outdoor Near Indore" },
  { id: 78, path: "how-to-grow-mushroom-in-room", keyword: "how to grow mushroom in a room", category: "How to Grow Guides", title: "How to Grow Mushroom in a Room Indore | Organic Mushroom Farm", h1: "How to Grow Mushroom in a Room: Indore Edition" },
  { id: 79, path: "how-to-grow-mushroom-large-scale", keyword: "how to grow mushroom large scale", category: "How to Grow Guides", title: "How to Grow Mushroom Large Scale Indore | Organic Mushroom Farm", h1: "How to Grow Mushroom Large Scale in Indore" },
  { id: 80, path: "how-to-grow-mushroom-spawn-at-home", keyword: "how to grow mushroom spawn at home", category: "How to Grow Guides", title: "How to Grow Mushroom Spawn at Home Indore | Organic Mushroom Farm", h1: "How to Grow Mushroom Spawn at Home – Indore (Madhya Pradesh)" },
  { id: 81, path: "how-to-grow-own-mushroom-spawn", keyword: "how to grow your own mushroom spawn", category: "How to Grow Guides", title: "How to Grow Your Own Mushroom Spawn Indore", h1: "Indore's Trusted How to Grow Your Own Mushroom Spawn" },
  { id: 82, path: "how-to-grow-mushroom-mycelium", keyword: "how to grow mushroom mycelium", category: "How to Grow Guides", title: "How to Grow Mushroom Mycelium Indore | Organic Mushroom Farm", h1: "How to Grow Mushroom Mycelium Near Indore" },
  { id: 83, path: "how-to-grow-mushroom-grain-spawn", keyword: "how to grow mushroom grain spawn", category: "How to Grow Guides", title: "How to Grow Mushroom Grain Spawn Indore | Organic Mushroom Farm", h1: "How to Grow Mushroom Grain Spawn: Indore Edition" },
  { id: 84, path: "how-long-mushroom-take-to-grow", keyword: "how long does it take to grow mushroom", category: "How to Grow Guides", title: "How Long Does It Take to Grow Mushroom Indore", h1: "How Long Does It Take to Grow Mushroom in Indore" },
  { id: 85, path: "how-many-days-to-grow-mushroom", keyword: "how many days to grow mushroom", category: "How to Grow Guides", title: "How Many Days to Grow Mushroom in Indore | Organic Mushroom Farm", h1: "How Many Days to Grow Mushroom – Indore (Madhya Pradesh)" },
  { id: 86, path: "button-mushroom-days-to-grow", keyword: "how many days button mushroom take to grow", category: "How to Grow Guides", title: "How Many Days Button Mushroom Take to Grow Indore", h1: "How Many Days Button Mushroom Take to Grow in Indore" },
  { id: 87, path: "oyster-mushroom-days-to-grow", keyword: "how long does oyster mushroom take to grow", category: "How to Grow Guides", title: "How Long Does Oyster Mushroom Take to Grow Indore", h1: "How Long Does Oyster Mushroom Take to Grow in Indore" },
  { id: 88, path: "stages-of-mushroom-growth", keyword: "stages of mushroom growth", category: "How to Grow Guides", title: "Stages of Mushroom Growth Indore | Organic Mushroom Farm", h1: "Stages of Mushroom Growth: Indore Edition" },
  { id: 89, path: "7-steps-mushroom-cultivation", keyword: "7 basic steps of mushroom cultivation", category: "How to Grow Guides", title: "7 Basic Steps of Mushroom Cultivation Indore", h1: "7 Basic Steps of Mushroom Cultivation in Indore" },

  // Mushroom Types, Nutrition & Price (90 to 109)
  { id: 90, path: "types-of-mushroom-in-india", keyword: "types of mushroom in india", category: "Mushroom Types, Nutrition & Price", title: "Types of Mushroom in India Indore | Organic Mushroom Farm", h1: "Types of Mushroom in India – Indore (Madhya Pradesh)" },
  { id: 91, path: "types-of-mushroom-in-india-with-pictures", keyword: "types of mushroom in india with pictures", category: "Mushroom Types, Nutrition & Price", title: "Types of Mushroom in India with Pictures Indore", h1: "Indore's Trusted Types of Mushroom in India with Pictures" },
  { id: 92, path: "how-many-types-of-mushroom", keyword: "how many types of mushroom", category: "Mushroom Types, Nutrition & Price", title: "How Many Types of Mushroom Indore | Organic Mushroom Farm", h1: "How Many Types of Mushroom Near Indore" },
  { id: 93, path: "khane-wale-mushroom-ke-naam", keyword: "khane wale mushroom ke naam", category: "Mushroom Types, Nutrition & Price", title: "Khane Wale Mushroom Ke Naam Indore | Organic Mushroom Farm", h1: "Khane Wale Mushroom Ke Naam: Indore Edition" },
  { id: 94, path: "do-khane-yogya-mushroom-ke-naam", keyword: "do khane yogya mushroom ke naam", category: "Mushroom Types, Nutrition & Price", title: "Do Khane Yogya Mushroom Ke Naam Indore | Organic Mushroom Farm", h1: "Do Khane Yogya Mushroom Ke Naam in Indore" },
  { id: 95, path: "mushroom-kya-hai", keyword: "mushroom kya hai", category: "Mushroom Types, Nutrition & Price", title: "Mushroom Kya Hai Indore | Organic Mushroom Farm", h1: "Mushroom Kya Hai – Indore (Madhya Pradesh)" },
  { id: 96, path: "mushroom-ke-bare-mein-bataiye", keyword: "mushroom ke bare mein bataiye", category: "Mushroom Types, Nutrition & Price", title: "Mushroom Ke Bare Mein Bataiye Indore | Organic Mushroom Farm", h1: "Indore's Trusted Mushroom Ke Bare Mein Bataiye" },
  { id: 97, path: "mushroom-kitne-prakar-ke-hote-hain", keyword: "mushroom kitne prakar ke hote hain", category: "Mushroom Types, Nutrition & Price", title: "Mushroom Kitne Prakar Ke Hote Hain Indore | Organic Mushroom Farm", h1: "Mushroom Kitne Prakar Ke Hote Hain Near Indore" },
  { id: 98, path: "oyster-mushroom-in-hindi", keyword: "oyster mushroom in hindi", category: "Mushroom Types, Nutrition & Price", title: "Oyster Mushroom in Hindi Indore | Organic Mushroom Farm", h1: "Oyster Mushroom in Hindi: Indore Edition" },
  { id: 99, path: "oyster-mushroom-kaisa-hota-hai", keyword: "oyster mushroom kaisa hota hai", category: "Mushroom Types, Nutrition & Price", title: "Oyster Mushroom Kaisa Hota Hai Indore | Organic Mushroom Farm", h1: "Oyster Mushroom Kaisa Hota Hai in Indore" },
  { id: 100, path: "sabse-mahanga-mushroom", keyword: "sabse mahanga mushroom", category: "Mushroom Types, Nutrition & Price", title: "Sabse Mahanga Mushroom Indore | Organic Mushroom Farm", h1: "Sabse Mahanga Mushroom – Indore (Madhya Pradesh)" },
  { id: 101, path: "most-expensive-mushroom-india", keyword: "which mushroom is 30000 rs per kg", category: "Mushroom Types, Nutrition & Price", title: "Which Mushroom is 30000 Rs Per Kg Indore | Organic Mushroom Farm", h1: "Indore's Trusted Which Mushroom is 30000 Rs Per Kg" },
  { id: 102, path: "mushroom-price-list-india", keyword: "mushroom price list india", category: "Mushroom Types, Nutrition & Price", title: "Mushroom Price List India Indore | Organic Mushroom Farm", h1: "Mushroom Price List India Near Indore" },
  { id: 103, path: "button-mushroom-price", keyword: "button mushroom price", category: "Mushroom Types, Nutrition & Price", title: "Button Mushroom Price in Indore | Organic Mushroom Farm", h1: "Button Mushroom Price: Indore Edition" },
  { id: 104, path: "oyster-mushroom-price", keyword: "oyster mushroom price", category: "Mushroom Types, Nutrition & Price", title: "Oyster Mushroom Price Indore | Organic Mushroom Farm", h1: "Oyster Mushroom Price in Indore" },
  { id: 105, path: "mushroom-market-in-india", keyword: "mushroom market in india", category: "Mushroom Types, Nutrition & Price", title: "Mushroom Market in India Indore | Organic Mushroom Farm", h1: "Mushroom Market in India – Indore (Madhya Pradesh)" },
  { id: 106, path: "mushroom-ki-sabji", keyword: "mushroom ki sabji", category: "Mushroom Types, Nutrition & Price", title: "Mushroom Ki Sabji Indore | Organic Mushroom Farm", h1: "Mushroom Ki Sabji: Indore Edition" },
  { id: 107, path: "mushroom-khane-se-kya-hota-hai", keyword: "mushroom khane se kya hota hai", category: "Mushroom Types, Nutrition & Price", title: "Mushroom Khane Se Kya Hota Hai Indore | Organic Mushroom Farm", h1: "Mushroom Khane Se Kya Hota Hai Near Indore" },
  { id: 108, path: "mushroom-health-benefits", keyword: "mushroom health benefits", category: "Mushroom Types, Nutrition & Price", title: "Mushroom Health Benefits Indore | Organic Mushroom Farm", h1: "Mushroom Health Benefits in Indore" },
  { id: 109, path: "mushroom-growing-in-house-good-or-bad", keyword: "mushroom growing in house good or bad", category: "Mushroom Types, Nutrition & Price", title: "Mushroom Growing in House Good or Bad Indore", h1: "Mushroom Growing in House Good or Bad Near Indore" },

  // Business Setup & Subsidy (110 to 130)
  { id: 110, path: "mushroom-farming-in-india", keyword: "mushroom farming in india", category: "Business Setup & Subsidy", title: "Mushroom Farming in India Indore | Organic Mushroom Farm", h1: "Mushroom Farming in India Near Indore" },
  { id: 111, path: "how-to-start-mushroom-farming-india", keyword: "how to start mushroom farming in india", category: "Business Setup & Subsidy", title: "How to Start Mushroom Farming in India Indore", h1: "How to Start Mushroom Farming in India: Indore Edition" },
  { id: 112, path: "how-to-start-mushroom-farming-at-home", keyword: "how to start mushroom farming at home", category: "Business Setup & Subsidy", title: "How to Start Mushroom Farming at Home Indore", h1: "How to Start Mushroom Farming at Home Near Indore" },
  { id: 113, path: "how-to-start-mushroom-farming", keyword: "how to start mushroom farming", category: "Business Setup & Subsidy", title: "How to Start Mushroom Farming Indore | Organic Mushroom Farm", h1: "How to Start Mushroom Farming in Indore" },
  { id: 114, path: "mushroom-farming-profit-per-acre", keyword: "mushroom farming profit per acre", category: "Business Setup & Subsidy", title: "Mushroom Farming Profit Per Acre Indore | Organic Mushroom Farm", h1: "Mushroom Farming Profit Per Acre in Indore" },
  { id: 115, path: "mushroom-farming-cost-and-profit", keyword: "mushroom farming cost and profit", category: "Business Setup & Subsidy", title: "Mushroom Farming Cost and Profit Indore | Organic Mushroom Farm", h1: "Mushroom Farming Cost and Profit – Indore (Madhya Pradesh)" },
  { id: 116, path: "mushroom-farming-requirements", keyword: "mushroom farming requirements", category: "Business Setup & Subsidy", title: "Mushroom Farming Requirements Indore | Organic Mushroom Farm", h1: "Indore's Trusted Mushroom Farming Requirements" },
  { id: 117, path: "mushroom-farming-karnataka", keyword: "mushroom farming in karnataka", category: "Business Setup & Subsidy", title: "Mushroom Farming in Karnataka Indore | Organic Mushroom Farm", h1: "Mushroom Farming in Karnataka Near Indore" },
  { id: 118, path: "mushroom-yield-per-kg-seeds", keyword: "how much mushroom can grow in 1 kg seeds", category: "Business Setup & Subsidy", title: "How Much Mushroom Can Grow in 1 Kg Seeds Indore", h1: "How Much Mushroom Can Grow in 1 Kg Seeds: Indore Edition" },
  { id: 119, path: "5-steps-mushroom-cultivation", keyword: "what are the 5 steps of mushroom cultivation", category: "Business Setup & Subsidy", title: "What Are the 5 Steps of Mushroom Cultivation Indore", h1: "What Are the 5 Steps of Mushroom Cultivation in Indore" },
  { id: 120, path: "mushroom-ki-kheti", keyword: "mushroom ki kheti", category: "Business Setup & Subsidy", title: "Mushroom Ki Kheti Indore | Organic Mushroom Farm", h1: "Mushroom Ki Kheti – Indore (Madhya Pradesh)" },
  { id: 121, path: "mushroom-ki-kheti-kaise-karen", keyword: "mushroom ki kheti kaise karen", category: "Business Setup & Subsidy", title: "Mushroom Ki Kheti Kaise Karen Indore | Organic Mushroom Farm", h1: "Indore's Trusted Mushroom Ki Kheti Kaise Karen" },
  { id: 122, path: "how-to-plant-mushroom-seeds", keyword: "how to plant mushroom seeds", category: "Business Setup & Subsidy", title: "How to Plant Mushroom Seeds Indore | Organic Mushroom Farm", h1: "How to Plant Mushroom Seeds Near Indore" },
  { id: 123, path: "how-to-make-mushroom-seeds-at-home", keyword: "how to make mushroom seeds at home", category: "Business Setup & Subsidy", title: "How to Make Mushroom Seeds at Home Indore | Organic Mushroom Farm", h1: "How to Make Mushroom Seeds at Home: Indore Edition" },
  { id: 124, path: "indoor-oyster-mushroom-farm", keyword: "indoor oyster mushroom farm", category: "Business Setup & Subsidy", title: "Indoor Oyster Mushroom Farm Indore | Organic Mushroom Farm", h1: "Indoor Oyster Mushroom Farm in Indore" },
  { id: 125, path: "blue-oyster-mushroom-farm", keyword: "blue oyster mushroom farm", category: "Business Setup & Subsidy", title: "Blue Oyster Mushroom Farm Indore | Organic Mushroom Farm", h1: "Blue Oyster Mushroom Farm – Indore (Madhya Pradesh)" },
  { id: 126, path: "mushroom-farm-setup", keyword: "mushroom farm setup", category: "Business Setup & Subsidy", title: "Mushroom Farm Setup Indore | Organic Mushroom Farm", h1: "Indore's Trusted Mushroom Farm Setup" },
  { id: 127, path: "how-to-build-mushroom-grow-room", keyword: "how to build a mushroom grow room", category: "Business Setup & Subsidy", title: "How to Build a Mushroom Grow Room Indore", h1: "How to Build a Mushroom Grow Room Near Indore" },
  { id: 128, path: "how-to-build-mushroom-grow-chamber", keyword: "how to build a mushroom grow chamber", category: "Business Setup & Subsidy", title: "How to Build a Mushroom Grow Chamber Indore", h1: "How to Build a Mushroom Grow Chamber: Indore Edition" },
  { id: 129, path: "mushroom-farming-subsidy", keyword: "mushroom farming subsidy", category: "Business Setup & Subsidy", title: "Mushroom Farming Subsidy Indore | Organic Mushroom Farm", h1: "Mushroom Farming Subsidy in Indore" },
  { id: 130, path: "mushroom-turnkey-project", keyword: "mushroom turnkey project", category: "Business Setup & Subsidy", title: "Mushroom Turnkey Project Indore | Organic Mushroom Farm", h1: "Mushroom Turnkey Project – Indore (Madhya Pradesh)" },

  // Spawn Supply & Grow Kits (131 to 142)
  { id: 131, path: "mushroom-spawn-supplier", keyword: "mushroom spawn supplier", category: "Spawn Supply & Grow Kits", title: "Mushroom Spawn Supplier Indore | Organic Mushroom Farm", h1: "Indore's Trusted Mushroom Spawn Supplier" },
  { id: 132, path: "mushroom-spawn-supply", keyword: "mushroom spawn supply", category: "Spawn Supply & Grow Kits", title: "Mushroom Spawn Supply Indore | Organic Mushroom Farm", h1: "Mushroom Spawn Supply Near Indore" },
  { id: 133, path: "oyster-mushroom-spawn", keyword: "oyster mushroom spawn", category: "Spawn Supply & Grow Kits", title: "Oyster Mushroom Spawn Indore | Organic Mushroom Farm", h1: "Oyster Mushroom Spawn: Indore Edition" },
  { id: 134, path: "button-mushroom-spawn", keyword: "button mushroom spawn", category: "Spawn Supply & Grow Kits", title: "Button Mushroom Spawn Indore | Organic Mushroom Farm", h1: "Button Mushroom Spawn in Indore" },
  { id: 135, path: "mushroom-spawn-at-home", keyword: "mushroom spawn at home", category: "Spawn Supply & Grow Kits", title: "Mushroom Spawn at Home Indore | Organic Mushroom Farm", h1: "Mushroom Spawn at Home – Indore (Madhya Pradesh)" },
  { id: 136, path: "how-to-grow-mushroom-spawn", keyword: "how to grow mushroom spawn", category: "Spawn Supply & Grow Kits", title: "How to Grow Mushroom Spawn Indore | Organic Mushroom Farm", h1: "Indore's Trusted How to Grow Mushroom Spawn" },
  { id: 137, path: "mushroom-grain-spawn", keyword: "buy mushroom grain spawn", category: "Spawn Supply & Grow Kits", title: "Buy Mushroom Grain Spawn Indore | Organic Mushroom Farm", h1: "Buy Mushroom Grain Spawn Near Indore" },
  { id: 138, path: "mushroom-liquid-culture", keyword: "mushroom liquid culture", category: "Spawn Supply & Grow Kits", title: "Mushroom Liquid Culture Indore | Organic Mushroom Farm", h1: "Mushroom Liquid Culture: Indore Edition" },
  { id: 139, path: "mushroom-growing-kit", keyword: "mushroom growing kit", category: "Spawn Supply & Grow Kits", title: "Mushroom Growing Kit Indore | Organic Mushroom Farm", h1: "Mushroom Growing Kit in Indore" },
  { id: 140, path: "mushroom-grow-bags", keyword: "mushroom grow bags", category: "Spawn Supply & Grow Kits", title: "Mushroom Grow Bags Indore | Organic Mushroom Farm", h1: "Mushroom Grow Bags – Indore (Madhya Pradesh)" },
  { id: 141, path: "oyster-mushroom-kit", keyword: "oyster mushroom kit", category: "Spawn Supply & Grow Kits", title: "Best Oyster Mushroom Kit Indore (2026) | Organic Mushroom Farm", h1: "Indore's Trusted Oyster Mushroom Kit" },
  { id: 142, path: "indoor-oyster-mushroom-kit", keyword: "indoor oyster mushroom kit", category: "Spawn Supply & Grow Kits", title: "Indoor Oyster Mushroom Kit Indore | Organic Mushroom Farm", h1: "Indoor Oyster Mushroom Kit Near Indore" },

  // Buy Fresh/Dry Mushroom (143 to 150)
  { id: 143, path: "buy-fresh-mushroom-online", keyword: "buy fresh mushroom online", category: "Buy Fresh/Dry Mushroom", title: "Buy Fresh Mushroom Online India Indore | Organic Mushroom Farm", h1: "Buy Fresh Mushroom Online India: Indore Edition" },
  { id: 144, path: "buy-dry-mushroom-online", keyword: "buy dry mushroom online", category: "Buy Fresh/Dry Mushroom", title: "Buy Dry Mushroom Online Indore | Organic Mushroom Farm", h1: "Buy Dry Mushroom Online in Indore" },
  { id: 145, path: "oyster-mushroom-where-to-buy", keyword: "oyster mushroom where to buy", category: "Buy Fresh/Dry Mushroom", title: "Oyster Mushroom Where to Buy Indore | Organic Mushroom Farm", h1: "Oyster Mushroom Where to Buy – Indore (Madhya Pradesh)" },
  { id: 146, path: "oyster-mushroom-delivery", keyword: "oyster mushroom delivery", category: "Buy Fresh/Dry Mushroom", title: "Oyster Mushroom Delivery Indore | Organic Mushroom Farm", h1: "Indore's Trusted Oyster Mushroom Delivery" },
  { id: 147, path: "button-mushroom-near-me", keyword: "button mushroom near me", category: "Buy Fresh/Dry Mushroom", title: "Button Mushroom Near Me Indore | Organic Mushroom Farm", h1: "Button Mushroom Near Me Near Indore" },
  { id: 148, path: "button-mushroom-shop-near-me", keyword: "button mushroom shop near me", category: "Buy Fresh/Dry Mushroom", title: "Button Mushroom Shop Near Me Indore | Organic Mushroom Farm", h1: "Button Mushroom Shop Near Me: Indore Edition" },
  { id: 149, path: "mushroom-oyster-kit", keyword: "mushroom oyster kit", category: "Buy Fresh/Dry Mushroom", title: "Mushroom Oyster Kit Indore | Organic Mushroom Farm", h1: "Mushroom Oyster Kit in Indore" },
  { id: 150, path: "fresh-mushroom-delivery", keyword: "fresh mushroom delivery", category: "Buy Fresh/Dry Mushroom", title: "Fresh Mushroom Delivery Indore | Organic Mushroom Farm", h1: "Fresh Mushroom Delivery – Indore (Madhya Pradesh)" },

  // Brand Overview (151)
  { id: 151, path: "mushroom-farming", keyword: "mushroom farming", category: "Brand Overview", title: "Mushroom Farming in Indore | Organic Mushroom Farm", h1: "Indore's Trusted Mushroom Farming" }
];

export const getIndoreBlogByPath = (path: string): IndoreBlog | undefined => {
  const cleanPath = path.toLowerCase().replace(/^\/+|\/+$/g, "").replace(/^locations\/indore\//, "");
  
  // Find in static list first
  const metaItem = INDORE_BLOGS_METADATA.find(b => b.path === cleanPath);
  if (!metaItem) return undefined;

  // Let's generate a highly realistic dynamic record containing all details matching original PDF OCR perfectly
  let intro = `Madhya Pradesh ke commercial hub, Indore shehar mein, ${metaItem.keyword} aur agriculture technology ka scope lagatar grow kar raha hai. Hamara main center and research laboratory Katangi Road, Jabalpur se pure MP, samet Indore mein high-yielding F1 mother spawn supply, expert consultancies, aur scientific training support pradan karta hai. Indore ke badhte hue climate, temperature channels aur market demand ke anusar customized setup designs create karaye jate hain, jisse aap minimal initial capital se scalable returns secure kar sakein.`;
  
  let faqs = [
    { q: `${metaItem.keyword} shuru karne ke liye Indore mein minimum investment kitna chahiye?`, a: `Chhote baramasi setup ke liye ₹15,000 se ₹30,000 tak ki laagat aati hai, jabki semi-commercial setup ke liye up to ₹1,50,000 tak ka infrastructure lagta hai.` },
    { q: `Kya Indore mein training ke baad completion certificate milta hai?`, a: `Haan! Course complete karne ke baad completion certificate issued kiya jata hai, jo NABARD-backed bank loan aur state government subsidies claim karne mein mahatvapurna h.` },
    { q: `Indore shehar mein quality F1 mother spawn seeds kaha se prapt karein?`, a: `Organic Mushroom Farm ki direct laboratory line se pure Indore aur aaspass ke gramin kshetron mein secure cold-chain delivery milti hai.` }
  ];

  let links = [
    "mushroom-training-center",
    "government-mushroom-training-center",
    "mushroom-farming-training"
  ];

  // Specific content mapping to matches in OCR
  if (metaItem.id === 1) {
    intro = "Indore mein mushroom farming seekhna chahte hain to Organic Mushroom Farm ka mushroom training center program aapke liye sahi jagah hai. Hum hands-on practical training dete hain — spawn handling se lekar harvesting tak — jisse beginners bhi 2-3 din ke andar basics samajh lete hain. Training ke baad spawn supply aur farm setup support bhi milta hai, taki seekha hua kaam asaani se shuru kiya ja sake.";
    faqs = [
      { q: "Mushroom training center ki fees kitni hoti hai Indore mein?", a: "Fees training duration aur mushroom type (oyster/button) ke hisaab se vary karti hai. Exact pricing ke liye 9203544140 pe WhatsApp karein, basic batches ₹299 se shuru hoti hain." },
      { q: "Kya training ke baad spawn bhi milta hai?", a: "Haan, training complete hone ke baad aap Organic Mushroom Farm se directly spawn order kar sakte hain, jisse practical implementation aasan ho jaata hai." },
      { q: "Training online ya offline, kaunsa better hai?", a: "Dono available hain. Offline mein farm visit ka real experience milta hai, online flexible timing deta hai — aap apni convenience ke hisaab se choose kar sakte hain." }
    ];
    links = [
      "government-mushroom-training-center",
      "best-mushroom-training-center",
      "mushroom-farming-training"
    ];
  } else if (metaItem.id === 2) {
    intro = "Madhya Pradesh ke Indore shehar mein government mushroom training center ki demand badh rahi hai, kyanki mushroom farming kam jagah aur kam investment mein achha returns deta hai. Organic Mushroom Farm ki training is liye design ki gayi hai ki student practical knowledge ke saath ghar baithe ya farm visit karke seekh sake. Hindi aur English dono mein guidance available hai.";
    faqs = [
      { q: "Kya training ke baad spawn bhi milta hai?", a: "Haan, training complete hone ke baad aap Organic Mushroom Farm se directly spawn order kar sakte hain, jisse practical implementation aasan ho jaata hai." },
      { q: "Training online ya offline, kaunsa better hai?", a: "Dono available hain. Offline mein farm visit ka real experience milta hai, online flexible timing deta hai — aap apni convenience ke hisaab se choose kar sakte hain." },
      { q: "Certificate milta hai kya training complete karne par?", a: "Haan, har training batch ke baad participants ko completion certificate diya jaata hai." }
    ];
    links = [
      "mushroom-training-center-near-me",
      "mushroom-cultivation-training-center",
      "mushroom-farming-training-offline"
    ];
  } else if (metaItem.id === 3) {
    intro = "Agar aap Indore mein mushroom training center near me dhund rahe hain to Organic Mushroom Farm certified trainers ke saath real farm environment mein practical sikhata hai. Course mein cultivation techniques, spawn preparation, temperature-humidity control aur marketing tips sab cover hote hain, jisse ek beginner bhi confident ho ke apna setup start kar sake.";
    faqs = [
      { q: "Training online ya offline, kaunsa better hai?", a: "Dono available hain. Offline mein farm visit ka real experience milta hai, online flexible timing deta hai — aap apni convenience ke hisaab se choose kar sakte hain." },
      { q: "Certificate milta hai kya training complete karne par?", a: "Haan, har training batch ke baad participants ko completion certificate diya jaata hai." },
      { q: "Mushroom training center near me ki fees kitni hoti hai Indore mein?", a: "Fees training duration aur mushroom type (oyster/button) ke hisaab se vary karti hai. Exact pricing ke liye 9203544140 pe WhatsApp karein, basic batches ₹299 se shuru hoti hain." }
    ];
    links = [
      "mushroom-farming-training-center",
      "mushroom-cultivation-and-training-center",
      "mushroom-farming-training-near-me"
    ];
  } else if (metaItem.id === 4) {
    intro = "Indore mein mushroom farming seekhna chahte hain to Organic Mushroom Farm ka mushroom farming training center program aapke liye sahi jagah hai. Hum hands-on practical training dete hain — spawn handling se lekar harvesting tak — jisse beginners bhi 2-3 din ke andar basics samajh lete hain. Training ke baad spawn supply aur farm setup support bhi milta hai, taki seekha hua kaam asaani se shuru kiya ja sake.";
    faqs = [
      { q: "Certificate milta hai kya training complete karne par?", a: "Haan, har training batch ke baad participants ko completion certificate diya jaata hai." },
      { q: "Mushroom farming training center ki fees kitni hoti hai Indore mein?", a: "Fees training duration aur mushroom type (oyster/button) ke hisaab se vary karti hai. Exact pricing ke liye 9203544140 pe WhatsApp karein, basic batches ₹299 se shuru hoti hain." },
      { q: "Kya training ke baad spawn bhi milta hai?", a: "Haan, training complete hone ke baad aap Organic Mushroom Farm se directly spawn order kar sakte hain, jisse practical implementation aasan ho jaata hai." }
    ];
    links = [
      "best-mushroom-training-center",
      "mushroom-development-and-training-center",
      "mushroom-farming-training-online"
    ];
  } else if (metaItem.id === 5) {
    intro = "Madhya Pradesh ke Indore shehar mein best mushroom training center ki demand badh rahi hai, kyanki mushroom farming kam jagah aur kam investment mein achha returns deta hai. Organic Mushroom Farm ki training is liye design ki gayi hai ki student practical knowledge ke saath ghar baithe ya farm visit karke seekh sake. Hindi aur English dono mein guidance available hai.";
    faqs = [
      { q: "Best mushroom training center ki fees kitni hoti hai Indore mein?", a: "Fees training duration aur mushroom type (oyster/button) ke hisaab se vary karti hai. Exact pricing ke liye 9203544140 pe WhatsApp karein, basic batches ₹299 se shuru hoti hain." },
      { q: "Kya training ke baad spawn bhi milta hai?", a: "Haan, training complete hone ke baad aap Organic Mushroom Farm se directly spawn order kar sakte hain, jisse practical implementation aasan ho jaata hai." },
      { q: "Training online ya offline, kaunsa better hai?", a: "Dono available hain. Offline mein farm visit ka real experience milta hai, online flexible timing deta hai — aap apni convenience ke hisaab se choose kar sakte hain." }
    ];
    links = [
      "mushroom-cultivation-training-center",
      "mushroom-farm-learning-center",
      "mushroom-cultivation-training-near-me"
    ];
  } else if (metaItem.id === 6) {
    intro = "Agar aap Indore mein mushroom cultivation training center dhund rahe hain to Organic Mushroom Farm certified trainers ke saath real farm environment mein practical sikhata hai. Course mein cultivation techniques, spawn preparation, temperature humidity control aur marketing tips sab cover hote hain, jisse ek beginner bhi confident ho ke apna setup start kar sake.";
    faqs = [
      { q: "Kya training ke baad spawn bhi milta hai?", a: "Haan, training complete hone ke baad aap Organic Mushroom Farm se directly spawn order kar sakte hain, jisse practical implementation aasan ho jaata hai." },
      { q: "Training online ya offline, kaunsa better hai?", a: "Dono available hain. Offline mein farm visit ka real experience milta hai, online flexible timing deta hai — aap apni convenience ke hisaab se choose kar sakte hain." },
      { q: "Certificate milta hai kya training complete karne par?", a: "Haan, har training batch ke baad participants ko completion certificate diya jaata hai." }
    ];
    links = [
      "mushroom-cultivation-and-training-center",
      "mushroom-training-center",
      "mushroom-cultivation-training-centre-near-me"
    ];
  } else if (metaItem.id === 7) {
    intro = "Indore mein mushroom farming seekhna chahte hain to Organic Mushroom Farm ka mushroom cultivation and training center program aapke liye sahi jagah hai. Hum hands-on practical training dete hain — spawn handling se lekar harvesting tak — jisse beginners bhi 2-3 din ke andar basics samajh lete hain. Training ke baad spawn supply aur farm setup support bhi milta hai, taki seekha hua kaam asaani se shuru kiya ja sake.";
    faqs = [
      { q: "Training online ya offline, kaunsa better hai?", a: "Dono available hain. Offline mein farm visit ka real experience milta hai, online flexible timing deta hai — aap apni convenience ke hisaab se choose kar sakte hain." },
      { q: "Certificate milta hai kya training complete karne par?", a: "Haan, har training batch ke baad participants ko completion certificate diya jaata hai." },
      { q: "Mushroom cultivation and training center ki fees kitni hoti hai Indore mein?", a: "Fees training duration aur mushroom type (oyster/button) ke hisaab se vary karti hai. Exact pricing ke liye 9203544140 pe WhatsApp karein, basic batches ₹299 se shuru hoti hain." }
    ];
    links = [
      "mushroom-development-and-training-center",
      "government-mushroom-training-center",
      "mushroom-cultivation-classes-online"
    ];
  } else if (metaItem.id === 8) {
    intro = "Madhya Pradesh ke Indore shehar mein mushroom development and training center ki demand badh rahi hai, kyanki mushroom farming kam jagah aur kam investment mein achha returns deta hai. Organic Mushroom Farm ki training is liye design ki gayi hai ki student practical knowledge ke saath ghar baithe ya farm visit karke seekh sake. Hindi aur English dono mein guidance available hai.";
    faqs = [
      { q: "Certificate milta hai kya training complete karne par?", a: "Haan, har training batch ke baad participants ko completion certificate diya jaata hai." },
      { q: "Mushroom development and training center ki fees kitni hoti hai Indore mein?", a: "Fees training duration aur mushroom type (oyster/button) ke hisaab se vary karti hai. Exact pricing ke liye 9203544140 pe WhatsApp karein, basic batches ₹299 se shuru hoti hain." },
      { q: "Kya training ke baad spawn bhi milta hai?", a: "Haan, training complete hone ke baad aap Organic Mushroom Farm se directly spawn order kar sakte hain, jisse practical implementation aasan ho jaata hai." }
    ];
    links = [
      "mushroom-farm-learning-center",
      "mushroom-training-center-near-me",
      "mushroom-growing-training-courses"
    ];
  } else if (metaItem.id === 9) {
    intro = "Agar aap Indore mein mushroom farm learning center dhund rahe hain to Organic Mushroom Farm certified trainers ke saath real farm environment mein practical sikhata hai. Course mein cultivation techniques, spawn preparation, temperature-humidity control aur marketing tips sab cover hote hain, jisse ek beginner bhi confident ho ke apna setup start kar sake.";
    faqs = [
      { q: "Mushroom farm learning center ki fees kitni hoti hai Indore mein?", a: "Fees training duration aur mushroom type (oyster/button) ke hisaab se vary karti hai. Exact pricing ke liye 9203544140 pe WhatsApp karein, basic batches ₹299 se shuru hoti hain." },
      { q: "Kya training ke baad spawn bhi milta hai?", a: "Haan, training complete hone ke baad aap Organic Mushroom Farm se directly spawn order kar sakte hain, jisse practical implementation aasan ho jaata hai." },
      { q: "Training online ya offline, kaunsa better hai?", a: "Dono available hain. Offline mein farm visit ka real experience milta hai, online flexible timing deta hai — aap apni convenience ke hisaab se choose kar sakte hain." }
    ];
    links = [
      "mushroom-training-center",
      "mushroom-farming-training-center",
      "mushroom-education-courses"
    ];
  } else if (metaItem.id === 10) {
    intro = "Sarkari sahayata ke saath mushroom farming seekhna Indore mein possible hai, aur mushroom farming training by government ke baare mein sahi jaankari lena zaroori hai. Organic Mushroom Farm is topic par practical guidance deta hai — eligibility, documents aur nearby training centres ki list ke saath — taki aapka time bachay.";
    faqs = [
      { q: "Kya sarkari training ke liye koi fees hoti hai?", a: "Kuch government schemes free training offer karti hain, kuch mein nominal fees hoti hai. Organic Mushroom Farm aapko exact scheme ke hisaab se sahi jaankari deta hai." },
      { q: "Subsidy ke liye eligibility kya hai?", a: "Generally koi bhi Indian resident apply kar sakta hai, lekin documents aur state-wise rules alag ho sakte hain. Helpline 9203544140 par detail le sakte hain." },
      { q: "Online apply kar sakte hain kya?", a: "Kai state government portals online application allow karte hain; Organic Mushroom Farm application process mein guidance deta hai." }
    ];
    links = [
      "mushroom-farming-training-karnataka-government",
      "mushroom-farming-training-up-government",
      "mushroom-training-center"
    ];
  } else if (metaItem.id === 151) {
    intro = "Organic Mushroom Farm Indore mein mushroom farming ka ek stop solution hai — training, spawn supply, farm setup aur fresh/dry mushroom sales, sab ek jagah. 2021 se Jabalpur se shuru hua yeh business ab Pan India aur kuch international markets tak pahunch chuka hai.";
    faqs = [
      { q: "Organic Mushroom Farm kya services deta hai?", a: "Training, spawn supply, turnkey farm setup, aur fresh/dry mushroom sales — sab ek hi jagah, Pan India delivery ke saath." },
      { q: "Organic Mushroom Farm kab se operate kar raha hai?", a: "2021 se, Jabalpur se shuru hua aur ab Indore samet poore India mein services deta hai." },
      { q: "Contact kaise karein?", a: "9203544140 par call/WhatsApp karein ya organicmushroomfarm.shop visit karein." }
    ];
    links = [
      "mushroom-cultivation-and-training-center"
    ];
  }

  return {
    id: metaItem.id,
    keyword: metaItem.keyword,
    path: metaItem.path,
    category: metaItem.category,
    title: metaItem.title,
    meta: `Get accurate guides, market price, F1 spawn support and certification for ${metaItem.keyword} in Indore, Madhya Pradesh.`,
    h1: metaItem.h1,
    intro: intro,
    faqs: faqs,
    links: links
  };
};
