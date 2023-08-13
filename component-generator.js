const fs = require('fs');
const path = require('path');

const BASE_DIR = 'src/megapack';
const NUM_COMPONENTS = 1000;

if (!fs.existsSync(BASE_DIR)) {
    fs.mkdirSync(BASE_DIR, { recursive: true });
}

for (let i = 1; i <= NUM_COMPONENTS; i++) {
    const componentName = `Component${i}`;
    const componentDir = path.join(BASE_DIR, componentName);

    // Create component directory
    if (!fs.existsSync(componentDir)) {
        fs.mkdirSync(componentDir);
    }

    // index.js
    fs.writeFileSync(
        path.join(componentDir, 'index.js'),
        `export { default as ${componentName} } from "./${componentName.toLowerCase()}";\n`
    );

    // main-component.js
    fs.writeFileSync(
        path.join(componentDir, `${componentName.toLowerCase()}.js`),
        `import React from "react";
import * as styles from "./${componentName.toLowerCase()}.module.css";

const ${componentName} = () => {
    return (
        <div className={styles.container}>
            Images shown are for illustration purposes only and may differ slightly. Component: ${componentName}
        </div>
    );
}

export default ${componentName};\n`
    );

    // main-component.module.css
    fs.writeFileSync(
        path.join(componentDir, `${componentName.toLowerCase()}.module.css`),
        `.container {
    padding-top: 10px;
    font-weight: 500;
    color: #a7a9ac;
}

@media (max-width: 800px) {
    .container {
        font-size: 14px;
    }
}\n`
    );
}

console.log('Components generated successfully!');
