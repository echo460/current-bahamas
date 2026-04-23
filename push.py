import subprocess, os

repo_dir = "/Users/brianbirch/projects/current-bahamas"
ref_dir  = "/Users/brianbirch/projects/water-runner-web"

r = subprocess.run(
    ['git', 'credential', 'fill'],
    input='protocol=https\nhost=github.com\n',
    capture_output=True, text=True, cwd=ref_dir
)
creds = dict(l.split('=', 1) for l in r.stdout.strip().split('\n') if '=' in l)
token = creds.get('password', '')

remote_url = f"https://echo460:{token}@github.com/echo460/current-bahamas.git"
subprocess.run(['git', 'remote', 'set-url', 'origin', remote_url], cwd=repo_dir, capture_output=True)

# Stage and commit
subprocess.run(['git', 'add', '-A'], cwd=repo_dir)
r = subprocess.run(
    ['git', 'commit', '-m',
     'Wire API routes, update intake/contact pages, add Tally field spec\n\n'
     '- src/app/api/contact/route.ts: live Airtable write + n8n webhook trigger\n'
     '- src/app/api/intake/route.ts: Tally webhook handler -> Airtable Clients\n'
     '- src/app/(marketing)/intake/page.tsx: full Tally field spec in comments, fallback form\n'
     '- src/app/(marketing)/contact/page.tsx: success/error states, privacy link\n\n'
     'TODO: set TALLY_FORM_ID once form is built at tally.so\n'
     'TODO: set AIRTABLE_API_KEY + AIRTABLE_BASE_ID in Vercel env vars'],
    cwd=repo_dir, capture_output=True, text=True
)
print("commit:", r.returncode, r.stdout.strip()[:80], r.stderr.strip()[:80])

r = subprocess.run(['git', 'push', 'origin', 'main'], cwd=repo_dir, capture_output=True, text=True)
print("push:", r.returncode, r.stderr.strip()[-120:])

subprocess.run(['git', 'remote', 'set-url', 'origin',
                'https://github.com/echo460/current-bahamas.git'], cwd=repo_dir)
print("done")
