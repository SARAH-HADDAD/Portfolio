import re

# Read the HTML content from the file
with open('input.html', 'r') as file:
    html_content = file.read()

# Remove all content between <svg> and </svg> tags (case-sensitive, multi-line)
cleaned_content = re.sub(r'<svg.*?</svg>', '', html_content, flags=re.DOTALL)

# Write the cleaned content back to a file (or overwrite the original)
with open('output.html', 'w') as file:
    file.write(cleaned_content)