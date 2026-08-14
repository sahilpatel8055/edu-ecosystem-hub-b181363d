urls=(
  "https://www.collegesathi.com/online-course/pg-course/online-ma/sociology"
  "https://www.collegesathi.com/online-course/pg-course/online-ma/political-science"
  "https://www.collegesathi.com/online-course/pg-course/online-ma/english"
  "https://www.collegesathi.com/online-course/pg-course/online-ma/med"
  "https://www.collegesathi.com/online-course/ug-course/online-bcom/e-accounting"
  "https://www.collegesathi.com/online-course/ug-course/online-bcom/international-finance-accounting"
  "https://www.collegesathi.com/online-course/ug-course/online-bcom/e-commerce-management"
  "https://www.collegesathi.com/online-course/ug-course/online-bcom/accounting"
  "https://www.learningroutes.in/blog/top-online-mcom-specialisations"
)
slugs=(
  "sociology"
  "political-science"
  "english"
  "education"
  "e-accounting"
  "international-finance-accounting"
  "e-commerce-management"
  "accounting"
  "mcom_hub"
)

for i in "${!urls[@]}"; do
  url="${urls[$i]}"
  slug="${slugs[$i]}"
  echo "Fetching $slug from $url..."
  curl -s -X POST "$AGW_URL/f/website-fetch/v1/scrape" \
    -H "Authorization: Bearer $AGW_TOKEN" \
    -H "Content-Type: application/json" \
    -d "{\"url\":\"$url\",\"formats\":[\"markdown\"]}" | jq -r '.data.markdown' > "${slug}.md" &
done

wait
echo "All pages fetched."
