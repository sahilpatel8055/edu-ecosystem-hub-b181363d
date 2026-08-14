urls=(
  "https://www.collegesathi.com/online-course/pg-course/online-mca/multimedia-gaming-ar-vr"
  "https://www.collegesathi.com/online-course/pg-course/online-mca/full-stack-development-devops"
  "https://www.collegesathi.com/online-course/pg-course/online-mca/computer-science-it"
  "https://www.collegesathi.com/online-course/pg-course/online-mca/blockchain-technology"
  "https://www.collegesathi.com/online-course/pg-course/online-mca/data-science"
  "https://www.collegesathi.com/online-course/pg-course/online-mca/cloud-computing"
  "https://www.collegesathi.com/online-course/pg-course/online-mca/ai-ml"
)

for i in "${!urls[@]}"; do
  url="${urls[$i]}"
  filename="mca_$i.json"
  curl -s -X POST "$AGW_URL/f/website-fetch/v1/scrape" \
    -H "Authorization: Bearer $AGW_TOKEN" \
    -H "Content-Type: application/json" \
    -d "{\"url\": \"$url\", \"formats\": [\"markdown\"]}" > "$filename" &
done
wait
