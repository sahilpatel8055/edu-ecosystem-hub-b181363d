urls=(
  "https://www.learningroutes.in/blog/mba-marketing-online"
  "https://www.learningroutes.in/blog/online-mba-hospital-healthcare"
  "https://www.learningroutes.in/blog/online-mba-it"
  "https://www.learningroutes.in/blog/online-mba-banking-finance"
  "https://www.learningroutes.in/blog/online-mba-international-business"
  "https://www.learningroutes.in/blog/online-mba-retail-management"
  "https://www.learningroutes.in/blog/online-mba-business-analytics"
  "https://www.learningroutes.in/blog/online-mba-operations-management"
  "https://www.learningroutes.in/blog/mba-online-finance"
)

slugs=(
  "marketing"
  "hospital-healthcare"
  "information-technology"
  "banking-finance"
  "international-business"
  "retail-management"
  "business-analytics"
  "operations-management"
  "finance"
)

mkdir -p raw_data

for i in "${!urls[@]}"; do
  url="${urls[$i]}"
  slug="${slugs[$i]}"
  (
    curl -s -X POST "$AGW_URL/f/website-fetch/v1/scrape" \
      -H "Authorization: Bearer $AGW_TOKEN" \
      -H "Content-Type: application/json" \
      -d "{\"url\": \"$url\", \"formats\": [\"markdown\"]}" | jq -r '.data.markdown' > "raw_data/$slug.md"
  ) &
done

wait
