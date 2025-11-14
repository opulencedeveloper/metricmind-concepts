# SEO Validation Checklist

Use this checklist to verify all SEO implementations are working correctly.

## 🔍 Pre-Launch Validation

### 1. Metadata Validation
- [ ] Run `npm run build` - Check for metadata errors
- [ ] Verify all pages have unique titles
- [ ] Check meta descriptions are 150-160 characters
- [ ] Validate Open Graph tags using: https://www.opengraph.xyz/
- [ ] Test Twitter Cards using: https://cards-dev.twitter.com/validator
- [ ] Verify canonical URLs are correct

### 2. Structured Data Validation
- [ ] Test with Google Rich Results Test: https://search.google.com/test/rich-results
- [ ] Validate JSON-LD with: https://validator.schema.org/
- [ ] Check for structured data errors in Search Console
- [ ] Verify Organization schema appears
- [ ] Verify Service schema appears
- [ ] Verify FAQ schema appears

### 3. Sitemap Validation
- [ ] Access: https://metricmindconcepts.com/sitemap.xml
- [ ] Verify all pages are listed
- [ ] Check lastModified dates
- [ ] Verify priorities are set correctly
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools

### 4. Robots.txt Validation
- [ ] Access: https://metricmindconcepts.com/robots.txt
- [ ] Verify sitemap URL is correct
- [ ] Test with: https://www.google.com/webmasters/tools/robots-testing-tool
- [ ] Check crawl-delay settings

### 5. Performance Testing
- [ ] Run PageSpeed Insights: https://pagespeed.web.dev/
- [ ] Check Core Web Vitals:
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1
- [ ] Test mobile responsiveness
- [ ] Verify image optimization

### 6. Social Media Preview Testing
- [ ] Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- [ ] Twitter Card Validator: https://cards-dev.twitter.com/validator
- [ ] LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/
- [ ] WhatsApp link preview (share link and check preview)

### 7. Mobile Optimization
- [ ] Test on mobile devices
- [ ] Verify viewport meta tag
- [ ] Check touch targets are adequate
- [ ] Test mobile menu functionality
- [ ] Verify mobile-friendly test: https://search.google.com/test/mobile-friendly

### 8. Accessibility
- [ ] Run WAVE accessibility checker
- [ ] Verify heading hierarchy (H1 → H2 → H3)
- [ ] Check alt text on all images
- [ ] Test keyboard navigation
- [ ] Verify color contrast

## 🚀 Post-Launch Monitoring

### Week 1
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Monitor indexing status
- [ ] Check for crawl errors
- [ ] Verify structured data appears in search results

### Week 2-4
- [ ] Monitor search impressions
- [ ] Track click-through rates
- [ ] Check for rich snippets in search results
- [ ] Monitor Core Web Vitals
- [ ] Review Search Console reports

### Monthly
- [ ] Update sitemap if new pages added
- [ ] Review and update keywords
- [ ] Check for broken links
- [ ] Monitor backlinks
- [ ] Review analytics data

## 🔧 Quick Fixes

### If metadata not showing:
1. Clear browser cache
2. Check `metadataBase` is correct
3. Verify domain is correct in all metadata
4. Check for typos in URLs

### If structured data errors:
1. Validate JSON-LD syntax
2. Check for missing required fields
3. Verify schema.org types are correct
4. Test with Google's Rich Results Test

### If sitemap not working:
1. Verify sitemap.ts exports correctly
2. Check file is accessible at /sitemap.xml
3. Verify all URLs use https://
4. Check for syntax errors

## 📊 Tools & Resources

### Validation Tools:
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema.org Validator: https://validator.schema.org/
- Open Graph Debugger: https://www.opengraph.xyz/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- PageSpeed Insights: https://pagespeed.web.dev/
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly

### Monitoring Tools:
- Google Search Console: https://search.google.com/search-console
- Bing Webmaster Tools: https://www.bing.com/webmasters
- Google Analytics: https://analytics.google.com/
- Ahrefs: https://ahrefs.com/ (optional, paid)
- SEMrush: https://www.semrush.com/ (optional, paid)

## ✅ Success Criteria

Your SEO is working correctly if:
- ✅ All pages indexed in Google
- ✅ Rich snippets appear in search results
- ✅ Social media previews show correctly
- ✅ Core Web Vitals are green
- ✅ No crawl errors in Search Console
- ✅ Structured data validates without errors
- ✅ Sitemap is accessible and complete
- ✅ Robots.txt allows crawling

---

**Note**: Some features (like rich snippets in search results) may take 1-4 weeks to appear after indexing.

