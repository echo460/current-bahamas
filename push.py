import subprocess

repo_dir = "/Users/brianbirch/projects/current-bahamas"
ref_dir  = "/Users/brianbirch/projects/water-runner-web"

r = subprocess.run(
    ['git', 'credential', 'fill'],
    input='protocol=https\nhost=github.com\n',
    capture_output=True, text=True, cwd=ref_dir
)
creds = dict(l.split('=', 1) for l in r.stdout.strip().split('\n') if '=' in l)
token = creds.get('password', '')
if not token:
    print("ERROR: no token"); exit(1)

remote_url = f"https://echo460:{token}@github.com/echo460/current-bahamas.git"
subprocess.run(['git', 'remote', 'set-url', 'origin', remote_url], cwd=repo_dir)

r = subprocess.run(['git', 'push', 'origin', 'main'], cwd=repo_dir, capture_output=True, text=True)
print("stdout:", r.stdout.strip())
print("stderr:", r.stderr.strip())
print("rc:", r.returncode)

subprocess.run(['git', 'remote', 'set-url', 'origin', 'https://github.com/echo460/current-bahamas.git'], cwd=repo_dir)
print("Token cleaned from remote URL")
