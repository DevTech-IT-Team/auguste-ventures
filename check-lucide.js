import * as lucide from 'lucide-react';
const importsToCheck = ['ArrowRight', 'BarChart', 'BarChart3', 'LineChart', 'Target', 'Mail', 'Phone', 'Instagram', 'Linkedin'];
const missing = importsToCheck.filter(name => !lucide[name]);
console.log("Missing exports:", missing);
