# Simple Gatsby SEO test

This is a simple site to test various features and implementations and how they affect SEO. For example, images, scripts, redux, etc.

## Testing Methodology

The first test will be to establish a baseline for a simple site with no images, scripts, etc.

### Master Branch

The master branch will serve as the test of the most recent version of the site where all features are enabled.

### Baseline

The baseline branch will be a simple site with no images, scripts, etc. The only thing it will have is a single page with some text.

PageSpeed Insights test: https://pagespeed.web.dev/analysis/https-gatsbyseotestmaster-gatsbyjs-io/se5xch6n9w?form_factor=mobile

WebPageTest test: https://www.webpagetest.org/result/230813_BiDcFF_2K7/

## Tests

### 1. Unused JavaScript and CSS

Create a large number of unused components inside the megapack folder to test the effect of unused JavaScript and CSS on SEO.

Results:

- PageSpeed Insights: https://pagespeed.web.dev/analysis/https-gatsbyseotestmaster-gatsbyjs-io/orvqxu106l?form_factor=mobile

The large number of unused components in the megapack folder does not seem to have any effect on SEO. The unused components are not included in the final build.

### 2. Install unused npm packages

Install a couple of unused npm packages to test the effect of unused JavaScript and CSS on SEO.

Start with the following package:

- Material UI which supposedly has a large impact on SEO:

npm install @mui/material @emotion/react @emotion/styled

Results:

Seems to have no effect on SEO. I've also tried to import the button from this package on the home page and it doesn't seem to have any effect on SEO.

Try next to add the bootstrap package:

npm install react-bootstrap bootstrap
