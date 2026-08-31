const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// 1. In Navbar's useEffect, dispatch event
const navbarUseEffect = `  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("mobile-menu-open");
    }
    window.dispatchEvent(new CustomEvent('mobileMenuToggle', { detail: mobileMenuOpen }));
    return () => {
      document.body.style.overflow = "unset";
      document.body.classList.remove("mobile-menu-open");
    };
  }, [mobileMenuOpen]);`;

const oldNavbarUseEffect = `  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("mobile-menu-open");
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.classList.remove("mobile-menu-open");
    };
  }, [mobileMenuOpen]);`;

content = content.replace(oldNavbarUseEffect, navbarUseEffect);

// 2. In FloatingButtons, add state and listener
const floatingButtonsStart = `const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();`;

const floatingButtonsNew = `const FloatingButtons = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handle = (e) => setMobileMenuOpen(e.detail);
    window.addEventListener('mobileMenuToggle', handle);
    return () => window.removeEventListener('mobileMenuToggle', handle);
  }, []);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();`;

content = content.replace(floatingButtonsStart, floatingButtonsNew);

fs.writeFileSync('src/App.tsx', content);
