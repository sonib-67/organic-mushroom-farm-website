const fs = require('fs');
let content = fs.readFileSync('src/components/AIChatWidget.tsx', 'utf8');

const targetState = `  const [isOpen, setIsOpen] = useState(false);`;
const replacementState = `  const [isOpen, setIsOpen] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (
        chatRef.current && 
        !chatRef.current.contains(target) &&
        !(target as Element).closest('[aria-label="Toggle AI Assistant"]')
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside, { passive: true });
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);
`;

content = content.replace(targetState, replacementState);

const targetDiv = `<motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={\`fixed z-[100000]`;

const replacementDiv = `<motion.div
            ref={chatRef}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={\`fixed z-[100000]`;

content = content.replace(targetDiv, replacementDiv);

fs.writeFileSync('src/components/AIChatWidget.tsx', content);
console.log("Chat patched");
