import json

with open('final_results.json', 'r') as f:
    data = json.load(f)

for slug in data:
    item = data[slug]
    # Shorten definition
    item['definition'] = " ".join(item['definition'].split()[:50])
    # Shorten scope
    item['scope'] = " ".join(item['scope'].split()[:40])
    # Shorten reasons
    item['reasons_to_study_online'] = [r[:50] for r in item['reasons_to_study_online']]
    # Shorten syllabus
    for sem in item['syllabus']:
        item['syllabus'][sem] = item['syllabus'][sem][:4]
    # Shorten faqs
    for faq in item['faqs']:
        faq['answer'] = faq['answer'][:80]

with open('minified_results.json', 'w') as f:
    json.dump(data, f, separators=(',', ':'))
