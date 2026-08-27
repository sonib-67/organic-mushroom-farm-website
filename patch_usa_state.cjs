const fs = require('fs');
let content = fs.readFileSync('src/pages/UsaTrainingPage.tsx', 'utf8');

// replace the import to also include useLocation
content = content.replace("import { Link, useNavigate } from 'react-router-dom';", "import { Link, useNavigate, useLocation } from 'react-router-dom';");

// find where navigate is defined and add useLocation and useEffect
content = content.replace(
  "const navigate = useNavigate();", 
  `const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.autoOpenPlan) {
      setCheckoutPlan(location.state.autoOpenPlan);
      // Clear state so it doesn't reopen on refresh
      window.history.replaceState({}, document.title)
    }
  }, [location.state]);`
);

fs.writeFileSync('src/pages/UsaTrainingPage.tsx', content);
console.log("Patched UsaTrainingPage.tsx for state handling");
