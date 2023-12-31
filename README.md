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

Results:

Doesn't seem to any effect on Performance or SEO but LCP and Speed Index slightly increase.

- PageSpeed Insights: https://pagespeed.web.dev/analysis/https-gatsbyseotestmaster-gatsbyjs-io/4vbqfv6oxf?form_factor=mobile

Before WebPageTest test: https://www.webpagetest.org/vitals.php?test=230813_BiDcMA_2VT&run=1&cached=0#lcp
After WebPageTest test: https://www.webpagetest.org/vitals.php?test=230813_BiDcN8_2Y8&run=1&cached=0#lcp

### 3. Add images

Add a single image inside an image tag without any attributes.

Results:

Performance slightly decreases due to CLS.

- PageSpeed Insights: https://pagespeed.web.dev/analysis/https-gatsbyseotestmaster-gatsbyjs-io/8zz4zjo0vi?form_factor=mobile

Fix CLS by adding width and height attributes to the image tag.

Results:

Performance is back to normal. There are some small issues with image resolution which can be fixed by loading larger images from the cloudinary.

PageSpeed Insights: https://pagespeed.web.dev/analysis/https-gatsbyseotestmaster-gatsbyjs-io/dvb5j66u40?form_factor=mobile

Next, I will make the image to be LCP component instead of h1 text. This will test the effect of images on LCP. I've also added some more images out of the viewport and CSS style file to see the impact of the CSS style file on LCP.

Results:
