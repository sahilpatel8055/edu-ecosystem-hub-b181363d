import json

with open('final_results.json', 'r') as f:
    data = json.load(f)

for slug in data:
    item = data[slug]
    item['definition'] = " ".join(item['definition'].split()[:45]) + "..."
    item['scope'] = " ".join(item['scope'].split()[:35]) + "..."
    item['reasons_to_study_online'] = [r[:45] for r in item['reasons_to_study_online']]
    for sem in item['syllabus']:
        item['syllabus'][sem] = item['syllabus'][sem][:3]
    for faq in item['faqs']:
        faq['answer'] = faq['answer'][:60] + ".."
    item['top_recruiters_industries'] = item['top_recruiters_industries'][:4]

with open('minified_results_v2.json', 'w') as f:
    json.dump(data, f, separators=(',', ':'))
